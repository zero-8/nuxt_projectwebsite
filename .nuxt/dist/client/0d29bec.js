(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{537:function(t,e,l){var content=l(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("1dcf965a",content,!0,{sourceMap:!1})},546:function(t,e,l){"use strict";l(537)},547:function(t,e,l){var o=l(11)(!1);o.push([t.i,".transparent[data-v-627f1f9b]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-627f1f9b]{text-decoration:none}",""]),t.exports=o},557:function(t,e,l){"use strict";l.r(e);var o=l(16),n=(l(51),{head:{},props:["content","length","loading"],data:function(){return{selection:""}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{image_default:function(t){console.log("Image failed to load")},getnextarticle:function(){this.$emit("next-article")}}}),c=(l(546),l(35)),r=l(33),d=l.n(r),f=l(507),m=l(235),v=l(84),_=l(238),h=l(913),x=l(515),C=l(180),w=l(516),k=l(66),y=l(538),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-sheet",{staticClass:"ma-0 pa-0"},[l("v-row",{staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("h1",[t._v("Blog")]),t._v(" "),l("p",[t._v("Relevent Personal Blogs about programming and events")])])],1),t._v(" "),t._l(t.content,(function(e,o){return l("v-row",{key:o,staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"blog/"+e.slug}}},[l("v-img",{attrs:{gradient:"to top right, rgba(0,0,201,.1), rgba(0,0,72,.2)",contain:"",src:e.image,"min-height":"250"}})],1),t._v(" "),l("v-card-title",[l("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"blog/"+e.slug}}},[t._v(" "+t._s(e.title)+"\n            ")])],1),t._v(" "),l("v-card-text",{},[l("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[l("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,o){return l("v-chip",{key:o,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),l("span",[t._v("Author: "+t._s(e.name)+" ")]),l("br"),t._v(" "),l("span",[t._v("Date : "+t._s(e.human_date))]),l("br")],1)],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?l("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?l("v-row",{staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[l("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1):t._e(),t._v(" "),l("v-row",{staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[l("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n            Next Article\n          ")])],1)],1)],1),t._v(" "),l("v-row",{staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("script",{attrs:{async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),t._v(" "),l("script",[t._v("\n     (adsbygoogle = window.adsbygoogle || []).push({});\n")]),t._v(" "),l("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],2)}),[],!1,null,"627f1f9b",null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:m.a,VCardText:v.b,VCardTitle:v.c,VChip:_.a,VChipGroup:h.a,VCol:x.a,VImg:C.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:y.a})}}]);