/*! For license information please see 1985.3819412e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[1985],{81985:(e,t,o)=>{o.r(t),o.d(t,{CalciteNotice:()=>C,defineCustomElement:()=>N});var i,n=o(82108),c=o(84343),s=o(39879),a=o(76527),l=o(62785),r=o(76988);!function(e){e.brand="lightbulb",e.danger="exclamationMarkTriangle",e.info="information",e.success="checkCircle",e.warning="exclamationMarkTriangle"}(i||(i={}));var d=o(37268),h=o(80416),g=o(67294);const m="title",p="message",f="link",u="actions-end",b="actions-end",k="notice-close",v="container",x="notice-content",w="notice-icon",z=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeBeforeClose=(0,n.lh)(this,"calciteNoticeBeforeClose",6),this.calciteNoticeBeforeOpen=(0,n.lh)(this,"calciteNoticeBeforeOpen",6),this.calciteNoticeClose=(0,n.lh)(this,"calciteNoticeClose",6),this.calciteNoticeOpen=(0,n.lh)(this,"calciteNoticeOpen",6),this.setTransitionEl=e=>{this.transitionEl=e},this.close=()=>{this.open=!1},this.openTransitionProp="opacity",this.open=!1,this.kind="brand",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){(0,d.o)(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=(0,s.o)(i,this.icon,this.kind)}connectedCallback(){(0,c.c)(this),(0,l.c)(this),(0,r.c)(this)}disconnectedCallback(){(0,c.d)(this),(0,l.d)(this),(0,r.d)(this)}async componentWillLoad(){(0,a.s)(this),this.requestedIcon=(0,s.o)(i,this.icon,this.kind),await(0,r.s)(this),this.open&&(0,d.o)(this)}componentDidLoad(){(0,a.a)(this)}render(){const{el:e}=this,t=(0,n.h)("button",{"aria-label":this.messages.close,class:k,onClick:this.close,ref:e=>this.closeButton=e},(0,n.h)("calcite-icon",{icon:"x",scale:(0,h.g)(this.scale)})),o=(0,s.g)(e,u);return(0,n.h)("div",{class:v,ref:this.setTransitionEl},this.requestedIcon?(0,n.h)("div",{class:w},(0,n.h)("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:(0,h.g)(this.scale)})):null,(0,n.h)("div",{class:x},(0,n.h)("slot",{name:m}),(0,n.h)("slot",{name:p}),(0,n.h)("slot",{name:f})),o?(0,n.h)("div",{class:b},(0,n.h)("slot",{name:u})):null,this.closable?t:null)}async setFocus(){await(0,a.c)(this);const e=this.el.querySelector("calcite-link");if(this.closeButton||e)return e?e.setFocus():void(this.closeButton&&this.closeButton.focus())}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-notice",{open:[1540],kind:[513],closable:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],width:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function y(){if("undefined"===typeof customElements)return;["calcite-notice","calcite-icon"].forEach((e=>{switch(e){case"calcite-notice":customElements.get(e)||customElements.define(e,z);break;case"calcite-icon":customElements.get(e)||(0,g.d)()}}))}y();const C=z,N=y}}]);
//# sourceMappingURL=1985.3819412e.chunk.js.map