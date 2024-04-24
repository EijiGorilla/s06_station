/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import {
  map,
  view,
  basemaps,
  layerList,
  measurement,
  timeSlider,
  start,
  compass,
  buildingExplorerExpand,
} from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-segmented-control';
import '@esri/calcite-components/dist/components/calcite-segmented-control-item';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteButton,
  CalciteLabel,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import {
  buildingLayer,
  floorsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  wallsLayer,
} from './layers';
// import TimeSlider from './components/TimeSlider';
import { dateUpdate, stationValues } from './Query';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);
  const measurementToolDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  //
  const [buildingLayerLoaded, setBuildingLayerLoaded] = useState<any>();

  // Measurement tools
  const [activeAnalysis, setActiveAnalysis] = useState<any | undefined>('');

  // Segmented list
  const [stationSelected, setStationSelected] = useState<string>(stationValues[0].station);
  const stationNames = [stationValues[0].station, stationValues[1].station];

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (activeWidget === 'timeslider') {
      timeSlider.timeExtent.end = start;
      view.ui.remove(timeSlider);
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;

      // Reset timeslider when closed
      if (nextWidget === 'timeslider') {
        view.ui.add(timeSlider, 'bottom-leading');
      }
    }
  });

  // Measurement Tool
  useEffect(() => {
    if (activeAnalysis === 'directLineMeasurementAnalysisButton') {
      measurement.activeTool = 'direct-line';
    } else if (activeAnalysis === 'areaMeasurementAnalysisButton') {
      measurement.activeTool = 'area';
    } else if (activeAnalysis === 'clearButton') {
      measurement.clear();
    }
  }, [activeAnalysis]);

  useEffect(() => {
    if (nextWidget === 'timeslider') {
      view.ui.remove(timeSlider);
    }
  }, []);

  useEffect(() => {
    // map.ground.opacity = underground === true ? 0.7 : 1;
    map.ground.opacity = 0.6;
    view.environment.atmosphereEnabled = false;
  }, []);

  useEffect(() => {
    buildingLayer.load().then(() => {
      setBuildingLayerLoaded(buildingLayer.loadStatus);
    });
  });

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });

    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      // Measurement tool
      measurement.container = measurementToolDiv.current;
      const measureButton = document.getElementById('measurementToolMenu') as HTMLElement;
      view.ui.add(measureButton, 'top-right');

      // Building Explorer
      view.ui.add(buildingExplorerExpand, 'top-right');

      // Compass
      view.ui.add(compass, 'top-right');

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" layout="center" scale="m">
          {buildingLayerLoaded === 'loaded' ? (
            <Chart station={!stationSelected ? '' : stationSelected} />
          ) : (
            <div></div>
          )}
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            height: '70px',
            padding: '0 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">S-06 STATION STRUCTURE</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          {/* Segmented List */}
          <CalciteSegmentedControl
            onCalciteSegmentedControlChange={(event: any) => {
              setStationSelected(event.target.selectedItem.id);
            }}
          >
            {stationSelected &&
              stationNames.map((station: any, index: any) => {
                return (
                  <CalciteSegmentedControlItem
                    {...(stationSelected === station ? { checked: true } : {})}
                    key={index}
                    value={station}
                    id={station}
                  >
                    {station}
                  </CalciteSegmentedControlItem>
                );
              })}
          </CalciteSegmentedControl>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'50px'}
            width={'65px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '3%',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="timeslider"
              icon="clock"
              text="Timeslider"
              id="timeslider"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="land-acquisition"
                ref={layerListDiv}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="basemaps"
                ref={calcitePanelBasemaps}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            class="timeslider-panel"
            height-scale="s"
            data-panel-id="timeslider"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter utility data</b> by contract package, company, and data type:
                    (point or line).
                  </li>
                  <br />
                  <li>
                    <b>Click the bar-chart series</b> to view progress on the respective company and
                    work status over the map.
                  </li>
                  <br />
                  <li>Click/unclick widgets icon for viewing Layer list, legend, and basemaps.</li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>

        {/* Ground On-Off Switch */}
        {/* <CalciteLabel
          layout="inline"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '23%',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground On
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>
          Off
        </CalciteLabel> */}

        {/* Measurement Tools */}
        <div
          id="measurementToolMenu"
          className="esri-widget"
          style={{
            padding: '0.5em',
            maxWidth: '110px',
            width: '200px',
            height: '45px',
          }}
        >
          <CalciteButton
            id="directLineMeasurementAnalysisButton"
            icon-start="measure-line"
            title="Interact with direct line measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="areaMeasurementAnalysisButton"
            icon-start="measure-area"
            title="Interact with area measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="clearButton"
            icon-start="trash"
            title="Clear measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
        </div>

        <div className="mapDiv" ref={mapDiv}></div>

        {/* time slider widget */}
        {/* {nextWidget === 'timeslider' && nextWidget !== activeWidget ? (
          <TimeSlider station={!stationName ? '' : stationName.name} />
        ) : (
          ''
        )} */}
      </CalciteShell>
    </>
  );
}

export default App;
