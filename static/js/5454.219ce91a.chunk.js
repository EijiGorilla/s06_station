"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[5454],{51344:(e,t,n)=>{function i(e){return null!=a(e)||null!=o(e)}function s(e){return l.test(e)}function r(e){var t;return null!==(t=a(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!u.test(e[i]),i++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){var t,n,i,s;const r=l.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,u=+o.month-1,d=+o.day,h=+(null!==(t=o.hours)&&void 0!==t?t:"0"),c=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(i=o.seconds)&&void 0!==i?i:"0");if(h>23)return null;if(c>59)return null;if(f>59)return null;const m=null!==(s=o.ms)&&void 0!==s?s:"0",p=m?+m.padEnd(3,"0").substring(0,3):0;let y;if(o.isUTC||!o.offsetSign)y=Date.UTC(a,u,d,h,c,f,p);else{const e=+o.offsetHours,t=+o.offsetMinutes;y=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(a,u,d,h,c,f,p)}return Number.isNaN(y)?null:y}n.d(t,{Br:()=>s,Cq:()=>i,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},70373:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(18690),s=n(30015),r=n(61196);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=d,this._compareMinY=h,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),x.prune(),I.prune(),b.prune(),v.prune()}all(e){this._all(this._data,e)}search(e,t){let n=this._data;const i=this._toBBox;if(g(e,n))for(x.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;g(e,o)&&(n.leaf?t(r):y(e,o)?this._all(r,t):x.push(r))}n=x.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!g(e,t))return!1;for(x.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(g(e,r)){if(t.leaf||y(e,r))return!0;x.push(s)}}t=x.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new M([]),this}remove(e){if(!e)return this;let t,n=this._data,s=null,r=0,o=!1;const a=this._toBBox(e);for(b.clear(),v.clear();n||b.length>0;){var l;if(n||(n=b.pop(),s=b.data[b.length-1],r=null!==(l=v.pop())&&void 0!==l?l:0,o=!0),n.leaf&&(t=(0,i.qh)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),b.push(n),this._condense(b),this;o||n.leaf||!y(n,a)?s?(r++,n=s.children[r],o=!1):n=null:(b.push(n),v.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let n=e;for(I.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else I.pushArray(n.children);n=null!==(i=I.pop())&&void 0!==i?i:null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new M(e.slice(t,n+1));return a(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new E([]);o.height=i;const l=Math.ceil(s/r),u=l*Math.ceil(Math.sqrt(r));_(e,t,n,u,this._compareMinX);for(let a=t;a<=n;a+=u){const t=Math.min(a+u-1,n);_(e,a,t,l,this._compareMinY);for(let n=a;n<=t;n+=l){const s=Math.min(n+l-1,t);o.children.push(this._build(e,n,s,i-1))}}return a(o,this._toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=c(o),l=m(e,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this._toBBox,s=n?e:i(e);b.clear();const r=this._chooseSubtree(s,this._data,t,b);for(r.children.push(e),u(r,s);t>=0&&b.data[t].children.length>this._maxEntries;)this._split(b,t),t--;this._adjustParentBBoxes(s,b,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),l=n.leaf?new M(o):new E(o);l.height=n.height,a(n,this._toBBox),a(l,this._toBBox),t?e.data[t-1].children.push(l):this._splitRoot(n,l)}_splitRoot(e,t){this._data=new E([e,t]),this._data.height=e.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=l(e,0,o,this._toBBox),a=l(e,o,n,this._toBBox),u=p(t,a),d=c(t)+c(a);u<i?(i=u,r=o,s=d<s?d:s):u===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this._compareMinX:d,s=e.leaf?this._compareMinY:h;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this._toBBox,r=l(e,0,t,s),o=l(e,n-t,n,s);let a=f(r)+f(o);for(let l=t;l<n-t;l++){const t=e.children[l];u(r,e.leaf?s(t):t),a+=f(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];u(o,e.leaf?s(t):t),a+=f(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)u(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,i.qh)(r,n,r.length,s.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){l(e,0,e.children.length,t,e)}function l(e,t,n,i,s){s||(s=new M([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],u(s,e.leaf?i(r):r);return s}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function d(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function c(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function p(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,n,i,s){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=i)continue;const a=n+Math.ceil((t-n)/i/2)*i;(0,r.q)(e,a,n,t,s),o.push(n,a,a,t)}}const x=new s.A,I=new s.A,b=new s.A,v=new s.A({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class F extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class M extends F{constructor(e){super(),this.children=e,this.leaf=!0}}class E extends F{constructor(e){super(),this.children=e,this.leaf=!1}}},33328:(e,t,n)=>{n.d(t,{F:()=>l});var i=n(81806),s=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.w(9,(0,i.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(18690),s=n(50076),r=n(54099),o=n(76460),a=n(42294),l=n(2413),u=n(98618),d=n(33328),h=n(55167),c=n(33376);const f=(0,a.vt)();class m{constructor(e){this.geometryInfo=e,this._boundsStore=new d.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.A,this.featureAdapter=c.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,i,s]=this.fullBounds;return{xmin:t,ymin:n,xmax:i,ymax:s,spatialReference:(0,h.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(i.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){var t;if(!e)return;const n=e.objectId;if(null==n)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(n);let r;if(this._markedIds.add(n),i?(e.displayId=i.displayId,r=this._boundsStore.get(n),this._boundsStore.delete(n)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,e);r=(0,u.jQ)(null!=r?r:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(n,r),this._featuresById.set(n,e)}_upsert(e){var t;const n=null===e||void 0===e?void 0:e.objectId;if(null==n)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const i=this._featuresById.get(n);if(!i)return this._add(e),e;this._markedIds.add(n);const{geometry:r,attributes:a}=e;for(const s in a)i.attributes[s]=a[s];return r&&(i.geometry=r,this._boundsStore.set(n,null!==(t=(0,u.jQ)((0,l.vt)(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM))&&void 0!==t?t:null)),i}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},33754:(e,t,n)=>{n.d(t,{H:()=>s,L:()=>i});const i=1;function s(e,t){let n=0;for(const s of t){var i;const t=null===(i=s.attributes)||void 0===i?void 0:i[e];"number"==typeof t&&isFinite(t)&&(n=Math.max(n,t))}return n}},35454:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(50076),s=n(19902),r=n(80963),o=n(98618),a=n(33754),l=n(72547),u=n(24586),d=n(26151),h=n(40296),c=n(40098),f=n(1900),m=n(6127),p=n(53430),y=n(67478);const g=r.KK,_={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.KK},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function I(e){return(0,s.fT)(e)?null!=e.z:!!e.hasZ}function b(e){return(0,s.fT)(e)?null!=e.m:!!e.hasM}class v{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){var t;const n=[],{features:s}=e,r=this._inferLayerProperties(s,e.fields),o=e.fields||[],c=null!=e.hasM?e.hasM:!!r.hasM,I=null!=e.hasZ?e.hasZ:!!r.hasZ,b=!e.spatialReference&&!r.spatialReference,v=b?g:e.spatialReference||r.spatialReference,B=b?_:null,F=e.geometryType||r.geometryType,M=!F;let E=e.objectIdField||r.objectIdField,T=e.timeInfo;const w=new f.A(o);if(!M&&(b&&n.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!F))throw new i.A("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!E)throw new i.A("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&E!==r.objectIdField&&(n.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'.concat(E,'" doesn\'t match the field name "').concat(r.objectIdField,'", found in the provided fields')}),E=r.objectIdField),E&&!r.objectIdField){const e=w.get(E);e?(E=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const a of o){if(null==a.name&&(a.name=a.alias),null==a.alias&&(a.alias=a.name),!a.name)throw new i.A("feature-layer:invalid-field-name","field name is missing",{field:a});if(a.name===E&&(a.type="esriFieldTypeOID"),!m.m.jsonValues.includes(a.type))throw new i.A("feature-layer:invalid-field-type",'invalid type for field "'.concat(a.name,'"'),{field:a});null==a.length&&(a.length=(0,p._b)(a))}const S={};for(const i of o)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){const e=(0,p.lD)(i);void 0!==e&&(S[i.name]=e)}if(T){if(T.startTimeField){const e=w.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=w.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=w.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,n.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(n.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)}const A=w.dateFields.length?{timeZoneIANA:null!==(t=e.dateFieldsTimeZone)&&void 0!==t?t:y.n$}:null;this._createDefaultAttributes=(0,h.Vx)(S,E);const Y={warnings:n,featureErrors:[],layerDefinition:{...x,drawingInfo:(0,h.F0)(F),templates:(0,h.e2)(S),extent:B,geometryType:F,objectIdField:E,fields:o,hasZ:I,hasM:c,timeInfo:T,dateFieldsTimeReference:A},assignedObjectIds:{}};if(this._queryEngine=new d.d({fieldsIndex:f.A.fromLayerJSON({fields:o,timeInfo:T,dateFieldsTimeReference:A}),geometryType:F,hasM:c,hasZ:I,objectIdField:E,spatialReference:v,featureStore:new l.A({geometryType:F,hasM:c,hasZ:I}),timeInfo:T,cacheSpatialQueries:!0}),null===s||void 0===s||!s.length)return this._nextObjectId=a.L,Y;const R=(0,a.H)(E,s);return this._nextObjectId=R+1,await(0,u.Nk)(s,v),this._loadInitialFeatures(Y,s)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,c.$1)(t,n),(0,u.Nk)(e.adds,t),(0,u.Nk)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,i,r=null,o=null,a=null;for(const l of e){const e=l.geometry;if(null!=e&&(r||(r=(0,s.$B)(e)),o||(o=e.spatialReference),null==n&&(n=I(e)),null==i&&(i=b(e)),r&&o&&null!=n&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const n="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,n||i}))&&(a=e.name)}return{geometryType:r,spatialReference:o,objectIdField:a,hasM:i,hasZ:n}}async _loadInitialFeatures(e,t){const{geometryType:n,hasM:i,hasZ:r,objectIdField:a,spatialReference:l,featureStore:d,fieldsIndex:h}=this._queryEngine,f=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&n!==(0,s.$B)(o.geometry)){e.featureErrors.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,c.MB)(h,t,o.attributes,!0);i?e.featureErrors.push(i):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[a]),null!=o.geometry&&(o.geometry=(0,u.Cv)(o.geometry,o.geometry.spatialReference,l)),f.push(o))}d.addMany((0,o.Di)([],f,n,r,i,a));const{fullExtent:m,timeExtent:p}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,p){const{start:t,end:n}=p;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(null!==t&&void 0!==t&&t.length&&this._applyAddEdits(s,t),null!==n&&void 0!==n&&n.length&&this._applyUpdateEdits(s,n),null!==i&&void 0!==i&&i.length){for(const e of i)s.deleteResults.push((0,c.bP)(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:r,hasZ:a,objectIdField:l,spatialReference:d,featureStore:h,fieldsIndex:f}=this._queryEngine,m=[];for(const o of t){if(o.geometry&&i!==(0,s.$B)(o.geometry)){n.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,c.MB)(f,t,o.attributes);if(r)n.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[l];e.uidToObjectId[o.uid]=t}if(null!=o.geometry){var p;const e=null!==(p=o.geometry.spatialReference)&&void 0!==p?p:d;o.geometry=(0,u.Cv)((0,c.CR)(o.geometry,e),e,d)}m.push(o),n.push((0,c.bP)(o.attributes[l]))}}h.addMany((0,o.Di)([],m,i,a,r,l))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:i,hasM:r,hasZ:a,objectIdField:l,spatialReference:d,featureStore:h,fieldsIndex:f}=this._queryEngine;for(const p of t){const{attributes:e,geometry:t}=p,y=null===e||void 0===e?void 0:e[l];if(null==y){n.push((0,c.Yx)("Identifier field ".concat(l," missing")));continue}if(!h.has(y)){n.push((0,c.Yx)("Feature with object id ".concat(y," missing")));continue}const g=(0,o.oN)(h.getFeature(y),i,a,r);if(null!=t){var m;if(i!==(0,s.$B)(t)){n.push((0,c.Yx)("Incorrect geometry type."));continue}const e=null!==(m=t.spatialReference)&&void 0!==m?m:d;g.geometry=(0,u.Cv)((0,c.CR)(t,e),e,d)}if(e){const t=(0,c.MB)(f,g.attributes,e);if(t){n.push(t);continue}}h.add((0,o.E2)(g,i,a,r,l)),n.push((0,c.bP)(y))}}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;n&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},40296:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>d,e2:()=>h,f:()=>c});var i=n(81806),s=n(53084),r=n(8298),o=n(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,i.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.o8)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(e,t,n)=>{n.d(t,{$1:()=>y,CR:()=>p,MB:()=>c,Yx:()=>l,bP:()=>d});var i=n(51344),s=n(80963),r=n(53430);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new u(e)}const h=new Set;function c(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h.clear();for(const o in n){const s=e.get(o);if(!s)continue;const a=f(s,n[o]);if(h.add(s.name),s&&(i||s.editable)){const e=(0,r.CJ)(s,a);if(e)return l((0,r.uo)(e,s,a));t[s.name]=a}}for(const r of null!==(s=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==s?s:[]){var s;if(!h.has(r.name))return l('missing required field "'.concat(r.name,'"'))}return null}function f(e,t){let n=t;return(0,r.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.vE)(e)&&"string"==typeof t&&(n=(0,i._U)(t)),(0,r.WX)(n)}let m;function p(e,t){if(!e||!(0,s.fn)(t))return e;if("rings"in e||"paths"in e){if(null==m)throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function y(e,t){!(0,s.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==m&&(m=await Promise.all([n.e(2612),n.e(1669)]).then(n.bind(n,1669))),m}()}}}]);
//# sourceMappingURL=5454.219ce91a.chunk.js.map