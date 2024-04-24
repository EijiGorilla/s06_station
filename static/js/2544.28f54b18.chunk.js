"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[2544],{62544:(e,r,a)=>{a.r(r),a.d(r,{fromUrl:()=>v});var t=a(50076),l=a(90534),n=a(13096),o=a(39323),s=a(11668),i=a(31933),u=a(62487),c=a(67061);const y={FeatureLayer:!0,SceneLayer:!0};async function v(e){var r;const u=null===(r=e.properties)||void 0===r?void 0:r.customParameters,v=await async function(e,r){let a=(0,n.qg)(e);if(null==a&&(a=await async function(e,r){var a,t;const o=await(0,c.V)(e,{customParameters:r});let s=null,i=null;const u=o.type;if("Feature Layer"===u||"Table"===u?(s="FeatureServer",i=null!==(a=o.id)&&void 0!==a?a:null):"indexedVector"===u?s="VectorTileServer":o.hasOwnProperty("mapName")?s="MapServer":o.hasOwnProperty("bandCount")&&o.hasOwnProperty("pixelSizeX")?s="ImageServer":o.hasOwnProperty("maxRecordCount")&&o.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":o.hasOwnProperty("streamUrls")?s="StreamServer":f(o)?(s="SceneServer",i=o.id):o.hasOwnProperty("layers")&&f(null===(t=o.layers)||void 0===t?void 0:t[0])&&(s="SceneServer"),!s)return null;const y=null!=i?(0,n.iz)(e):null;return{title:null!=y&&o.name||(0,l.e7)(e),serverType:s,sublayer:i,url:{path:null!=y?y.serviceUrl:(0,l.An)(e).path}}}(e,r)),null==a)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:u,sublayer:v}=a;let d;const m={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},w="FeatureServer"===u,S="SceneServer"===u,b={parsedUrl:a,Constructor:null,layerId:(w||S)&&null!==v&&void 0!==v?v:void 0,layers:[],tables:[]};switch(u){case"MapServer":d=null!=v?"FeatureLayer":await async function(e,r){return(await(0,c.V)(e,{customParameters:r})).tileInfo}(e,r)?"TileLayer":"MapImageLayer";break;case"ImageServer":{var h;const a=await(0,c.V)(e,{customParameters:r}),{tileInfo:t,cacheType:l}=a;d=t?"LERC"!==(null===t||void 0===t||null===(h=t.format)||void 0===h?void 0:h.toUpperCase())||l&&"elevation"!==l.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,c.V)(a.url.path,{customParameters:r});if(d="SceneLayer",e){const r=null===e||void 0===e?void 0:e.layers;if("Voxel"===(null===e||void 0===e?void 0:e.layerType))d="VoxelLayer";else if(null!==r&&void 0!==r&&r.length){var I;const e=null===(I=r[0])||void 0===I?void 0:I.layerType;null!=e&&null!=i.XX[e]&&(d=i.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(d="FeatureLayer",null!=v){const a=await(0,c.V)(e,{customParameters:r});b.sourceJSON=a,"Oriented Imagery Layer"===a.type&&(d="OrientedImageryLayer")}break;default:d=m[u]}if(y[d]&&null==v){var L;const a=await async function(e,r,a){var t,l;let n,i,u=!1;switch(r){case"FeatureServer":{const r=await(0,s.Q)(e,{customParameters:a});u=!!r.layersJSON,n=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await async function(e,r){var a;const t=await(0,c.V)(e,{customParameters:r}),l=null===(a=t.layers)||void 0===a?void 0:a[0];if(!l)return{serviceInfo:t};try{const{serverUrl:a}=await(0,o.L)(e),l=await(0,c.V)(a,{customParameters:r}).catch((()=>null));return l&&(t.tables=l.tables),{serviceInfo:t,tableServerUrl:a}}catch{return{serviceInfo:t}}}(e,a);n=r.serviceInfo,i=r.tableServerUrl;break}default:n=await(0,c.V)(e,{customParameters:a})}const y=null===(t=n)||void 0===t?void 0:t.layers,v=null===(l=n)||void 0===l?void 0:l.tables;return{layers:(null===y||void 0===y?void 0:y.map((e=>({id:e.id}))).reverse())||[],tables:(null===v||void 0===v?void 0:v.map((e=>({serverUrl:i,id:e.id}))).reverse())||[],layerInfos:u?y:[],tableInfos:u?v:[]}}(e,u,r);if(w&&(b.sublayerInfos=a.layerInfos,b.tableInfos=a.tableInfos),1!==a.layers.length+a.tables.length)b.layers=a.layers,b.tables=a.tables,w&&(null===(L=a.layerInfos)||void 0===L?void 0:L.length)&&(b.sublayerConstructorProvider=await async function(e){const r=[],a=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(r.push(t),a.push(p("OrientedImageryLayer"))):(r.push(t),a.push(p("FeatureLayer")))})),!a.length)return;const t=await Promise.all(a),l=new Map;return r.forEach(((e,r)=>{l.set(e,t[r])})),e=>l.get(e.type)}(a.layerInfos));else if(w||S){var O,g,P,T,V,F;const e=null!==(O=null===(g=a.layerInfos)||void 0===g?void 0:g[0])&&void 0!==O?O:null===(P=a.tableInfos)||void 0===P?void 0:P[0];b.layerId=null!==(T=null===(V=a.layers[0])||void 0===V?void 0:V.id)&&void 0!==T?T:null===(F=a.tables[0])||void 0===F?void 0:F.id,b.sourceJSON=e,w&&"Oriented Imagery Layer"===(null===e||void 0===e?void 0:e.type)&&(d="OrientedImageryLayer")}}return b.Constructor=await p(d),b}(e.url,u),m={...e.properties,url:e.url};if(v.layers.length+v.tables.length===0)return null!=v.layerId&&(m.layerId=v.layerId),null!=v.sourceJSON&&(m.sourceJSON=v.sourceJSON),new v.Constructor(m);const w=new(0,(await Promise.resolve().then(a.bind(a,4604))).default)({title:v.parsedUrl.title});return await async function(e,r,a){function t(e,r,t,l){const n={...a,layerId:r,sublayerTitleMode:"service-name"};return null!=e&&(n.url=e),null!=t&&(n.sourceJSON=t),l(n)}const l=r.sublayerConstructorProvider;for(const{id:o,serverUrl:s}of r.layers){var n;const a=d(r.sublayerInfos,o),i=null!==(n=a&&(null===l||void 0===l?void 0:l(a)))&&void 0!==n?n:r.Constructor,u=t(s,o,a,(e=>new i(e)));e.add(u)}if(r.tables.length){const a=await p("FeatureLayer");r.tables.forEach((l=>{let{id:n,serverUrl:o}=l;const s=t(o,n,d(r.tableInfos,n),(e=>new a(e)));e.tables.add(s)}))}}(w,v,m),w}function d(e,r){return e?e.find((e=>e.id===r)):null}function f(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function p(e){return(0,u.S[e])()}},11668:(e,r,a)=>{a.d(r,{Q:()=>l});var t=a(67061);async function l(e,r){var a;const{loadContext:l,...n}=r||{},o=l?await l.fetchServiceMetadata(e,n):await(0,t.V)(e,n);c(o),s(o);const i={serviceJSON:o};if((null!==(a=o.currentVersion)&&void 0!==a?a:0)<10.5)return i;const u="".concat(e,"/layers"),y=l?await l.fetchServiceMetadata(u,n):await(0,t.V)(u,n);return c(y),s(y),i.layersJSON={layers:y.layers,tables:y.tables},i}function n(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function o(e){return"Table"===e.type}function s(e){var r,a;e.layers=null===(r=e.layers)||void 0===r?void 0:r.filter(n),e.tables=null===(a=e.tables)||void 0===a?void 0:a.filter(o)}function i(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function c(e){var r,a;null!==(r=e.layers)&&void 0!==r&&r.forEach(i),null===(a=e.tables)||void 0===a||a.forEach(u)}},67061:(e,r,a)=>{a.d(r,{V:()=>l});var t=a(3825);async function l(e,r){const{data:a}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...null===r||void 0===r?void 0:r.customParameters,token:null===r||void 0===r?void 0:r.apiKey}});return a}}}]);
//# sourceMappingURL=2544.28f54b18.chunk.js.map