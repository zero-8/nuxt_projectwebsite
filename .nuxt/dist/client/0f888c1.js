(window.webpackJsonp=window.webpackJsonp||[]).push([[29,12],{454:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("f4aa4aac",content,!0,{sourceMap:!1})},463:function(t,e,n){"use strict";n(454)},464:function(t,e,n){var o=n(16)(!1);o.push([t.i,".transparent[data-v-7cf1ea39]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-7cf1ea39]{text-decoration:none}",""]),t.exports=o},475:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("301000a8",content,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";n.r(e);var o=n(15),r=n(11),c=(n(19),n(200),n(26),n(59),n(64)),l=n.n(c),d=(n(198),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,content:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green"}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getposts()},computed:{},methods:{getposts:function(){var t=this;this.$axios.$get("/sanctum/csrf-cookie"),l.a.start(),l.a.inc();try{this.$axios.$get("api/news/page/".concat(this.page,"/item/",10)).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green");for(var n=0,r=Object.entries(e.data);n<r.length;n++){var c=Object(o.a)(r[n],2),d=(c[0],c[1]);t.increment=t.increment+1,t.data.push({name:d.name,id:d.id,slug:d.slug,title:d.title,content:d.content,created_at:d.created_at,human_date:d.human_date,image:d.image,increment:t.increment})}t.content=t.data,l.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){l.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),m=(n(463),n(50)),f=n(63),v=n.n(f),h=n(416),_=n(437),w=n(434),C=n(425),x=n(157),k=n(427),y=n(48),V=n(601),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("h1",[t._v("News")])])],1),t._v(" "),t._l(t.content,(function(e,o){return n("v-row",{key:o,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"news/view",query:{slug:e.slug}}}},[n("v-img",{attrs:{height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"news/view",query:{slug:e.slug}}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return n("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0",class:t.no_more_post},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"7cf1ea39",null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:_.a,VCardText:w.b,VCardTitle:w.c,VCol:C.a,VImg:x.a,VRow:k.a,VSheet:y.a,VSkeletonLoader:V.a})},550:function(t,e,n){"use strict";n(475)},551:function(t,e,n){var o=n(16)(!1);o.push([t.i,"ul.clean[data-v-18cffada]{list-style:none!important;list-style-type:none!important}",""]),t.exports=o},612:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(59),{head:function(){return{title:"News Articles",meta:[{hid:"News",name:"News",content:"News Article Page"}]}},data:function(){return{loading:!1}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){},inject:{theme:{default:{isDark:!1}}},components:{},watch:{},methods:{}}),c=(n(550),n(50)),l=n(63),d=n.n(l),m=n(425),f=n(426),v=n(427),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"white",attrs:{fluid:""}},[e("v-row",{},[e("v-col",{attrs:{mg:"12",lg:"10","min-height":"450vh"}},[e("NewsCard")],1)],1)],1)}),[],!1,null,"18cffada",null);e.default=component.exports;d()(component,{NewsCard:n(495).default}),d()(component,{VCol:m.a,VContainer:f.a,VRow:v.a})}}]);