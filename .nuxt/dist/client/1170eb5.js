(window.webpackJsonp=window.webpackJsonp||[]).push([[57,14],{525:function(t,e,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("b647df5e",content,!0,{sourceMap:!1})},535:function(t,e,n){"use strict";n(525)},536:function(t,e,n){var r=n(14)(!1);r.push([t.i,".transparent[data-v-36e386e6]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-36e386e6]{text-decoration:none}",""]),t.exports=r},560:function(t,e,n){var content=n(649);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("1b802d7d",content,!0,{sourceMap:!1})},619:function(t,e,n){"use strict";n.r(e);var r=n(13),o=(n(52),{props:["content","length","loading"],data:function(){return{}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{getnextarticle:function(){this.$emit("next-article")}}}),c=(n(535),n(36)),l=n(37),f=n.n(l),d=n(485),h=n(483),m=n(494),v=n(495),x=n(496),w=n(59),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[n("h1",[t._v("Quotes")]),t._v(" "),n("p",[t._v("Memorable quotes from technology and science dicipline")])])],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{},[n("v-container",[t._l(Math.ceil(t.content.length/3),(function(i,e){return n("v-row",{key:e,attrs:{color:"blue"}},t._l(t.content.slice(3*(i-1),3*i),(function(e,r){return n("v-col",{key:r,attrs:{lg:"4"}},[n("v-card",{staticClass:" pa-4",attrs:{height:"15vh"}},[n("p",[t._v(t._s(e.message)+" - "+t._s(e.author))])])],1)})),1)})),t._v(" "),n("v-row",[n("v-col",{attrs:{lg:"12"}},[n("v-card",{staticClass:" pa-4 text-center"},[10!=t.length?n("label",{staticClass:"grey--text pa-4 ma-2",attrs:{for:""}},[t._v("Nothing Follows")]):t._e(),n("br"),t._v(" "),n("v-btn",{staticClass:"white--text pa-4 ma-2",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n                Next Article\n              ")])],1)],1)],1)],2)],1)],1)],1)}),[],!1,null,"36e386e6",null);e.default=component.exports;f()(component,{VBtn:d.a,VCard:h.a,VCol:m.a,VContainer:v.a,VRow:x.a,VSheet:w.a})},648:function(t,e,n){"use strict";n(560)},649:function(t,e,n){var r=n(14)(!1);r.push([t.i,"ul.clean[data-v-49b755fa]{list-style:none!important;list-style-type:none!important}",""]),t.exports=r},827:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=n(54),l=n(13),f=(n(52),n(46),n(22),n(25),n(31)),d=n.n(f),h=(n(140),r={created:function(){setTimeout((function(){this.$nuxt.$loading.finish()}),1e3)},transition:{beforeEnter:function(t){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start()}))}},middleware:"auth",auth:!1,head:function(){return{title:"Quotes",meta:[{hid:"Quotes",name:"Quotes",content:"Quotes Article Page"}]}},data:function(){return{loading:!1,page:2}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.error,t.params,e.next=3,n.$get("/sanctum/csrf-cookie");case 3:return e.next=5,n.$get("api/quotes/page/1/item/10");case 5:return r=e.sent,e.abrupt("return",{content:r.data,length:r.data.length});case 7:case"end":return e.stop()}}),e)})))()}},Object(o.a)(r,"created",(function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()})),Object(o.a)(r,"mounted",(function(){})),Object(o.a)(r,"components",{}),Object(o.a)(r,"watch",{}),Object(o.a)(r,"methods",{nextArticle:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:d.a.start(),d.a.inc();try{t.$axios.$get("api/quotes/page/".concat(t.page,"/item/",10)).then((function(e){t.length=e.data.length,t.content=[].concat(Object(c.a)(t.content),Object(c.a)(e.data)),d.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,d.a.done()})).finally((function(){}))}catch(e){t.loading=!1,console.log("error")}case 6:case"end":return e.stop()}}),e)})))()}}),r),m=(n(648),n(36)),v=n(37),x=n.n(v),w=n(494),_=n(495),C=n(496),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white",attrs:{fluid:""}},[n("v-row",{},[n("v-col",{attrs:{md:"12",lg:"12"}},[n("QuotesCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1)],1)],1)}),[],!1,null,"49b755fa",null);e.default=component.exports;x()(component,{QuotesCard:n(619).default}),x()(component,{VCol:w.a,VContainer:_.a,VRow:C.a})}}]);