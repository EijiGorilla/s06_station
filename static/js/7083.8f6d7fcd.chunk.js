"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[7083],{37083:(e,t,i)=>{i.r(t),i.d(t,{default:()=>K});var s=i(35143),n=i(50346),r=i(46053),o=(i(81806),i(76460)),l=(i(47249),i(85842)),a=i(25329),h=i(63241),u=i(68134),c=i(31633),d=i(9624),m=i(16159),p=(i(35238),i(39356)),v=(i(11265),i(95444),i(59784)),_=i(30726),y=i(96820),w=i(63391),g=i(7137),M=i(63733),f=i(37209),b=i(70825),L=i(70321),A=i(56829),D=i(63860),T=i(38042),S=i(13904),Z=i(89465),C=i(86659),O=i(61425),x=i(76940),k=i(23701),B=i(13312);const R=1e5;let G=class extends A.g{constructor(e){super(e),this._drawActive=!1,this._measurementLayer=new M.A({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new M.A({internal:!0,listMode:"hide",visible:!1}),this._vertices=[],this.geodesicDistanceThreshold=null,this.measurement=null,this.measurementLabel=null}initialize(){(0,D.ud)("esri/core/t9n/Units").then((e=>{this.messages=e})),this.addHandles((0,T.oQ)((async()=>{this.messages=await(0,D.ud)("esri/core/t9n/Units")})));const e=this.view;this._draw=new f.A({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer]),e.focus(),this.addHandles([(0,u.wB)((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updatePolylines()}),u.Vh),(0,u.wB)((()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor]),(()=>{if(!this._vertices.length)return;const e=this._vertices.map((e=>{let{coord:t}=e;return t}));for(const{handle:t}of this._vertices)t.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(e)}))])}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=(0,_.pR)(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=(0,_.pR)(this._measurementLayer),this._manipulatorLayer=(0,_.pR)(this._manipulatorLayer),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}onActivate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>{this._stopSketch()}))}_stopSketch(){this.manipulators.forEach((e=>{let{manipulator:t}=e;t.interactive=!0})),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const{spatialReference:t}=this.view;for(;this._vertices.length>e.length;){const{handle:e,manipulator:t}=this._vertices.pop();e.remove(),this.manipulators.remove(t)}for(let l=this._vertices.length;l<e.length;l++){const[i,s]=e[l],n=I(new S.A({x:i,y:s,spatialReference:t}),this.view,this._manipulatorLayer);this.manipulators.add(n);const r=(0,b.Xt)(n,((e,t)=>{t.next((0,b.y$)(this.view)).next((0,b.n5)(e.graphic)).next((()=>{const t=e.graphic.geometry;this._vertices[l].coord=[t.x,t.y],this._updatePolylines()}))}));this._vertices.push({manipulator:n,coord:[i,s],handle:r})}const i=this._vertices.length-1,s=this._vertices[i],[n,r]=e[i];s.coord[0]===n&&s.coord[1]===r||(s.coord=[n,r],s.manipulator.graphic.geometry=new S.A({x:n,y:r,spatialReference:t}));const o=this._drawActive?this._vertices[i].manipulator:null;this.manipulators.forEach((e=>{let{manipulator:t}=e;t.interactive=null==o||t!==o})),this._updatePolylines()}_updatePolylines(){var e;if(this._vertices.length<2)return void this._measurementLayer.removeAll();const t=this._vertices.map((e=>{let{coord:t}=e;return t})),{measurement:i,drawing:s,original:n}=function(e,t,i){const s=new k.A({paths:[e],spatialReference:t});let n,r;if(t.isGeographic)if((0,g.TT)(t))n=(0,g.l1)([s],"meters")[0],r=(0,g.Ow)(s,R);else{const e=(0,d.project)(s,B.A.WGS84),i=(0,g.Ow)(e,R);n=(0,g.l1)([e],"meters")[0],r=(0,d.project)(i,t)}else if(t.isWebMercator)n=(0,w.geodesicLength)(s,"meters"),r=(0,w.geodesicDensify)(s,R,"meters");else{const e=(0,w.planarLength)(s,"meters");if(null!=i&&e>=i){const e=(0,d.project)(s,B.A.WGS84),i=(0,g.Ow)(e,R);n=(0,g.l1)([e],"meters")[0],r=(0,d.project)(i,t)}else n=e,r=s}return{measurement:{geometry:r,length:n},original:s,drawing:r}}(t,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",i);const r=function(e,t,i){if(!t||!e)return"";switch(i){case"metric":return(0,y.Ee)(e,t.length,"meters");case"imperial":return(0,y.tr)(e,t.length,"meters");default:return(0,y.zJ)(e,(0,c.oU)(t.length,"meters",i),i)}}(this.messages,i,this.unit);let o,l;this._set("measurementLabel",r);const{graphics:a}=this._measurementLayer,h=2===a.length,{effectiveTheme:u}=this.view;h?(o=a.at(0),l=a.at(1)):(o=new p.A({symbol:new Z.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:3.5,color:(0,v.bJ)(u.accentColor).toArray()},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:5,color:u.accentColor.toArray()}]}}})}),l=new p.A({symbol:new C.A({color:u.textColor,haloColor:(0,v._L)((0,v.bJ)(u.textColor,v.pW.Low),.5),haloSize:2,font:new O.A({size:14,family:"sans-serif"})})}),a.removeAll(),a.addMany([o,l])),o.geometry=s,l.geometry=null===(e=n.extent)||void 0===e?void 0:e.center,l.symbol.text=r}};function I(e,t,i){const s=(0,v._L)(t.effectiveTheme.accentColor,.5),n={type:"simple-line",width:0},r=new x.A({style:"circle",color:s,size:8,outline:n}),o=new x.A({style:"circle",color:s,size:12,outline:n}),l=new p.A({geometry:e,symbol:r});return new L.l({view:t,layer:i,graphic:l,focusedSymbol:o})}(0,s._)([(0,r.MZ)()],G.prototype,"_drawActive",void 0),(0,s._)([(0,r.MZ)({readOnly:!0})],G.prototype,"cursor",null),(0,s._)([(0,r.MZ)({value:!0})],G.prototype,"editable",null),(0,s._)([(0,r.MZ)({type:Number})],G.prototype,"geodesicDistanceThreshold",void 0),(0,s._)([(0,r.MZ)({readOnly:!0})],G.prototype,"measurement",void 0),(0,s._)([(0,r.MZ)({readOnly:!0})],G.prototype,"measurementLabel",void 0),(0,s._)([(0,r.MZ)()],G.prototype,"messages",void 0),(0,s._)([(0,r.MZ)()],G.prototype,"unit",void 0),(0,s._)([(0,r.MZ)({constructOnly:!0})],G.prototype,"view",void 0),G=(0,s._)([(0,l.$)("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],G);var U=i(69124);let V=class extends U.j{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views."}initialize(){this.addHandles([(0,u.wB)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.spatialReference}),(()=>this.clear())),(0,u.wB)((()=>this.unit),(e=>{null!=this.tool&&(this.tool.unit=e)}),u.Vh),(0,u.wB)((()=>this.geodesicDistanceThreshold),(e=>{null!=this.tool&&(this.tool.geodesicDistanceThreshold=e)}),u.Vh)])}get geodesicDistanceThreshold(){return this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(e){(0,h.Lx)(o.A.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._set("geodesicDistanceThreshold",e)}get measurement(){return null!=this.tool?this.tool.measurement:null}get measurementLabel(){return null!=this.tool?this.tool.measurementLabel:null}get state(){var e;return this.disabled||null==this.view||null==(null===(e=this.view)||void 0===e?void 0:e.spatialReference)?"disabled":null!=this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return c.GB}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;null!=e&&(await(0,u.C_)((()=>e.ready)),function(e){if(!e)return!1;const{isGeographic:t,isWebMercator:i,isWGS84:s}=e;return t&&!s&&!(0,g.TT)(e)||!t&&!i}(e.spatialReference)&&await(0,d.load)()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new G({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(e){const{unitOptions:t,defaultUnit:i}=this;return null!=e&&t.includes(e)?e:t.includes(i)?i:t.length>0?t[0]:i}_validateUnits(e){if(null==e)return[];const t=e.filter((e=>c.GB.includes(e)));return 0===t.length?c.GB.slice():t}};(0,s._)([(0,r.MZ)(m.q)],V.prototype,"defaultUnit",void 0),(0,s._)([(0,r.MZ)()],V.prototype,"geodesicDistanceThreshold",null),(0,s._)([(0,r.MZ)({readOnly:!0})],V.prototype,"measurement",null),(0,s._)([(0,r.MZ)({readOnly:!0})],V.prototype,"measurementLabel",null),(0,s._)([(0,r.MZ)({readOnly:!0})],V.prototype,"state",null),(0,s._)([(0,r.MZ)({type:String})],V.prototype,"unit",null),(0,s._)([(0,r.MZ)({type:[String]})],V.prototype,"unitOptions",null),V=(0,s._)([(0,l.$)("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],V);const j=V;var z=i(98108),E=i(15062),W=i(19371),P=(i(76099),i(63582)),H=i(54761);const $="esri-distance-measurement-2d",J={base:$,newMeasurementButton:"".concat($,"__clear-button"),widgetIcon:E.T.measureLine};let N=class extends a.A{constructor(e,t){super(e,t),this.iconClass=J.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new j}get active(){return this.viewModel.active}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){const{messages:e,messagesCommon:t,unit:i,unitOptions:s,viewModel:r}=this,{active:o,measurementLabel:l,state:a,supported:h}=r;return(0,H.K)("div",{"aria-label":this.messages.widgetLabel,class:this.classes(J.base,z.D.widget,z.D.panel),key:this,role:"presentation"},this.visible?(0,H.K)(W.I,{active:o,measurementItems:[{key:"distance",title:e.distance,value:l}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:J.newMeasurementButton,state:a,supported:h,unit:i,unitOptions:s,onNewMeasurementClick:()=>{(0,n.QZ)(this.viewModel.start())},onUnitChange:e=>{this.unit=e}}):null)}};(0,s._)([(0,r.MZ)({readOnly:!0})],N.prototype,"active",null),(0,s._)([(0,r.MZ)()],N.prototype,"iconClass",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"icon",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"label",null),(0,s._)([(0,r.MZ)()],N.prototype,"uiStrings",void 0),(0,s._)([(0,r.MZ)(),(0,P.G)("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],N.prototype,"messages",void 0),(0,s._)([(0,r.MZ)(),(0,P.G)("esri/t9n/common")],N.prototype,"messagesCommon",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"unit",null),(0,s._)([(0,r.MZ)()],N.prototype,"unitOptions",null),(0,s._)([(0,r.MZ)()],N.prototype,"view",null),(0,s._)([(0,r.MZ)({type:j})],N.prototype,"viewModel",void 0),(0,s._)([(0,r.MZ)({type:Boolean})],N.prototype,"visible",null),N=(0,s._)([(0,l.$)("esri.widgets.DistanceMeasurement2D")],N);const K=N}}]);
//# sourceMappingURL=7083.8f6d7fcd.chunk.js.map