"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[964],{20964:(e,t,a)=>{a.d(t,{save:()=>m,saveAs:()=>p});var r=a(97924),i=a(72945);const o="Image Service",n="imagery-layer-save",s="imagery-layer-save-as",l="imagery-tile-layer-save",c="imagery-tile-layer-save-as";function d(e){var t;if("imagery"===e.type)return{isValid:!0};const{raster:a}=e,r="Function"===(null===a||void 0===a?void 0:a.datasetFormat)?null===(t=a.primaryRasters)||void 0===t?void 0:t.rasters[0]:a;return{isValid:"RasterTileServer"===(null===r||void 0===r?void 0:r.datasetFormat)&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function u(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function y(e,t){const{parsedUrl:a,title:r,fullExtent:o}=e;t.url=a.path,t.title||(t.title=r);try{t.extent=await(0,i.sQ)(o)}catch{t.extent=void 0}(0,i.OM)(t,i.mm.METADATA),"imagery-tile"===e.type&&(0,i.LG)(t,i.mm.TILED_IMAGERY)}async function m(e,t){const a="imagery"===e.type?n:l;return(0,r.UN)({layer:e,itemType:o,validateLayer:d,createItemData:u,errorNamePrefix:a},t)}async function p(e,t,a){const i="imagery"===e.type?s:c;return(0,r.Uh)({layer:e,itemType:o,validateLayer:d,createItemData:u,errorNamePrefix:i,newItem:t,setItemProperties:y},a)}},97924:(e,t,a)=>{a.d(t,{UN:()=>g,Uh:()=>h});var r=a(50076),i=a(37888),o=a(65308),n=a(70652),s=a(79942),l=a(72945),c=a(65526),d=a(24907);async function u(e){const{layer:t,errorNamePrefix:a,validateLayer:i}=e;await t.load(),function(e,t,a){const i=a(e);if(!i.isValid)throw new r.A("".concat(t,":invalid-parameters"),i.errorMessage,{layer:e})}(t,a,i)}function y(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function m(e){const{item:t,errorNamePrefix:a,layer:i,validateItem:o}=e;if((0,c.X)(t),function(e){const{item:t,itemType:a,additionalItemType:i,errorNamePrefix:o,layer:n}=e,s=[a];if(i&&s.push(i),!s.includes(t.type)){const e=s.map((e=>"'".concat(e,"'"))).join(", ");throw new r.A("".concat(o,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:n})}}(e),o){const e=o(t);if(!e.isValid)throw new r.A("".concat(a,":invalid-parameters"),e.errorMessage,{layer:i})}}function p(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:i}=t;if(!i)throw new r.A("".concat(a,":portal-item-not-set"),y(t,"requires the portalItem property to be set"));if(!i.loaded)throw new r.A("".concat(a,":portal-item-not-loaded"),y(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:i})}function v(e){var t,a,r,i;const{newItem:s,itemType:l}=e;let c=n.default.from(s);return c.id&&(c=c.clone(),c.id=null),null!==(a=(t=c).type)&&void 0!==a||(t.type=l),null!==(i=(r=c).portal)&&void 0!==i||(r.portal=o.A.getDefault()),m({...e,item:c}),c}function f(e){return(0,s.m)(e,"portal-item")}async function w(e,t,a){var r,i;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const o=e.write({},t);return await Promise.all(null!==(r=null===(i=t.resources)||void 0===i?void 0:i.pendingOperations)&&void 0!==r?r:[]),(0,d.c)(t,{errorName:"layer-write:unsupported"},a),o}function I(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function g(e,t){const{layer:a,createItemData:r,createJSONContext:o,saveResources:n,supplementalUnsupportedErrors:s}=e;await u(e),p(e);const l=a.portalItem,c=o?o(l):f(l),d=await w(a,c,{...t,supplementalUnsupportedErrors:s}),y=await r({layer:a,layerJSON:d},l);return I(l),await l.update({data:y}),(0,i.v)(c),await(null===n||void 0===n?void 0:n(l,c)),l}async function h(e,t){const{layer:a,createItemData:r,createJSONContext:o,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:l}=e;await u(e);const c=v(e),d=o?o(c):f(c),y=await w(a,d,{...t,supplementalUnsupportedErrors:l}),m=await r({layer:a,layerJSON:y},c);return await n(a,c),I(c),await async function(e,t,a){var r;const i=e.portal;await i.signIn(),await(null===(r=i.user)||void 0===r?void 0:r.addItem({item:e,data:t,folder:null===a||void 0===a?void 0:a.folder}))}(c,m,t),a.portalItem=c,(0,i.v)(d),await(null===s||void 0===s?void 0:s(c,d)),c}}}]);
//# sourceMappingURL=964.3c4a779b.chunk.js.map