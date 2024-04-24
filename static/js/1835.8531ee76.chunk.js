"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[1835],{81835:(e,n,t)=>{t.r(n),t.d(n,{classBreaks:()=>r,heatmapStatistics:()=>m,histogram:()=>s,summaryStatistics:()=>o,uniqueValues:()=>l});var i=t(28383),a=t(72003);async function o(e){const{attribute:n,features:t}=e,{normalizationType:o,normalizationField:l,minValue:r,maxValue:s,fieldType:m}=n,u=await(0,i.Jc)({field:n.field,valueExpression:n.valueExpression,normalizationType:o,normalizationField:l,normalizationTotal:n.normalizationTotal,viewInfoParams:n.viewInfoParams,timeZone:n.timeZone,fieldInfos:n.fieldInfos},t),f=(0,a.Vb)({normalizationType:o,normalizationField:l,minValue:r,maxValue:s}),d={value:.5,fieldType:m},c="esriFieldTypeString"===m?(0,a.z9)({values:u,supportsNullCount:f,percentileParams:d}):(0,a.G_)({values:u,minValue:r,maxValue:s,useSampleStdDev:!o,supportsNullCount:f,percentileParams:d});return(0,a.oZ)(c,"esriFieldTypeDate"===m)}async function l(e){const{attribute:n,features:t}=e,o=await(0,i.Jc)({field:n.field,field2:n.field2,field3:n.field3,fieldDelimiter:n.fieldDelimiter,valueExpression:n.valueExpression,viewInfoParams:n.viewInfoParams,timeZone:n.timeZone,fieldInfos:n.fieldInfos},t,!1),l=(0,a.b3)(o);return(0,a.lv)(l,n.domains,n.returnAllCodedValues,n.fieldDelimiter)}async function r(e){const{attribute:n,features:t}=e,{field:o,normalizationType:l,normalizationField:r,normalizationTotal:s,classificationMethod:m}=n,u=await(0,i.Jc)({field:o,valueExpression:n.valueExpression,normalizationType:l,normalizationField:r,normalizationTotal:s,viewInfoParams:n.viewInfoParams,timeZone:n.timeZone,fieldInfos:n.fieldInfos},t),f=(0,a.Rw)(u,{field:o,normalizationType:l,normalizationField:r,normalizationTotal:s,classificationMethod:m,standardDeviationInterval:n.standardDeviationInterval,numClasses:n.numClasses,minValue:n.minValue,maxValue:n.maxValue});return(0,a.jM)(f,m)}async function s(e){const{attribute:n,features:t}=e,{field:o,normalizationType:l,normalizationField:r,normalizationTotal:s,classificationMethod:m}=n,u=await(0,i.Jc)({field:o,valueExpression:n.valueExpression,normalizationType:l,normalizationField:r,normalizationTotal:s,viewInfoParams:n.viewInfoParams,timeZone:n.timeZone,fieldInfos:n.fieldInfos},t);return(0,a.$y)(u,{field:o,normalizationType:l,normalizationField:r,normalizationTotal:s,classificationMethod:m,standardDeviationInterval:n.standardDeviationInterval,numBins:n.numBins,minValue:n.minValue,maxValue:n.maxValue})}async function m(e){var n;const{attribute:t,features:a}=e,{field:o,radius:l,transform:r,spatialReference:s}=t,m=null!==(n=t.size)&&void 0!==n?n:[0,0],u=(0,i.$r)(null!==a&&void 0!==a?a:[],r,s,m);return(0,i.gV)(u,null!==l&&void 0!==l?l:void 0,o,m[0],m[1])}},28383:(e,n,t)=>{t.d(n,{$r:()=>h,Jc:()=>I,gV:()=>y,rb:()=>z});t(35238),t(50076);var i=t(76931),a=t(18288),o=t(13312),l=t(76279),r=t(80963),s=t(53430),m=t(4414),u=t(42633),f=t(72003),d=t(98976),c=t(13904);let v=null;const p=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function h(e,n,t,i){const a=(0,r.d9)(t)?(0,r.Vp)(t):null,o=a?Math.round((a.valid[1]-a.valid[0])/n.scale[0]):null;return e.map((e=>{const t=new c.A(e.geometry);return(0,l.Gy)(n,t,t,t.hasZ,t.hasM),e.geometry=a?function(e,n,t){return e.x<0?e.x+=n:e.x>t&&(e.x-=n),e}(t,null!==o&&void 0!==o?o:0,i[0]):t,e}))}function y(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;const l=new Float64Array(a*o);n=Math.round((0,i.Lz)(n));let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const u=(0,m.YW)(t);for(const{geometry:i,attributes:f}of e){const{x:e,y:t}=i,d=Math.max(0,e-n),c=Math.max(0,t-n),v=Math.min(o,t+n),p=Math.min(a,e+n),h=+u(f);for(let i=c;i<v;i++)for(let o=d;o<p;o++){const u=i*a+o,f=(0,m.hv)(o-e,i-t,n)*h,d=l[u]+=f;r=Math.min(r,d),s=Math.max(s,d)}}return{min:r,max:s}}function z(e){const n=p.exec(e);if(!n)return null;const{hh:t,mm:i,ss:o,ms:l}=n.groups;return Number(t)*a.vf.hours+Number(i)*a.vf.minutes+Number(o)*a.vf.seconds+Number(l||0)}async function I(e,n){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!n)return[];const{field:i,field2:a,field3:l,fieldDelimiter:r,fieldInfos:m,timeZone:c}=e,p=i&&(null===m||void 0===m?void 0:m.find((e=>e.name.toLowerCase()===i.toLowerCase()))),h=!!p&&(0,s.OH)(p),y=!!p&&(0,u.fs)(p),I=e.valueExpression,w=e.normalizationType,T=e.normalizationField,g=e.normalizationTotal,x=[],V=e.viewInfoParams;let Z=null,b=null;if(I){if(!v){const{arcadeUtils:e}=await(0,d.lw)();v=e}v.hasGeometryOperations(I)&&await v.enableGeometryOperations(),Z=v.createFunction(I),b=V?v.getViewInfo({viewingMode:V.viewingMode,scale:V.scale,spatialReference:new o.A(V.spatialReference)}):null}const F=e.fieldInfos,N=n[0]&&"declaredClass"in n[0]&&"esri.Graphic"===n[0].declaredClass||!F?null:{fields:F};return n.forEach((e=>{const n=e.attributes;let o;if(I){const n=N?{...e,layer:N}:e,t=v.createExecContext(n,b,c);o=v.executeFunction(Z,t)}else n&&(o=n[i],a?(o="".concat((0,f.gJ)(o)).concat(r).concat((0,f.gJ)(n[a])),l&&(o="".concat(o).concat(r).concat((0,f.gJ)(n[l])))):"string"==typeof o&&t&&(y?o=o?new Date(o).getTime():null:h&&(o=o?z(o):null)));if(w&&"number"==typeof o&&isFinite(o)){const e=n&&parseFloat(n[T]);o=(0,f.zS)(o,w,e,g)}x.push(o)})),x}},42633:(e,n,t)=>{t.d(n,{fs:()=>l,i0:()=>r});var i=t(65256),a=t(53430),o=(t(98976),t(63919),t(67478));new Set(["integer","small-integer"]);function l(e){return(0,a.vE)(e)||(0,a.zD)(e)||(0,a.Ah)(e)}function r(e,n){const{format:t,timeZoneOptions:a,fieldType:l}=null!==n&&void 0!==n?n:{};let r,s;if(a&&({timeZone:r,timeZoneName:s}=(0,o.hv)(a.layerTimeZone,a.datesInUnknownTimezone,a.viewTimeZone,(0,i.J2)(t||"short-date-short-time"),l)),"string"==typeof e&&isNaN(Date.parse("time-only"===l?"1970-01-01T".concat(e,"Z"):e)))return e;switch(l){case"date-only":{const n=(0,i.J2)(t||"short-date");return"string"==typeof e?(0,i.iS)(e,{...n}):(0,i.Yq)(e,{...n,timeZone:o.n$})}case"time-only":{const n=(0,i.J2)(t||"short-time");return"string"==typeof e?(0,i.F8)(e,n):(0,i.Yq)(e,{...n,timeZone:o.n$})}case"timestamp-offset":{if(!r&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const n=t||a?(0,i.J2)(t||"short-date-short-time"):void 0,o=n?{...n,timeZone:r,timeZoneName:s}:void 0;return"string"==typeof e?(0,i.Ey)(e,o):(0,i.Yq)(e,o)}default:{const n=t||a?(0,i.J2)(t||"short-date-short-time"):void 0;return(0,i.Yq)("string"==typeof e?new Date(e):e,n?{...n,timeZone:r,timeZoneName:s}:void 0)}}}}}]);
//# sourceMappingURL=1835.8531ee76.chunk.js.map