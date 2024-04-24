"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[2487],{77491:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(67061);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},64130:(e,a,t)=>{t.d(a,{PC:()=>d,WZ:()=>l,XH:()=>c,_r:()=>n,ay:()=>u,bO:()=>s,nu:()=>y,pJ:()=>i,z8:()=>o});var r=t(39323);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function s(e,a,t){var r,s;if(null==(null===(r=e)||void 0===r?void 0:r.layers)||null==(null===(s=e)||void 0===s?void 0:s.tables)){var l,c,o;const r=await t.fetchServiceMetadata(a,{customParameters:null===(l=i(e))||void 0===l?void 0:l.customParameters});(e=e||{}).layers=e.layers||(null===r||void 0===r||null===(c=r.layers)||void 0===c?void 0:c.map(n)),e.tables=e.tables||(null===r||void 0===r||null===(o=r.tables)||void 0===o?void 0:o.map(n))}return e}function l(e){const{layers:a,tables:t}=e;return null!==a&&void 0!==a&&a.length?a[0].id:null!==t&&void 0!==t&&t.length?t[0].id:null}function i(e){if(!e)return null;const{layers:a,tables:t}=e;return null!==a&&void 0!==a&&a.length?a[0]:null!==t&&void 0!==t&&t.length?t[0]:null}function c(e){var a,t,r,n;return(null!==(a=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==a?a:0)+(null!==(r=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==r?r:0)}function o(e){var a;const t=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function u(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}function d(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"CatalogLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function y(e,a,t){var s,l,c;if(null===e||void 0===e||!e.url)return null!==(s=a)&&void 0!==s?s:{};if(null!==(l=a)&&void 0!==l||(a={}),!a.layers){var o;const r=await t.fetchServiceMetadata(e.url);a.layers=null===(o=r.layers)||void 0===o?void 0:o.map(n)}const{serverUrl:u,portalItem:d}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:null===(c=i(a))||void 0===c?void 0:c.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==u)return a.tables=[],a;if(!a.tables&&d){const e=await d.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var y,v;const r=await t.fetchServiceMetadata(u,{customParameters:null===(y=i(e))||void 0===y?void 0:y.customParameters});a.tables=null===r||void 0===r||null===(v=r.tables)||void 0===v?void 0:v.map(n)}}if(a.tables)for(const r of a.tables)r.url="".concat(u,"/").concat(r.id);return a}},2487:(e,a,t)=>{t.d(a,{fromItem:()=>d,n:()=>y});var r=t(50076),n=t(39323),s=t(77491),l=t(31933),i=t(62487),c=t(70652),o=t(64130),u=t(72945);async function d(e){!e.portalItem||e.portalItem instanceof c.default||(e={...e,portalItem:new c.default(e.portalItem)});const a=await async function(e){await e.load();const a=new s.v;return async function(e){const a=e.className,t=i.S[a];return{constructor:await t(),properties:e.properties}}(await y(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function y(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u.Y)(e,"Map Notes"),t=(0,u.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,u.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,o.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await v(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){var t,r,n,s;await e.load();const l=null!==(t=null===(r=e.typeKeywords)||void 0===r?void 0:r.map((e=>e.toLowerCase())))&&void 0!==t?t:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const i=await a.fetchItemData(e),c=null===i||void 0===i?void 0:i.layerType;if("ArcGISTiledImageServiceLayer"===c)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===c)return{className:"ImageryLayer"};const o=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),u=null===(n=o.cacheType)||void 0===n?void 0:n.toLowerCase(),d=null===(s=o.capabilities)||void 0===s?void 0:s.toLowerCase().includes("tilesonly");return"map"===u||d?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await v(e,a,(async()=>{try{var t;if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),s=await a.fetchServiceMetadata(r);return null!==(t=null===s||void 0===s?void 0:s.tables)&&void 0!==t?t:[]}catch{return[]}}));if("object"==typeof t){var r;const n={};let s;if(null!=t.id?(n.layerId=t.id,s="".concat(e.url,"/layers/").concat(t.id)):s=e.url,null!==(r=e.typeKeywords)&&void 0!==r&&r.length)for(const a of Object.keys(l.XX))if(e.typeKeywords.includes(a))return{className:l.XX[a]};const i=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,o.pJ)(e))||void 0===a?void 0:a.customParameters}))});return{className:l.XX[null===i||void 0===i?void 0:i.layerType]||"SceneLayer",properties:n}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===t||void 0===t?void 0:t.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function v(e,a,t){const{url:r,type:n}=e,s="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(s){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,o.pJ)(e))||void 0===a?void 0:a.customParameters}))});if("Oriented Imagery Layer"===t.type)return{id:t.id,className:"OrientedImageryLayer",sourceJSON:t}}return{}}await e.load();let l=await a.fetchItemData(e);if(s){const e=await(0,o.bO)(l,r,a),t=m(e);if("object"==typeof t){const a=(0,o.z8)(e),r=(0,o.ay)(e),n=(0,o.PC)(e);t.className=null!=t.id&&a.includes(t.id)?"SubtypeGroupLayer":null!=t.id&&null!==r&&void 0!==r&&r.includes(t.id)?"OrientedImageryLayer":null!=t.id&&null!==n&&void 0!==n&&n.includes(t.id)?"CatalogLayer":"FeatureLayer"}return t}if("Scene Service"===n&&(l=await(0,o.nu)(e,l,a)),(0,o.XH)(l)>0)return m(l);const i=await a.fetchServiceMetadata(r);return t&&(i.tables=await t()),m(i)}function m(e){return 1===(0,o.XH)(e)&&{id:(0,o.WZ)(e)}}},67061:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(3825);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return t}}}]);
//# sourceMappingURL=2487.f5ca6749.chunk.js.map