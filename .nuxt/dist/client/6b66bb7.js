(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{567:function(t,e,n){var content=n(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("f23833b0",content,!0,{sourceMap:!1})},586:function(t,e,n){"use strict";n(567)},587:function(t,e,n){var r=n(11)(!1);r.push([t.i,".transparent[data-v-381cb59f]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-381cb59f]{text-decoration:none}",""]),t.exports=r},669:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(51),{props:["content","length","loading"],data:function(){return{}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{getnextarticle:function(){this.$emit("next-article")}}}),c=(n(586),n(35)),l=n(31),v=n.n(l),d=n(518),f=n(238),m=n(526),h=n(534),_=n(527),x=n(66),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{attrs:{xs:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[n("h1",{staticClass:"fs-1-3"},[t._v("Quotes")]),t._v(" "),n("p",[t._v("Memorable quotes from technology and science dicipline")])])],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{},[n("v-container",[t._l(Math.ceil(t.content.length/3),(function(i,e){return n("v-row",{key:e,attrs:{color:"blue"}},t._l(t.content.slice(3*(i-1),3*i),(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[n("v-card",{staticClass:" pa-4",attrs:{"min-height":"30vh"}},[n("p",[t._v(t._s(e.message)+" - "+t._s(e.author))])])],1)})),1)})),t._v(" "),n("v-row",[n("v-col",{attrs:{lg:"12"}},[n("v-card",{staticClass:" pa-4 text-center"},[10!=t.length?n("label",{staticClass:"grey--text pa-4 ma-2",attrs:{for:""}},[t._v("Nothing Follows")]):t._e(),n("br"),t._v(" "),n("v-btn",{staticClass:"white--text pa-4 ma-2",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n                Next Article\n              ")])],1)],1)],1)],2)],1)],1)],1)}),[],!1,null,"381cb59f",null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:f.a,VCol:m.a,VContainer:h.a,VRow:_.a,VSheet:x.a})}}]);