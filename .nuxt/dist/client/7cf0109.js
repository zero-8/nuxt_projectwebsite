(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{555:function(t,e,o){"use strict";var r=o(112),l=o(36),n=o(4),c=o(5);e.a=Object(n.a)(r.a,l.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},559:function(t,e,o){var content=o(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("e227118a",content,!0,{sourceMap:!1})},577:function(t,e,o){"use strict";o(559)},578:function(t,e,o){var r=o(11)(!1);r.push([t.i,".nuxtlink[data-v-c5b80260]{text-decoration:none!important}.hr-green[data-v-c5b80260]{border:3px solid green}.show-btns[data-v-c5b80260]{color:#fff!important}.cover[data-v-c5b80260]{-o-object-fit:cover;object-fit:cover}.tempoup[data-v-c5b80260]{transition:transform .25s}.tempoup[data-v-c5b80260]:hover{transform:translateY(-10px)}",""]),t.exports=r},591:function(t,e,o){"use strict";o.r(e);var r={props:["data","height","width","slider_right","slider_left","image","tag","color","title"]},l=(o(577),o(35)),n=o(31),c=o.n(n),h=o(233),d=o(52),v=o(526),f=o(555),m=o(175),w=o(183),_=o(527),x=o(67),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[o("v-col",[o("v-sheet",{staticClass:"d-flex "},[o("v-hover",{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[o("v-card",{staticClass:"tempoup",class:{"on-hover":r},attrs:{elevation:r?1:2,color:t.color,height:t.height,width:t.slider_left}},[o("label",{staticClass:"justify-center  white--text "},[t._v(t._s(t.title))]),o("br"),t._v(" "),o("div",[o("v-img",{staticClass:"justify-center",attrs:{src:"/icons/"+t.image,width:"25px"}})],1),t._v(" "),o("label",{staticClass:"justify-center pa-2 mt-auto"},[o("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/"+t.tag}}},[t._v("More"),o("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)])]}}])}),t._v(" "),t._l(t.data,(function(e,r){return o("v-hover",{key:r,attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.hover;return[o("v-card",{staticClass:"mx-auto mr-1 ml-1   tempoup",class:{"on-hover":l},attrs:{"max-width":"400",elevation:l?1:2,height:t.height,width:t.width}},[null!=e.image?o("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)",height:t.height,width:"100%"}},[o("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[o("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1 ",attrs:{color:"blue"}},[t._v("\n                "+t._s(e.title)),o("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):o("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)",src:"/images/default.jpg"}},[o("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[o("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),o("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})}))],2)],1)],1)}),[],!1,null,"c5b80260",null);e.default=component.exports;c()(component,{VCard:h.a,VCardTitle:d.d,VCol:v.a,VHover:f.a,VIcon:m.a,VImg:w.a,VRow:_.a,VSheet:x.a})}}]);