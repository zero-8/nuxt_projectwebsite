(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{572:function(t,e,l){var content=l(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("38c36c79",content,!0,{sourceMap:!1})},602:function(t,e,l){"use strict";l(572)},603:function(t,e,l){var n=l(11)(!1);n.push([t.i,".nuxtlink[data-v-3f38126a]{text-decoration:none!important}.hr-green[data-v-3f38126a]{border:3px solid green}",""]),t.exports=n},676:function(t,e,l){"use strict";l.r(e);var n=l(15),r=(l(51),{data:function(){return{nuxt:[],laravel:[],vue:[],height:"140px"}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:return e.next=4,t.$axios.$get("api/blog/page/1/item/5/tags/nuxt");case 4:return l=e.sent,t.nuxt=l.data,e.next=8,t.$axios.$get("/sanctum/csrf-cookie");case 8:return e.next=10,t.$axios.$get("api/blog/page/1/item/5/tags/Laravel");case 10:return n=e.sent,t.laravel=n.data,e.next=14,t.$axios.$get("/sanctum/csrf-cookie");case 14:return e.next=16,t.$axios.$get("api/blog/page/1/item/5/tags/vue3");case 16:r=e.sent,t.vue=r.data;case 18:case"end":return e.stop()}}),e)})))()}}),c=(l(602),l(35)),o=l(31),h=l.n(o),v=l(238),x=l(85),m=l(526),d=l(534),C=l(183),_=l(527),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{attrs:{fluid:""}},[l("v-row",[l("v-col",{staticClass:" mb-0 pb-0"},[l("hr",{staticClass:"hr-green",attrs:{color:"green"}})])],1),t._v(" "),l("v-row",[l("v-col",{staticClass:"ma-0 mt-0 pt-0"},[l("h2",{staticClass:"green--text ma-0 mt-0 pt-0 ",attrs:{color:"green"}},[t._v("\n        Topics\n      ")])])],1),t._v(" "),t._l(Math.ceil(t.nuxt.length/5),(function(i,e){return l("v-row",{key:e+10,staticClass:"mt-2 pt-2 hidden-sm-and-down"},[l("v-card",{staticClass:"ml-2 d-flex align-center flex-column",attrs:{color:"green",height:t.height,width:"5%"}},[l("label",{staticClass:"justify-center pa- white--text "},[t._v("Nuxt")]),t._v(" "),l("div",[l("v-img",{staticClass:"justify-center",attrs:{src:"/icons/nuxt-js.svg",width:"25px"}})],1),t._v(" "),l("label",{staticClass:"justify-center pa-2 mt-auto"},[l("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More\n        ")])],1)]),t._v(" "),t._l(t.nuxt.slice(5*(i-1),5*i),(function(e,n){return l("v-card",{key:n,staticClass:"mr-1 ml-1",attrs:{width:"18%"}},[null!=e.image?l("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title))])],1)],1):l("v-img",{staticClass:"white--text align-end",attrs:{contain:"",height:t.height,"aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.nuxt.length/5),(function(i,e){return l("v-row",{key:e,staticClass:"hidden-md-and-up"},[l("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[l("v-card",{staticClass:"d-flex align-center flex-column",attrs:{color:"green"}},[l("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Nuxt")]),t._v(" "),l("v-img",{attrs:{src:"/icons/nuxt-js.svg",width:"25px"}}),t._v(" "),l("label",{staticClass:"justify-center pa-2 mt-auto"},[l("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More\n          ")])],1)],1)],1),t._v(" "),t._l(t.nuxt.slice(5*(i-1),5*i),(function(e,n){return l("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[l("v-card",{key:n,staticClass:"mr-1 ml-1"},[null!=e.image?l("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"},domProps:{textContent:t._s(e.title)}})],1)],1):l("v-img",{staticClass:"white--text align-end",attrs:{contain:"",height:t.height,"aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.laravel.length/5),(function(i,e){return l("v-row",{key:e+30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[l("v-card",{staticClass:"ml-2 d-flex align-center flex-column",attrs:{color:"orange lighten-2",height:t.height,width:"5%"}},[l("label",{staticClass:"justify-center pa- white--text "},[t._v("Laravel")]),t._v(" "),l("div",[l("v-img",{staticClass:"justify-center",attrs:{src:"/icons/laravel.svg",width:"25px"}})],1),t._v(" "),l("label",{staticClass:"justify-center pa-2 mt-auto"},[l("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/Laravel"}}},[t._v("More\n        ")])],1)]),t._v(" "),t._l(t.laravel.slice(5*(i-1),5*i),(function(e,n){return l("v-card",{key:n,staticClass:"mr-1 ml-1",attrs:{width:"18%"}},[null!=e.image?l("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title))])],1)],1):l("v-img",{staticClass:"white--text align-end",attrs:{contain:"",height:t.height,"aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.laravel.length/5),(function(i,e){return l("v-row",{key:e+40,staticClass:"hidden-md-and-up"},[l("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[l("v-card",{staticClass:"d-flex align-center flex-column",attrs:{color:"orange lighten-2"}},[l("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Laravel")]),t._v(" "),l("v-img",{attrs:{src:"/icons/laravel.svg",width:"25px"}}),t._v(" "),l("label",{staticClass:"justify-center pa-2 mt-auto"},[l("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/Laravel"}}},[t._v("More\n          ")])],1)],1)],1),t._v(" "),t._l(t.laravel.slice(5*(i-1),5*i),(function(e,n){return l("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[l("v-card",{key:n,staticClass:"mr-1 ml-1"},[null!=e.image?l("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"},domProps:{textContent:t._s(e.title)}})],1)],1):l("v-img",{staticClass:"white--text align-end",attrs:{contain:"",height:t.height,"aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.vue.length/5),(function(i,e){return l("v-row",{key:e+30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[l("v-card",{staticClass:"ml-2 d-flex align-center flex-column",attrs:{color:"green",height:t.height,width:"5%"}},[l("label",{staticClass:"justify-center pa- white--text "},[t._v("Vue")]),t._v(" "),l("div",[l("v-img",{staticClass:"justify-center",attrs:{src:"/icons/vue-js.svg",width:"25px"}})],1),t._v(" "),l("label",{staticClass:"justify-center pa-2 mt-auto"},[l("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/vue3"}}},[t._v("More\n        ")])],1)]),t._v(" "),t._l(t.vue.slice(5*(i-1),5*i),(function(e,n){return l("v-card",{key:n,staticClass:"mr-1 ml-1",attrs:{width:"18%"}},[null!=e.image?l("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title))])],1)],1):l("v-img",{staticClass:"white--text align-end",attrs:{contain:"",height:t.height,"aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.vue.length/5),(function(i,e){return l("v-row",{key:e+40,staticClass:"hidden-md-and-up"},[l("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[l("v-card",{staticClass:"d-flex align-center flex-column",attrs:{color:"green"}},[l("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Vue")]),t._v(" "),l("v-img",{attrs:{src:"/icons/vue-js.svg",width:"25px"}}),t._v(" "),l("label",{staticClass:"justify-center pa-2 mt-auto"},[l("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/vue3"}}},[t._v("More\n          ")])],1)],1)],1),t._v(" "),t._l(t.vue.slice(5*(i-1),5*i),(function(e,n){return l("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[l("v-card",{key:n,staticClass:"mr-1 ml-1"},[null!=e.image?l("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"},domProps:{textContent:t._s(e.title)}})],1)],1):l("v-img",{staticClass:"white--text align-end",attrs:{contain:"",height:t.height,"aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[l("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{textContent:t._s(e.title)}})],1)],1)],1)],1)}))],2)}))],2)}),[],!1,null,"3f38126a",null);e.default=component.exports;h()(component,{VCard:v.a,VCardTitle:x.c,VCol:m.a,VContainer:d.a,VImg:C.a,VRow:_.a})}}]);