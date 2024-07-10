"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[239,2487],{77491:(e,a,r)=>{r.d(a,{v:()=>n});var t=r(67061);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}},60239:(e,a,r)=>{r.d(a,{N:()=>b,populateOperationalLayers:()=>y});var t=r(19276),n=(r(81806),r(77491)),i=r(62487),l=r(70652);function o(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var s=r(2487),c=r(81589);async function y(e,a,r){if(!a)return;const t=a.map((e=>async function(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await b(t,a,r):T(a)?function(e,a,r){a.itemId&&(e.portalItem=new l.default({id:a.itemId,portal:null===r||void 0===r?void 0:r.portal}),e.when((()=>{var t,n;const i=t=>{var n;const i=t.layerId;G(t,e,a,i,r);const l=null===(n=a.featureCollection)||void 0===n||null===(n=n.layers)||void 0===n?void 0:n[i];l&&t.read(l,r)};null!==(t=e.layers)&&void 0!==t&&t.forEach(i),null===(n=e.tables)||void 0===n||n.forEach(i)})))}(t,a,r.context):M(a)&&await async function(e,a,r){var t;const n=i.S.FeatureLayer,l=await n(),o=a.featureCollection,s=null===o||void 0===o?void 0:o.showLegend,c=null===o||void 0===o||null===(t=o.layers)||void 0===t?void 0:t.map(((t,n)=>{const i=new l;i.read(t,r);const o={...r,ignoreDefaults:!0};return G(i,e,a,n,o),null!=s&&i.read({showLegend:s},o),i}));e.layers.addMany(null!==c&&void 0!==c?c:[])}(t,a,r.context)),await(0,c.L)(t,r.context),t}(await g(e,a),e,a)}(e,r))),n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},v={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},f={...p,LinkChartLayer:"LinkChartLayer"},I={...m},w={...S};async function g(e,a){var r,t;const c=a.context,y=h(c);let u=e.layerType||e.type;!u&&(null===a||void 0===a?void 0:a.defaultLayerType)&&(u=a.defaultLayerType);const d=y[u];let L=d?i.S[d]:i.S.UnknownLayer;if(T(e)){const a=null===c||void 0===c?void 0:c.portal;if(e.itemId){const r=new l.default({id:e.itemId,portal:a});await r.load();const t=(await(0,s.n)(r,new n.v)).className||"UnknownLayer";L=i.S[t]}}else"ArcGISFeatureLayer"===u?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?L=i.S.MapNotesLayer:function(e){return o(e,"route")}(e)?L=i.S.RouteLayer:M(e)&&(L=i.S.GroupLayer):null!==(r=e.wmtsInfo)&&void 0!==r&&r.url&&e.wmtsInfo.layerIdentifier?L=i.S.WMTSLayer:"WFS"===u&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(L=i.S.UnsupportedLayer);return L()}function M(e){var a,r;return"ArcGISFeatureLayer"===e.layerType&&!T(e)&&(null!==(a=null===(r=e.featureCollection)||void 0===r||null===(r=r.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)>1}function T(e){return"Feature Collection"===e.type}function h(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=v;break;case"ground":a=d;break;case"tables":a=L;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=w;break;case"tables":a=I;break;default:a=f}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=m;break;default:a=p}}return a}async function b(e,a,r){const n=new t.A,i=y(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(l){e.destroy();for(const e of n)e.destroy();throw l}}catch(l){throw l}}function G(e,a,r,t,n){var i,l;e.read({id:"".concat(a.id,"-sublayer-").concat(t),visibility:null===(i=null===(l=r.visibleLayers)||void 0===l?void 0:l.includes(t))||void 0===i||i},n)}},64130:(e,a,r)=>{r.d(a,{PC:()=>u,WZ:()=>l,XH:()=>s,_r:()=>n,ay:()=>y,bO:()=>i,nu:()=>d,pJ:()=>o,z8:()=>c});var t=r(39323);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function i(e,a,r){var t,i;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(i=e)||void 0===i?void 0:i.tables)){var l,s,c;const t=await r.fetchServiceMetadata(a,{customParameters:null===(l=o(e))||void 0===l?void 0:l.customParameters});(e=e||{}).layers=e.layers||(null===t||void 0===t||null===(s=t.layers)||void 0===s?void 0:s.map(n)),e.tables=e.tables||(null===t||void 0===t||null===(c=t.tables)||void 0===c?void 0:c.map(n))}return e}function l(e){const{layers:a,tables:r}=e;return null!==a&&void 0!==a&&a.length?a[0].id:null!==r&&void 0!==r&&r.length?r[0].id:null}function o(e){if(!e)return null;const{layers:a,tables:r}=e;return null!==a&&void 0!==a&&a.length?a[0]:null!==r&&void 0!==r&&r.length?r[0]:null}function s(e){var a,r,t,n;return(null!==(a=null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)+(null!==(t=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==t?t:0)}function c(e){var a;const r=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&r.push(e.id)})),r}function y(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}function u(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"CatalogLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function d(e,a,r){var i,l,s;if(null===e||void 0===e||!e.url)return null!==(i=a)&&void 0!==i?i:{};if(null!==(l=a)&&void 0!==l||(a={}),!a.layers){var c;const t=await r.fetchServiceMetadata(e.url);a.layers=null===(c=t.layers)||void 0===c?void 0:c.map(n)}const{serverUrl:y,portalItem:u}=await(0,t.L)(e.url,{sceneLayerItem:e,customParameters:null===(s=o(a))||void 0===s?void 0:s.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==y)return a.tables=[],a;if(!a.tables&&u){const e=await u.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var d,L;const t=await r.fetchServiceMetadata(y,{customParameters:null===(d=o(e))||void 0===d?void 0:d.customParameters});a.tables=null===t||void 0===t||null===(L=t.tables)||void 0===L?void 0:L.map(n)}}if(a.tables)for(const t of a.tables)t.url="".concat(y,"/").concat(t.id);return a}},2487:(e,a,r)=>{r.d(a,{fromItem:()=>u,n:()=>d});var t=r(50076),n=r(39323),i=r(77491),l=r(31933),o=r(62487),s=r(70652),c=r(64130),y=r(72945);async function u(e){!e.portalItem||e.portalItem instanceof s.default||(e={...e,portalItem:new s.default(e.portalItem)});const a=await async function(e){await e.load();const a=new i.v;return async function(e){const a=e.className,r=o.S[a];return{constructor:await r(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,y.Y)(e,"Map Notes"),r=(0,y.Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,y.Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,c.XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await L(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){var r,t,n,i;await e.load();const l=null!==(r=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==r?r:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const o=await a.fetchItemData(e),s=null===o||void 0===o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),y=null===(n=c.cacheType)||void 0===n?void 0:n.toLowerCase(),u=null===(i=c.capabilities)||void 0===i?void 0:i.toLowerCase().includes("tilesonly");return"map"===y||u?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await L(e,a,(async()=>{try{var r;if(!e.url)return[];const{serverUrl:t}=await(0,n.L)(e.url,{sceneLayerItem:e}),i=await a.fetchServiceMetadata(t);return null!==(r=null===i||void 0===i?void 0:i.tables)&&void 0!==r?r:[]}catch{return[]}}));if("object"==typeof r){var t;const n={};let i;if(null!=r.id?(n.layerId=r.id,i="".concat(e.url,"/layers/").concat(r.id)):i=e.url,null!==(t=e.typeKeywords)&&void 0!==t&&t.length)for(const a of Object.keys(l.XX))if(e.typeKeywords.includes(a))return{className:l.XX[a]};const o=await a.fetchServiceMetadata(i,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.pJ)(e))||void 0===a?void 0:a.customParameters}))});return{className:l.XX[null===o||void 0===o?void 0:o.layerType]||"SceneLayer",properties:n}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===r||void 0===r?void 0:r.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function L(e,a,r){const{url:t,type:n}=e,i="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(i){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.pJ)(e))||void 0===a?void 0:a.customParameters}))});if("Oriented Imagery Layer"===r.type)return{id:r.id,className:"OrientedImageryLayer",sourceJSON:r}}return{}}await e.load();let l=await a.fetchItemData(e);if(i){const e=await(0,c.bO)(l,t,a),r=v(e);if("object"==typeof r){const a=(0,c.z8)(e),t=(0,c.ay)(e),n=(0,c.PC)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&null!==t&&void 0!==t&&t.includes(r.id)?"OrientedImageryLayer":null!=r.id&&null!==n&&void 0!==n&&n.includes(r.id)?"CatalogLayer":"FeatureLayer"}return r}if("Scene Service"===n&&(l=await(0,c.nu)(e,l,a)),(0,c.XH)(l)>0)return v(l);const o=await a.fetchServiceMetadata(t);return r&&(o.tables=await r()),v(o)}function v(e){return 1===(0,c.XH)(e)&&{id:(0,c.WZ)(e)}}},67061:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(3825);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=239.ad75e8df.chunk.js.map