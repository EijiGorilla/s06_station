import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Compass from '@arcgis/core/widgets/Compass';
import BuildingExplorer from '@arcgis/core/widgets/BuildingExplorer';
import {
  buildingLayer,
  chainageLayer,
  pierNoLayer,
  rowLayer,
  stationLayer,
  viaductLayer,
} from './layers';
import TimeSlider from '@arcgis/core/widgets/TimeSlider';
import {
  floorsLayer,
  wallsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  exteriorShellLayer,
} from './layers';
import Measurement from '@arcgis/core/widgets/Measurement';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [chainageLayer, pierNoLayer, rowLayer], //stationLayer,
});

map.add(viaductLayer);
map.add(buildingLayer);
map.add(alignmentGroupLayer);
map.add(stationLayer);

export const view = new SceneView({
  container: undefined,
  map,
  camera: {
    position: {
      x: 121.1302089,
      y: 14.2695932,
      z: 500,
    },
    tilt: 35,
  },
  viewingMode: 'local',
  environment: {
    starsEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});

// Building Explorer
const buildingExplorer = new BuildingExplorer({
  view: view,
  layers: [buildingLayer],
});

export const buildingExplorerExpand = new Expand({
  view,
  content: buildingExplorer,
  expandIcon: 'chevrons-right',
  expandTooltip: 'Building Explorer',
});

// Layer List
export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    // if (item.layer.type !== 'group') {
    //   item.panel = {
    //     content: 'legend',
    //     open: true,
    //   };
    // }

    item.title === 'Chainage' || item.title === 'Pier No' || item.title === 'Viaduct'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

// Compass
export var compass = new Compass({
  view: view,
});

// Search
// const sources = [
//   {
//     layer: pierNoLayer,
//     searchFields: ['PIER'],
//     displayField: 'PIER',
//     exactMatch: false,
//     outFields: ['PIER'],
//     name: 'Pier No',
//     zoomScale: 1000,
//     placeholder: 'example: P-288',
//   },
//   {
//     layer: chainageLayer,
//     searchFields: ['KmSpot'],
//     displayField: 'KmSpot',
//     exactMatch: false,
//     outFields: ['*'],
//     zoomScale: 1000,
//     name: 'Main KM',
//     placeholder: 'example: 80+400',
//   },
// ];

// var searchWidget = new Search({
//   view: view,
//   locationEnabled: false,
//   allPlaceholder: 'Chainage or pier no',
//   includeDefaultSources: false,
//   sources: sources,
// });

// const searchExpand = new Expand({
//   view: view,
//   content: searchWidget,
//   expandIconClass: 'esri-icon-search',
//   group: 'top-right',
// });
// view.ui.add(searchExpand, {
//   position: 'top-right',
// });

export const start = new Date(2021, 9, 1);
export const end = new Date(2027, 1, 1);

interface Props {
  interval: any;
  timeExtent: any;
}

const stops: Props = {
  interval: {
    value: 1,
    unit: 'months',
  },
  timeExtent: { start, end },
};

export const timeSlider = new TimeSlider({
  container: undefined,
  mode: 'cumulative-from-start',
  layout: 'auto',
  fullTimeExtent: {
    start: start,
    end: end,
  },
  stops: stops,
});
