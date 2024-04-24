"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[8357],{61196:(t,n,e)=>{e.d(n,{q:()=>h});var i,s,a,r=e(54787),o={exports:{}};i=o,s=function(){function t(e,i,s,a,r){for(;a>s;){if(a-s>600){var o=a-s+1,h=i-s+1,l=Math.log(o),c=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*c*(o-c)/o)*(h-o/2<0?-1:1);t(e,i,Math.max(s,Math.floor(i-h*c/o+m)),Math.min(a,Math.floor(i+(o-h)*c/o+m)),r)}var u=e[i],d=s,f=a;for(n(e,s,i),r(e[a],u)>0&&n(e,s,a);d<f;){for(n(e,d,f),d++,f--;r(e[d],u)<0;)d++;for(;r(e[f],u)>0;)f--}0===r(e[s],u)?n(e,s,f):n(e,++f,a),f<=i&&(s=f+1),i<=f&&(a=f-1)}}function n(t,n,e){var i=t[n];t[n]=t[e],t[e]=i}function e(t,n){return t<n?-1:t>n?1:0}return function(n,i,s,a,r){t(n,i,s||0,a||n.length-1,r||e)}},void 0!==(a=s())&&(i.exports=a);const h=(0,r.g)(o.exports)},70373:(t,n,e)=>{e.d(n,{w:()=>r});var i=e(18690),s=e(30015),a=e(61196);class r{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=m,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),g.prune(),X.prune(),Y.prune(),B.prune()}all(t){this._all(this._data,t)}search(t,n){let e=this._data;const i=this._toBBox;if(p(t,e))for(g.clear();e;){for(let s=0,a=e.children.length;s<a;s++){const a=e.children[s],r=e.leaf?i(a):a;p(t,r)&&(e.leaf?n(a):_(t,r)?this._all(a,n):g.push(a))}e=g.pop()}}collides(t){let n=this._data;const e=this._toBBox;if(!p(t,n))return!1;for(g.clear();n;){for(let i=0,s=n.children.length;i<s;i++){const s=n.children[i],a=n.leaf?e(s):s;if(p(t,a)){if(n.leaf||_(t,a))return!0;g.push(s)}}n=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===n.height)this._splitRoot(this._data,n);else{if(this._data.height<n.height){const t=this._data;this._data=n,n=t}this._insert(n,this._data.height-n.height-1,!0)}else this._data=n;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new A([]),this}remove(t){if(!t)return this;let n,e=this._data,s=null,a=0,r=!1;const o=this._toBBox(t);for(Y.clear(),B.clear();e||Y.length>0;){var h;if(e||(e=Y.pop(),s=Y.data[Y.length-1],a=null!==(h=B.pop())&&void 0!==h?h:0,r=!0),e.leaf&&(n=(0,i.qh)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),Y.push(e),this._condense(Y),this;r||e.leaf||!_(e,o)?s?(a++,e=s.children[a],r=!1):e=null:(Y.push(e),B.push(a),a=0,s=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,n){let e=t;for(X.clear();e;){var i;if(!0===e.leaf)for(const t of e.children)n(t);else X.pushArray(e.children);e=null!==(i=X.pop())&&void 0!==i?i:null}}_build(t,n,e,i){const s=e-n+1;let a=this._maxEntries;if(s<=a){const i=new A(t.slice(n,e+1));return o(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/a**(i-1)));const r=new b([]);r.height=i;const h=Math.ceil(s/a),l=h*Math.ceil(Math.sqrt(a));M(t,n,e,l,this._compareMinX);for(let o=n;o<=e;o+=l){const n=Math.min(o+l-1,e);M(t,o,n,h,this._compareMinY);for(let e=o;e<=n;e+=h){const s=Math.min(e+h-1,n);r.children.push(this._build(t,e,s,i-1))}}return o(r,this._toBBox),r}_chooseSubtree(t,n,e,i){for(;i.push(n),!0!==n.leaf&&i.length-1!==e;){let e,i=1/0,s=1/0;for(let a=0,r=n.children.length;a<r;a++){const r=n.children[a],o=u(r),h=f(t,r)-o;h<s?(s=h,i=o<i?o:i,e=r):h===s&&o<i&&(i=o,e=r)}n=e||n.children[0]}return n}_insert(t,n,e){const i=this._toBBox,s=e?t:i(t);Y.clear();const a=this._chooseSubtree(s,this._data,n,Y);for(a.children.push(t),l(a,s);n>=0&&Y.data[n].children.length>this._maxEntries;)this._split(Y,n),n--;this._adjustParentBBoxes(s,Y,n)}_split(t,n){const e=t.data[n],i=e.children.length,s=this._minEntries;this._chooseSplitAxis(e,s,i);const a=this._chooseSplitIndex(e,s,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=e.children.splice(a,e.children.length-a),h=e.leaf?new A(r):new b(r);h.height=e.height,o(e,this._toBBox),o(h,this._toBBox),n?t.data[n-1].children.push(h):this._splitRoot(e,h)}_splitRoot(t,n){this._data=new b([t,n]),this._data.height=t.height+1,o(this._data,this._toBBox)}_chooseSplitIndex(t,n,e){let i,s,a;i=s=1/0;for(let r=n;r<=e-n;r++){const n=h(t,0,r,this._toBBox),o=h(t,r,e,this._toBBox),l=x(n,o),c=u(n)+u(o);l<i?(i=l,a=r,s=c<s?c:s):l===i&&c<s&&(s=c,a=r)}return a}_chooseSplitAxis(t,n,e){const i=t.leaf?this._compareMinX:c,s=t.leaf?this._compareMinY:m;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,s)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const s=this._toBBox,a=h(t,0,n,s),r=h(t,e-n,e,s);let o=d(a)+d(r);for(let h=n;h<e-n;h++){const n=t.children[h];l(a,t.leaf?s(n):n),o+=d(a)}for(let h=e-n-1;h>=n;h--){const n=t.children[h];l(r,t.leaf?s(n):n),o+=d(r)}return o}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)l(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const s=t.data[n-1],a=s.children;a.splice((0,i.qh)(a,e,a.length,s.indexHint),1)}else this.clear();else o(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this._compareMinX=new Function("a","b",n.join(t[0])),this._compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function o(t,n){h(t,0,t.children.length,n,t)}function h(t,n,e,i,s){s||(s=new A([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let a,r=n;r<e;r++)a=t.children[r],l(s,t.leaf?i(a):a);return s}function l(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function c(t,n){return t.minX-n.minX}function m(t,n){return t.minY-n.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function x(t,n){const e=Math.max(t.minX,n.minX),i=Math.max(t.minY,n.minY),s=Math.min(t.maxX,n.maxX),a=Math.min(t.maxY,n.maxY);return Math.max(0,s-e)*Math.max(0,a-i)}function _(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function p(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function M(t,n,e,i,s){const r=[n,e];for(;r.length;){const n=r.pop(),e=r.pop();if(n-e<=i)continue;const o=e+Math.ceil((n-e)/i/2)*i;(0,a.q)(t,o,e,n,s),r.push(e,o,o,n)}}const g=new s.A,X=new s.A,Y=new s.A,B=new s.A({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class A extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends v{constructor(t){super(),this.children=t,this.leaf=!1}}},98357:(t,n,e)=>{e.r(n),e.d(n,{default:()=>o});var i=e(81806),s=e(70373),a=e(99773),r=e(48620);class o{async createIndex(t,n){var e;const i=new Array;if(null===(e=t.vertexAttributes)||void 0===e||!e.position)return new s.w;const a=this._createMeshData(t),r=null!=n?await n.invoke("createIndexThread",a,{transferList:i}):this.createIndexThread(a).result;return this._createPooledRBush().fromJSON(r)}createIndexThread(t){const n=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,n,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(e,n)}_createIndexAllThread(t,n){const e=new Array(n.length/9);let i=0;for(let s=0;s<n.length;s+=9)e[i++]=h(n,s,s+3,s+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,n,e){let i=0;for(const r of e)i+=r.length/3;const s=new Array(i);let a=0;for(const r of e)for(let t=0;t<r.length;t+=3)s[a++]=h(n,3*r[t],3*r[t+1],3*r[t+2]);return t.load(s),{result:t.toJSON()}}_createMeshData(t){const n=((0,a.Hq)(t.vertexSpace)?(0,r.bA)({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:n}:{position:n,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new s.w(9,(0,i.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function h(t,n,e,i){return{minX:Math.min(t[n],t[e],t[i]),maxX:Math.max(t[n],t[e],t[i]),minY:Math.min(t[n+1],t[e+1],t[i+1]),maxY:Math.max(t[n+1],t[e+1],t[i+1]),p0:[t[n],t[n+1],t[n+2]],p1:[t[e],t[e+1],t[e+2]],p2:[t[i],t[i+1],t[i+2]]}}}}]);
//# sourceMappingURL=8357.d3b9cb42.chunk.js.map