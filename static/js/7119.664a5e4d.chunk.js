"use strict";(self.webpackChunks06_station=self.webpackChunks06_station||[]).push([[7119],{47119:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var r=i(35143),a=i(39356),s=i(81806),o=i(68134),n=i(46053),l=(i(76460),i(47249),i(85842)),d=i(57561),u=i(57662),h=i(83491),p=i(93938),c=i(91196);let g=class extends((0,d.n)((0,h.w)(c.A))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=(0,s.A)("enable-feature:im-shading"),this.drapeTargetType=u.sv.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var e,t;return null!==(e=null===(t=this._controller)||void 0===t?void 0:t.updatingProgress)&&void 0!==e?e:0}get lodFactor(){var e,t;return null!==(e=null===(t=this.view)||void 0===t||null===(t=t.qualitySettings)||void 0===t||null===(t=t.sceneService)||void 0===t||null===(t=t.integratedMesh)||void 0===t?void 0:t.lodFactor)&&void 0!==e?e:1}get progressiveLoadFactor(){return this.lodFactor>=1?.2:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add((()=>this.layer.modifications),(()=>this._loadModifications()),o.Vh),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const e=new a.A;return e.layer=this.layer,e.sourceLayer=this.layer,e}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),null==this.layer.modifications)return void(this._modifications=[]);const e=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange((()=>e),(()=>this._modifications=e.toArray()),o.Vh),"modifications")}};(0,r._)([(0,n.MZ)()],g.prototype,"layer",void 0),(0,r._)([(0,n.MZ)()],g.prototype,"i3slayer",null),(0,r._)([(0,n.MZ)(p.S)],g.prototype,"updatingProgress",void 0),(0,r._)([(0,n.MZ)()],g.prototype,"updatingProgressValue",null),(0,r._)([(0,n.MZ)()],g.prototype,"lodFactor",null),(0,r._)([(0,n.MZ)({readOnly:!0})],g.prototype,"progressiveLoadFactor",null),g=(0,r._)([(0,l.$)("esri.views.3d.layers.SceneLayerView3D")],g);const y=g}}]);
//# sourceMappingURL=7119.664a5e4d.chunk.js.map