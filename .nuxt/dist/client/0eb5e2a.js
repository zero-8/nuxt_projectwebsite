(window.webpackJsonp=window.webpackJsonp||[]).push([[36,10],{537:function(t,e,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("1dcf965a",content,!0,{sourceMap:!1})},546:function(t,e,n){"use strict";n(537)},547:function(t,e,n){var o=n(11)(!1);o.push([t.i,".transparent[data-v-627f1f9b]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-627f1f9b]{text-decoration:none}",""]),t.exports=o},557:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(51),{head:{},props:["content","length","loading"],data:function(){return{selection:""}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{image_default:function(t){console.log("Image failed to load")},getnextarticle:function(){this.$emit("next-article")}}}),l=(n(546),n(35)),c=n(33),d=n.n(c),f=n(507),m=n(235),v=n(84),h=n(238),x=n(913),_=n(515),C=n(180),w=n(516),k=n(66),y=n(538),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[n("h1",[t._v("Blog")]),t._v(" "),n("p",[t._v("Relevent Personal Blogs about programming and events")])])],1),t._v(" "),t._l(t.content,(function(e,o){return n("v-row",{key:o,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"blog/"+e.slug}}},[n("v-img",{attrs:{gradient:"to top right, rgba(0,0,201,.1), rgba(0,0,72,.2)",contain:"",src:e.image,"min-height":"250"}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"blog/"+e.slug}}},[t._v(" "+t._s(e.title)+"\n            ")])],1),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,o){return n("v-chip",{key:o,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?n("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n            Next Article\n          ")])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[n("script",{attrs:{async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),t._v(" "),n("script",[t._v("\n     (adsbygoogle = window.adsbygoogle || []).push({});\n")]),t._v(" "),n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],2)}),[],!1,null,"627f1f9b",null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:m.a,VCardText:v.b,VCardTitle:v.c,VChip:h.a,VChipGroup:x.a,VCol:_.a,VImg:C.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:y.a})},579:function(t,e,n){var content=n(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2b23da60",content,!0,{sourceMap:!1})},662:function(t,e,n){"use strict";n(579)},663:function(t,e,n){var o=n(11)(!1);o.push([t.i,"ul.clean[data-v-cb706f16]{list-style:none!important;list-style-type:none!important}",""]),t.exports=o},855:function(t,e,n){"use strict";n.r(e);var o,r=n(1),l=n(60),c=n(16),d=(n(51),n(49),n(21),n(24),n(28)),f=n.n(d),m=(n(148),o={created:function(){setTimeout((function(){this.$nuxt.$loading.finish()}),1e3)},transition:{beforeEnter:function(t){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start()}))}},middleware:"auth",auth:!1,head:function(){return{title:"Blog",meta:[{hid:"Blog",name:"Blog",content:"Blog Article Page"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.error,t.params,e.next=3,n.$get("/sanctum/csrf-cookie");case 3:return e.next=5,n.$get("api/blog/page/1/item/10");case 5:return o=e.sent,e.abrupt("return",{content:o.data,length:o.data.length});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1,page:2}}},Object(r.a)(o,"created",(function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()})),Object(r.a)(o,"mounted",(function(){})),Object(r.a)(o,"components",{}),Object(r.a)(o,"watch",{}),Object(r.a)(o,"methods",{nextArticle:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:f.a.start(),f.a.inc();try{t.$axios.$get("api/blog/page/".concat(t.page,"/item/",10)).then((function(e){t.length=e.data.length,t.content=[].concat(Object(l.a)(t.content),Object(l.a)(e.data)),f.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,f.a.done()})).finally((function(){}))}catch(e){t.loading=!1,console.log("error")}case 6:case"end":return e.stop()}}),e)})))()}}),o),v=(n(662),n(35)),h=n(33),x=n.n(h),_=n(515),C=n(524),w=n(516),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white",attrs:{fluid:""}},[n("v-row",{},[n("v-col",{attrs:{md:"12",lg:"12"}},[n("BlogCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1)],1)],1)}),[],!1,null,"cb706f16",null);e.default=component.exports;x()(component,{BlogCard:n(557).default}),x()(component,{VCol:_.a,VContainer:C.a,VRow:w.a})}}]);