(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{572:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("67955cea",content,!0,{sourceMap:!1})},582:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("8f7a87bc",content,!0,{sourceMap:!1})},583:function(t,e,n){var r=n(11)(!1);r.push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),t.exports=r},605:function(t,e,n){"use strict";n(572)},606:function(t,e,n){var r=n(11)(!1);r.push([t.i,".nuxtlink[data-v-dc31a4ce]{text-decoration:none!important}.hr-green[data-v-dc31a4ce]{border:3px solid green}",""]),t.exports=r},612:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));n(8),n(7),n(10),n(13),n(9),n(14);var r=n(1),l=(n(34),n(25),n(43),n(582),n(48)),o=n(87),c=n(157),h=n(190),d=n(115),v=n(251),f=n(4);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(f.a)(c.a,h.a).extend({name:"base-slide-group",directives:{Resize:d.a,Touch:v.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return x(x({},c.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var n="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(n)];return this.showArrows||r?this.$createElement(l.a,{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(o.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,n,r){var l=n?-1:1,o=l*r+("prev"===t?-1:1)*e.wrapper;return l*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,n=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(n),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,n=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,n,r){var l=t.clientWidth,o=n?e.content-t.offsetLeft-l:t.offsetLeft;n&&(r=-r);var c=e.wrapper+r,h=l+o,d=.4*l;return o<=r?r=Math.max(o-d,0):c<=h&&(r=Math.min(r-(c-h-d),e.content-e.wrapper)),n?-r:r},calculateCenteredOffset:function(t,e,n){var r=t.offsetLeft,l=t.clientWidth;if(n){var o=e.content-r-l/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,o))}var c=r+l/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,c))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,content=e.content,n=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=w.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},674:function(t,e,n){"use strict";n.r(e);var r=n(15),l=(n(51),{data:function(){return{nuxt:[],laravel:[],vue:[],height:"200px"}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:return e.next=4,t.$axios.$get("api/blog/page/1/item/5/tags/nuxt");case 4:return n=e.sent,t.nuxt=n.data,e.next=8,t.$axios.$get("/sanctum/csrf-cookie");case 8:return e.next=10,t.$axios.$get("api/blog/page/1/item/5/tags/Laravel");case 10:return r=e.sent,t.laravel=r.data,e.next=14,t.$axios.$get("/sanctum/csrf-cookie");case 14:return e.next=16,t.$axios.$get("api/blog/page/1/item/5/tags/vue3");case 16:l=e.sent,t.vue=l.data;case 18:case"end":return e.stop()}}),e)})))()}}),o=(n(605),n(35)),c=n(31),h=n.n(c),d=n(238),v=n(85),f=n(526),m=n(534),x=n(183),w=n(527),_=n(66),C=n(612),k=n(1),y=n(110),O=n(4),$=n(5),j=n(2).default.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(k.a)({},this.activeClass,this.isActive)}),element):(Object($.c)("v-item should only contain a single element",this),element)):(Object($.c)("v-item is missing a default scopedSlot",this),null);var element}}),M=(Object(O.a)(j,Object(y.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(O.a)(j,Object(y.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:" mb-0 pb-0"},[n("hr",{staticClass:"hr-green",attrs:{color:"green"}})])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"ma-0 mt-0 pt-0"},[n("h2",{staticClass:"green--text ma-0 mt-0 pt-0 ",attrs:{color:"green"}},[t._v("\n        Topics\n      ")])])],1),t._v(" "),t._l(Math.ceil(t.nuxt.length/5),(function(i,e){return n("v-row",{key:e+10,staticClass:"mt-2 pt-2 hidden-sm-and-down"},[n("v-card",{staticClass:"ml-2 d-flex align-center flex-column ",attrs:{color:"green",height:t.height,width:"5%"}},[n("label",{staticClass:"justify-center pa- white--text "},[t._v("Nuxt")]),t._v(" "),n("div",[n("v-img",{staticClass:"justify-center",attrs:{src:"/icons/nuxt-js.svg",width:"25px"}})],1),t._v(" "),n("label",{staticClass:"justify-center pa-2 mt-auto"},[n("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More\n        ")])],1)]),t._v(" "),n("v-sheet",{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[n("v-slide-group",{staticClass:"pa-0 ma-0",attrs:{multiple:"","show-arrows":""}},t._l(t.nuxt.slice(5*(i-1),5*i),(function(e,r){return n("v-slide-item",{key:r,staticClass:"pa-0 ma-0"},[n("v-card",{staticClass:"mr-1 ml-1",attrs:{height:"200px",width:"450px"}},[null!=e.image?n("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title))])],1)],1):n("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)})),1)],1)],1)})),t._v(" "),t._l(Math.ceil(t.nuxt.length/5),(function(i,e){return n("v-row",{key:e,staticClass:"hidden-md-and-up"},[n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[n("v-card",{staticClass:"d-flex align-center flex-column",attrs:{color:"green"}},[n("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Nuxt")]),t._v(" "),n("v-img",{attrs:{src:"/icons/nuxt-js.svg",width:"25px"}}),t._v(" "),n("label",{staticClass:"justify-center pa-2 mt-auto"},[n("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More\n          ")])],1)],1)],1),t._v(" "),t._l(t.nuxt.slice(5*(i-1),5*i),(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[n("v-card",{key:r,staticClass:"mr-1 ml-1"},[null!=e.image?n("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"},domProps:{textContent:t._s(e.title)}})],1)],1):n("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.laravel.length/5),(function(i,e){return n("v-row",{key:e+30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[n("v-card",{staticClass:"ml-2 d-flex align-center flex-column",attrs:{color:"orange lighten-2",height:t.height,width:"5%"}},[n("label",{staticClass:"justify-center pa- white--text "},[t._v("Laravel")]),t._v(" "),n("div",[n("v-img",{staticClass:"justify-center",attrs:{src:"/icons/laravel.svg",width:"25px"}})],1),t._v(" "),n("label",{staticClass:"justify-center pa-2 mt-auto"},[n("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/Laravel"}}},[t._v("More\n        ")])],1)]),t._v(" "),n("v-sheet",{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[n("v-slide-group",{staticClass:"pa-0 ma-0",attrs:{multiple:"","show-arrows":""}},t._l(t.laravel.slice(5*(i-1),5*i),(function(e,r){return n("v-slide-item",{key:r,staticClass:"pa-0 ma-0"},[n("v-card",{staticClass:"mr-1 ml-1",attrs:{height:"200px",width:"450px"}},[null!=e.image?n("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title))])],1)],1):n("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)})),1)],1)],1)})),t._v(" "),t._l(Math.ceil(t.laravel.length/5),(function(i,e){return n("v-row",{key:e+40,staticClass:"hidden-md-and-up"},[n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[n("v-card",{staticClass:"d-flex align-center flex-column",attrs:{color:"orange lighten-2"}},[n("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Laravel")]),t._v(" "),n("v-img",{attrs:{src:"/icons/laravel.svg",width:"25px"}}),t._v(" "),n("label",{staticClass:"justify-center pa-2 mt-auto"},[n("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/Laravel"}}},[t._v("More\n          ")])],1)],1)],1),t._v(" "),t._l(t.laravel.slice(5*(i-1),5*i),(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[n("v-card",{key:r,staticClass:"mr-1 ml-1"},[null!=e.image?n("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"},domProps:{textContent:t._s(e.title)}})],1)],1):n("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.vue.length/5),(function(i,e){return n("v-row",{key:e+30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[n("v-card",{staticClass:"ml-2 d-flex align-center flex-column",attrs:{color:"green",height:t.height,width:"5%"}},[n("label",{staticClass:"justify-center pa- white--text "},[t._v("Vue")]),t._v(" "),n("div",[n("v-img",{staticClass:"justify-center",attrs:{src:"/icons/vue-js.svg",width:"25px"}})],1),t._v(" "),n("label",{staticClass:"justify-center pa-2 mt-auto"},[n("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/vue3"}}},[t._v("More\n        ")])],1)]),t._v(" "),n("v-sheet",{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[n("v-slide-group",{staticClass:"pa-0 ma-0",attrs:{multiple:"","show-arrows":""}},t._l(t.laravel.slice(5*(i-1),5*i),(function(e,r){return n("v-slide-item",{key:r,staticClass:"pa-0 ma-0"},[n("v-card",{staticClass:"mr-1 ml-1",attrs:{height:"200px",width:"450px"}},[null!=e.image?n("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title))])],1)],1):n("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)})),1)],1)],1)})),t._v(" "),t._l(Math.ceil(t.vue.length/5),(function(i,e){return n("v-row",{key:e+40,staticClass:"hidden-md-and-up"},[n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[n("v-card",{staticClass:"d-flex align-center flex-column",attrs:{color:"green"}},[n("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Vue")]),t._v(" "),n("v-img",{attrs:{src:"/icons/vue-js.svg",width:"25px"}}),t._v(" "),n("label",{staticClass:"justify-center pa-2 mt-auto"},[n("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/vue3"}}},[t._v("More\n          ")])],1)],1)],1),t._v(" "),t._l(t.vue.slice(5*(i-1),5*i),(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[n("v-card",{key:r,staticClass:"mr-1 ml-1"},[null!=e.image?n("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"},domProps:{textContent:t._s(e.title)}})],1)],1):n("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)}))],2)}))],2)}),[],!1,null,"dc31a4ce",null);e.default=component.exports;h()(component,{VCard:d.a,VCardTitle:v.c,VCol:f.a,VContainer:m.a,VImg:x.a,VRow:w.a,VSheet:_.a,VSlideGroup:C.b,VSlideItem:M})}}]);