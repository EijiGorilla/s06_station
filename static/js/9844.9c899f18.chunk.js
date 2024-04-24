"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[9844],{59844:(e,n,t)=>{t.d(n,{DO:()=>J,FT:()=>B,Hh:()=>k,OM:()=>q,Ps:()=>H,Wo:()=>G,_I:()=>N,_l:()=>W,eh:()=>V,l0:()=>X,t$:()=>U,uk:()=>z,vI:()=>S,xh:()=>p});t(35238);var i,o,r=t(18690),s=t(50076),l=t(31633),a=t(7724),c=t(9624),f=t(80963),u=t(76797),h=t(13904),x=t(65215),m=t(13312);function p(e,n,t){return!(0,c.canProjectWithoutEngine)(e,n,t)}function g(e,n,t){const i=p(e,n,t);if(i&&!(0,c.isLoaded)())throw new s.A("rasterprojectionhelper-project","projection engine is not loaded");return i}(o=i||(i={}))[o.None=0]="None",o[o.North=1]="North",o[o.South=2]="South",o[o.Both=3]="Both";const d=function(e,n,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===t[0])return[0,0];let o=1,r=-1,s=1,l=-1;for(let g=0;g<e.length;g+=2)isNaN(e[g])||(o=o>e[g]?e[g]:o,r=r>e[g]?r:e[g],s=s>e[g+1]?e[g+1]:s,l=l>e[g+1]?l:e[g+1]);const{cols:a,rows:c}=n,f=(r-o)/a/t[0],u=(l-s)/c/t[1],h=2*i;let x=0,m=!1,p=[0,0];for(let g=0;g<a-3;g++){for(let n=0;n<c-3;n++){const t=g*c*2+2*n,i=(e[t]+e[t+4]+e[t+4*c]+e[t+4*c+4])/4,o=(e[t+1]+e[t+5]+e[t+4*c+1]+e[t+4*c+5])/4,r=Math.abs((i-e[t+2*c+2])/f),s=Math.abs((o-e[t+2*c+3])/u);if(r+s>x&&(x=r+s,p=[r,s]),h&&x>h){m=!0;break}}if(m)break}return p},y={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},w=32,M=4,R=M,P=new Map,v=new Map,b=500;async function k(){(0,c.isLoaded)()||await(0,c.load)()}function S(e,n,t){return g(e.spatialReference,n),t?(0,c.getTransformation)(n,e.spatialReference,e):(0,c.getTransformation)(e.spatialReference,n,e)}function G(e,n,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const o=e.spatialReference;if(o.equals(n))return e;g(o,n,i);const r=t.center,s=new u.A({xmin:r.x-e.x/2,xmax:r.x+e.x/2,ymin:r.y-e.y/2,ymax:r.y+e.y/2,spatialReference:o}),a=(0,c.project)(s,n,i),f=B(n);let h;if(null==a||null!=f&&a.width>=f){const t=(0,l.GA)(o)/(0,l.GA)(n);h={x:e.x*t,y:e.y*t}}else h={x:a.width,y:a.height};return h}function E(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,l.GA)(e)?n/(0,l.GA)(e):0}function N(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=e.spatialReference;if(o.equals(n))return e;g(o,n,t);const r=(0,c.project)(e,n,t);return i&&r?(A([e],[r],o,n),r):r}function A(e,n,t,i){const o=F(t,!0),r=F(i,!0),s=E(t,b),l=E(i,b);if(s&&null!=o&&null!=r)for(let a=0;a<e.length;a++){const t=n[a];if(!t)continue;const{x:i}=e[a],{x:c}=t;c>=r[1]-l&&Math.abs(i-o[0])<s?t.x-=r[1]-r[0]:c<=r[0]+l&&Math.abs(i-o[1])<s&&(t.x+=r[1]-r[0])}}function T(e){const{inSR:n,outSR:t,datumTransformation:i,preferPE:o}=e;if(n.equals(t)){const{points:n}=L(e,null);return n}if(n.isWebMercator&&t.isWGS84||n.isWGS84&&t.isWebMercator)return function(e){const{cols:n,rows:t,xres:i,yres:o,usePixelCenter:r,inSR:s,outSR:l}=e;let{xmin:a,ymax:f}=e;r&&(a+=i/2,f-=o/2);const u=[],x=[],m=Math.max(n,t);for(let g=0;g<m;g++){const e=a+i*Math.min(n,g),r=f-o*Math.min(t,g),m=(0,c.project)(new h.A({x:e,y:r,spatialReference:s}),l);g<=n&&u.push(m.x),g<=t&&x.push(m.y)}const p=[];for(let c=0;c<n;c++)for(let e=0;e<t;e++)p.push([u[c],x[e]]);return p}(e);if(g(n,t,i)&&o){if(n.isGeographic)return _(e);if(null!=C(n))return _(e)}return function(e){const{points:n}=L(e,null),{inSR:t,outSR:i,datumTransformation:o}=e,r=n.map((e=>new h.A(e[0],e[1],t))),s=(0,c.project)(r,i,o);return o&&A(r,s,t,i),s.map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}function _(e){const{inSR:n,outSR:t,datumTransformation:i}=e,o=C(n),{points:r,mask:s}=L(e,o);if(!n.isGeographic){const e=n.wkid?a.P.coordsys(n.wkid):a.P.fromString(n.isGeographic?a.a.PE_TYPE_GEOGCS:a.a.PE_TYPE_PROJCS,n.wkt2||n.wkt);a.g.projToGeog(e,r.length,r)}if(null!=i&&i.steps.length){let e;const n=179.9955;if(t.isGeographic&&(e=r.map((e=>{let[t]=e;return t>n?1:t<-n?-1:0}))),i.steps.forEach((e=>{const n=e.wkid?a.P.geogtran(e.wkid):a.P.fromString(a.a.PE_TYPE_GEOGTRAN,e.wkt);a.h.geogToGeog(n,r.length,r,null,e.isInverse?a.a.PE_TRANSFORM_2_TO_1:a.a.PE_TRANSFORM_1_TO_2)})),e)for(let t=0;t<r.length;t++){const i=e[t],o=r[t][0],s=o>n?1:o<-n?-1:0;i&&s&&i!==s&&(r[t][0]=i>0?o+360:o-360)}}if(!t.isGeographic){const e=C(t,!0),n=null!=e&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,n){const[t,i]=n;for(let o=0;o<e.length;o++){const n=e[o][1];(n<t||n>i)&&(e[o]=[NaN,NaN])}}(r,n);const i=t.wkid?a.P.coordsys(t.wkid):a.P.fromString(t.isGeographic?a.a.PE_TYPE_GEOGCS:a.a.PE_TYPE_PROJCS,t.wkt2||t.wkt);a.g.geogToProj(i,r.length,r)}let l=r;if(s&&r.length!==s.length){l=[];for(let e=0,n=0;e<s.length;e++)s[e]?l.push(r[n++]):l.push([NaN,NaN])}return l}function C(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.wkid||e.wkt2||e.wkt;if(!t||e.isGeographic)return null;if(t=String(t),P.has(t)){const e=P.get(t);return n?null===e||void 0===e?void 0:e.gcs:null===e||void 0===e?void 0:e.pcs}const i=e.wkid?a.P.coordsys(e.wkid):a.P.fromString(e.isGeographic?a.a.PE_TYPE_GEOGCS:a.a.PE_TYPE_PROJCS,e.wkt2||e.wkt),o=j(i,E(e,1e-4)),r=j(i,0,!0);return P.set(t,{pcs:o,gcs:r}),n?r:o}function j(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=a.j.generate(e),o=t?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||null===o||void 0===o||!o.length)return null;let r=!1,s=o.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!s){if(s=o.find((e=>1===e.getInclusive()&&0===e.getKind())),!s)return null;r=!0}const l=t?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),c=i.isPannableRectangle(),f=s.getCoord();if(r)return{isEnvelope:r,isPannable:c,vertices:f,coef:null,bbox:[f[0][0]-n,f[0][1]-n,f[1][0]+n,f[1][1]+n],poleLocation:l};let u=0;const h=[];let[x,m]=f[0],[p,g]=f[0];for(let a=0,d=f.length;a<d;a++){u++,u===d&&(u=0);const[e,n]=f[a],[t,i]=f[u];if(i===n)h.push([e,t,n,i,2]);else{const o=(t-e)/(i-n||1e-4),r=e-o*n;n<i?h.push([o,r,n,i,0]):h.push([o,r,i,n,1])}x=x<e?x:e,m=m<n?m:n,p=p>e?p:e,g=g>n?g:n}return{isEnvelope:!1,isPannable:c,vertices:f,coef:h,bbox:[x,m,p,g],poleLocation:l}}function L(e,n){const t=[],{cols:i,rows:o,xres:r,yres:s,usePixelCenter:l}=e;let{xmin:a,ymax:c}=e;if(l&&(a+=r/2,c-=s/2),null==n){for(let e=0;e<i;e++)for(let n=0;n<o;n++)t.push([a+r*e,c-s*n]);return{points:t}}const f=new Uint8Array(i*o);if(n.isEnvelope){const{bbox:[e,l,u,h]}=n;for(let x=0,m=0;x<i;x++){const i=a+r*x,p=n.isPannable||i>=e&&i<=u;for(let e=0;e<o;e++,m++){const n=c-s*e;p&&n>=l&&n<=h&&(t.push([i,n]),f[m]=1)}}return{points:t,mask:f}}const u=n.coef,h=[];for(let x=0;x<o;x++){const e=c-s*x,n=[],t=[];for(let o=0;o<u.length;o++){const[i,r,s,l,a]=u[o];if(e===s&&s===l)n.push(i),n.push(r),t.push(2),t.push(2);else if(e>=s&&e<=l){const o=i*e+r;n.push(o),t.push(a)}}let i=n;if(n.length>2){let e=2===t[0]?0:t[0],o=n[0];i=[];for(let r=1;r<t.length;r++)2===t[r]&&r!==t.length-1||(t[r]!==e&&(i.push(0===e?Math.min(o,n[r-1]):Math.max(o,n[r-1])),e=t[r],o=n[r]),r===t.length-1&&i.push(0===t[r]?Math.min(o,n[r]):Math.max(o,n[r])));i.sort(((e,n)=>e-n))}else n[0]>n[1]&&(i=[n[1],n[0]]);h.push(i)}for(let x=0,m=0;x<i;x++){const e=a+r*x;for(let n=0;n<o;n++,m++){const i=c-s*n,o=h[n];if(2===o.length)e>=o[0]&&e<=o[1]&&(t.push([e,i]),f[m]=1);else if(o.length>2){let n=!1;for(let t=0;t<o.length;t+=2)if(e>=o[t]&&e<=o[t+1]){n=!0;break}n&&(t.push([e,i]),f[m]=1)}}}return{points:t,mask:f}}function O(e,n){var t;const i=B(e[0].spatialReference);if(e.length<2||null==i)return e[0];if(n=null!==(t=n)&&void 0!==t?t:E(e[0].spatialReference),1===(e=e.filter((e=>e.width>n))).length)return e[0];let{xmin:o,xmax:r,ymin:s,ymax:l}=e[0];for(let a=1;a<e.length;a++){const n=e[a];r=n.xmax+i*a,s=Math.min(s,n.ymin),l=Math.max(l,n.ymax)}return new u.A({xmin:o,xmax:r,ymin:s,ymax:l,spatialReference:e[0].spatialReference})}function W(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const s=e.spatialReference;if(s.equals(n))return e;const l=q(e),a=B(s,!0),f=B(n);if(0===l||null==a||null==f){const r=I(e,n,t,o);if(null==a&&null!=f&&Math.abs(r.width-f)<E(n)&&(0,c.isLoaded)()){const t=C(s);if(null!=t&&t.poleLocation===i.None&&e.width<(t.bbox[2]-t.bbox[0])/2)return function(e,n){const t=B(n);if(null==t)return null;let{xmin:i,ymin:o,xmax:r,ymax:s}=e;const l=e.spatialReference,a=new x.A({spatialReference:l,rings:[[[i,o],[r,o],[r,s],[i,s],[i,o]]]}),f=(0,c.project)(a,n);if(2!==f.rings.length||!f.rings[0].length||!f.rings[1].length)return null;const{rings:h}=f,m=E(l),p=new u.A({spatialReference:n});for(let c=0;c<2;c++){i=r=h[c][0][0],o=s=h[c][0][1];for(let e=0;e<h[c].length;e++)i=i>h[c][e][0]?h[c][e][0]:i,r=r<h[c][e][0]?h[c][e][0]:r,o=o>h[c][e][1]?h[c][e][1]:o,s=s<h[c][e][1]?h[c][e][1]:s;if(0===c)p.ymin=o,p.ymax=s,p.xmin=i,p.xmax=r;else if(p.ymin=Math.min(p.ymin,o),p.ymax=Math.max(p.ymax,s),Math.abs(r-t/2)<m)p.xmin=i,p.xmax=p.xmax+t;else{if(!(Math.abs(i+t/2)<m))return null;p.xmax=r+t}}return p}(e,n)||r}return r}const h=e.clone().normalize();if(1===h.length&&e.xmax<a&&e.xmax-a/2>E(s)){const{xmin:n,xmax:t}=e;for(let i=0;i<=l;i++){const o=0===i?n:-a/2,r=i===l?t-a*i:a/2;h[i]=new u.A({xmin:o,xmax:r,ymin:e.ymin,ymax:e.ymax,spatialReference:s})}}return O(h.map((e=>I(e,n,t,o))).filter(r.Ru))}function z(e,n,t){if("extent"===e.type){const{xmin:n,ymin:t,xmax:i,ymax:o,spatialReference:r}=e;e=new x.A({rings:[[[n,o],[i,o],[i,t],[n,t],[n,o]]],spatialReference:r})}return e.spatialReference.equals(n)?e:(g(e.spatialReference,n,t),(0,c.project)(e,n,t))}function I(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const r=e.spatialReference;if(r.equals(n)||!n)return e;g(r,n,t);const s=(0,c.project)(e,n,t);if(o&&n.isWebMercator&&s&&(s.ymax=Math.min(20037508.342787,s.ymax),s.ymin=Math.max(-20037508.342787,s.ymin),s.ymin>=s.ymax))return null;if(!i||!s)return s;const l=F(r,!0),a=F(n,!0);if(null==l||null==a)return s;const f=E(r,.001),u=E(r,b),x=E(n,.001);if(Math.abs(s.xmin-a[0])<x&&Math.abs(s.xmax-a[1])<x){const i=Math.abs(e.xmin-l[0]),o=Math.abs(l[1]-e.xmax);if(i<f&&o>u){s.xmin=a[0];const i=[];i.push(new h.A(e.xmax,e.ymin,r)),i.push(new h.A(e.xmax,(e.ymin+e.ymax)/2,r)),i.push(new h.A(e.xmax,e.ymax,r));const o=i.map((e=>N(e,n,t))).filter((e=>!isNaN(null===e||void 0===e?void 0:e.x))).map((e=>e.x));s.xmax=Math.max.apply(null,o)}if(o<f&&i>u){s.xmax=a[1];const i=[];i.push(new h.A(e.xmin,e.ymin,r)),i.push(new h.A(e.xmin,(e.ymin+e.ymax)/2,r)),i.push(new h.A(e.xmin,e.ymax,r));const o=i.map((e=>N(e,n,t))).filter((e=>!isNaN(null===e||void 0===e?void 0:e.x))).map((e=>e.x));s.xmin=Math.min.apply(null,o)}}else{const e=E(n,.001);Math.abs(s.xmin-a[0])<e&&(s.xmin=a[0]),Math.abs(s.xmax-a[1])<e&&(s.xmax=a[1])}return s}function B(e){if(!e)return null;const n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*y[e.wkid]||null}function F(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];const t=B(e,n);return null!=t?[-t/2,t/2]:null}function Y(e,n,t,i){let o=(e-n)/t;return o-Math.floor(o)!=0?o=Math.floor(o):i&&(o-=1),o}function q(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const t=B(e.spatialReference);if(null==t)return 0;const i=n?0:-t/2,o=E(e.spatialReference),r=!n&&Math.abs(e.xmax-t/2)<o?t/2:e.xmax,s=!n&&Math.abs(e.xmin+t/2)<o?-t/2:e.xmin;return Y(r,i,t,!0)-Y(s,i,t,!1)}function J(e){const n=e.storageInfo.origin.x,t=B(e.spatialReference,!0);if(null==t)return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const i=t/2,{nativePixelSize:o,storageInfo:r,extent:s}=e,{maximumPyramidLevel:l,blockWidth:a,pyramidScalingFactor:c}=r;let f=o.x;const u=[],h=null!=e.transform&&"gcs-shift"===e.transform.type,x=n+(h?0:i),m=h?t-n:i-n;for(let p=0;p<=l;p++){const e=(s.xmax-n)/f/a,t=e-Math.floor(e)==0?e:Math.ceil(e),i=m/f/a,o=i-Math.floor(i)==0?i:Math.ceil(i),r=Math.floor(x/f/a),l=Math.round(x/f)%a,h=(a-Math.round(m/f)%a)%a;u.push({resolutionX:f,blockWidth:a,datasetColumnCount:t,worldColumnCountFromOrigin:o,leftMargin:l,rightPadding:h,originColumnOffset:r}),f*=c}return{originX:n,halfWorldWidth:i,pyramidsInfo:u,hasGCSSShiftTransform:h}}function X(e){const n=e.isAdaptive&&null==e.spacing;let t=e.spacing||[w,w],i=K(e),o={cols:i.size[0]+1,rows:i.size[1]+1};const r=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let s=i.outofBoundPointCount===i.offsets.length/2||n&&r?[0,0]:d(i.offsets,o,t,R);const l=(s[0]+s[1])/2,c=e.projectedExtent.spatialReference,f=e.srcBufferExtent.spatialReference;if(n&&(r||l>R)&&(p(c,f,e.datumTransformation)&&(c.isGeographic||C(c)),t=[M,M],i=K({...e,spacing:t}),o={cols:i.size[0]+1,rows:i.size[1]+1},s=d(i.offsets,o,t,R)),i.error=s,t[0]>1&&(i.coefficients=D(i.offsets,o,r)),e.includeGCSGrid&&!c.isGeographic&&!c.isWebMercator)if(f.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:t};else{const n=C(c);if(null!=n&&!n.isEnvelope){const n=function(e){if(!e||e.isGeographic)return e;const n=String(e.wkid||e.wkt2||e.wkt);let t;return v.has(n)?t=v.get(n):(t=(e.wkid?a.P.coordsys(e.wkid):a.P.fromString(a.a.PE_TYPE_PROJCS,e.wkt2||e.wkt)).getGeogcs().getCode(),v.set(n,t)),new m.A({wkid:t})}(c),s=W(e.projectedExtent,n),{offsets:l}=K({...e,srcBufferExtent:s,spacing:t}),f=D(l,o,r);i.gcsGrid={offsets:l,coefficients:f,spacing:t}}}return i}function K(e){const{projectedExtent:n,srcBufferExtent:t,pixelSize:i,datumTransformation:o,rasterTransform:r}=e,s=n.spatialReference,l=t.spatialReference,a=g(s,l),{xmin:c,ymin:f,xmax:u,ymax:x}=n,m=B(l),p=null!=m&&(e.hasWrapAround||"gcs-shift"===(null===r||void 0===r?void 0:r.type)),d=e.spacing||[w,w],y=d[0]*i.x,R=d[1]*i.y,P=1===d[0],v=Math.ceil((u-c)/y-.1/d[0])+(P?0:1),k=Math.ceil((x-f)/R-.1/d[1])+(P?0:1),S=T({cols:v,rows:k,xmin:c,ymax:x,xres:y,yres:R,inSR:s,outSR:l,datumTransformation:o,preferPE:d[0]<=M,usePixelCenter:P}),G=[];let N,A=0;const _=P?-1:NaN,{xmin:j,xmax:L,ymax:O,width:W,height:z}=t,I=E(l,b),F=null!=m&&j>0&&L>m/2;let Y=!1;if(a){const e=C(s);Y=null!=e&&e.poleLocation>0}for(let g=0;g<v;g++){const e=[];for(let n=0;n<k;n++){let t=S[g*k+n];if(p&&t[0]>L&&t[0]>m/2-I?t[0]-=m:p&&0===g&&t[0]<0&&F&&!r&&(t[0]+=m),!t||isNaN(t[0])||isNaN(t[1]))G.push(_),G.push(_),e.push(null),A++;else{if(r){const e=r.inverseTransform(new h.A({x:t[0],y:t[1],spatialReference:l}));t=[e.x,e.y]}e.push(t),g>0&&p&&N[n]&&t[0]<N[n][0]&&(t[0]+=m,Y&&t[0]>L&&t[0]>m&&(t[0]-=m)),G.push((t[0]-j)/W),G.push((O-t[1])/z)}}N=e}return{offsets:G,error:null,coefficients:null,outofBoundPointCount:A,spacing:d,size:P?[v,k]:[v-1,k-1]}}function D(e,n,t){const{cols:i,rows:o}=n,r=new Float32Array((i-1)*(o-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),l=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<i-1;a++){for(let n=0;n<o-1;n++){let t=a*o*2+2*n;const c=e[t],f=e[t+1],u=e[t+2],h=e[t+3];t+=2*o;const x=e[t],m=e[t+1],p=e[t+2],g=e[t+3];let d=0,y=12*(n*(i-1)+a);for(let e=0;e<3;e++)r[y++]=s[d++]*c+s[d++]*u+s[d++]*p;d=0;for(let e=0;e<3;e++)r[y++]=s[d++]*f+s[d++]*h+s[d++]*g;d=0;for(let e=0;e<3;e++)r[y++]=l[d++]*c+l[d++]*x+l[d++]*p;d=0;for(let e=0;e<3;e++)r[y++]=l[d++]*f+l[d++]*m+l[d++]*g}if(t)for(let e=0;e<r.length;e++)isNaN(r[e])&&(r[e]=-1)}return r}function H(e){const{spatialReference:n}=e,t=(0,f.Vp)(n);if(!t)return e;const[i,o]=t.valid,r=o-i;let s=0;if(e.xmin<i){const n=i-e.xmin;s=Math.ceil(n/r)}else if(e.xmin>o){const n=e.xmin-o;s=-Math.ceil(n/r)}return new u.A({spatialReference:e.spatialReference,xmin:e.xmin+s*r,ymin:e.ymin,xmax:e.xmax+s*r,ymax:e.ymax})}function U(e,n,t){var i;const{storageInfo:o,pixelSize:r}=n;let s=0,a=!1;const{pyramidResolutions:c}=o,f="mixed"===(null===(i=o.tileInfo.format)||void 0===i?void 0:i.toLowerCase())?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,u=(e.x+e.y)/2/f;if(null!=c&&c.length){const e=c[c.length-1],i=(e.x+e.y)/2,o=(r.x+r.y)/2;if(u<=o)s=0;else if(u>=i)s=c.length,a=u/i>8;else{let e,n=o;for(let i=1;i<=c.length;i++){if(e=(c[i-1].x+c[i-1].y)/2,u<=e){u===e?s=i:"down"===t?(s=i-1,a=u/n>8):s="up"===t||u-n>e-u||u/n>2?i:i-1;break}n=e}}const f=0===s?r:c[s-1];return a&&Math.min(f.x,f.y)*(0,l.GA)(n.spatialReference)>19567&&(a=!1),{pyramidLevel:s,pyramidResolution:new h.A({x:f.x,y:f.y,spatialReference:n.spatialReference}),excessiveReading:a}}const x=Math.log(e.x/r.x)/Math.LN2,m=Math.log(e.y/r.y)/Math.LN2,p=n.storageInfo.maximumPyramidLevel||0;s="down"===t?Math.floor(Math.min(x,m)):"up"===t?Math.ceil(Math.max(x,m)):Math.round((x+m)/2),s<0?s=0:s>p&&(a=s>p+3,s=p);const g=2**s;return{pyramidLevel:s,pyramidResolution:new h.A({x:g*n.nativePixelSize.x,y:g*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:a}}function V(e,n){const{pixelSize:t,extent:i}=e,o=S(i,n,!1);return W(function(e,n){const t=e.clone().normalize();return 1===t.length?t[0]:O(t,n)}(i,(t.x+t.y)/16),n,o)}}}]);
//# sourceMappingURL=9844.9c899f18.chunk.js.map