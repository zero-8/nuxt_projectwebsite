(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{492:function(t,e,n){var content=n(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("36bc519c",content,!0,{sourceMap:!1})},512:function(t,e,n){"use strict";n(4)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},513:function(t,e,n){"use strict";n(492)},514:function(t,e,n){var o=n(15)(!1);o.push([t.i,".transparent[data-v-61555ec9]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-61555ec9]{text-decoration:none}",""]),t.exports=o},600:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(11),c=(n(30),n(59),n(41),n(512),n(20),n(24),n(205),n(55),n(38)),l=n.n(c),d=(n(159),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,content:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green",date:""}},asyncData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:case"end":return e.stop()}}),e)})))()},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getposts()},computed:{},methods:{getposts:function(){var t=this;this.$axios.$get("/sanctum/csrf-cookie"),l.a.start(),l.a.inc(),this.date=(new Date).toJSON().slice(0,10).replace(/-/g,"-");try{this.$axios.$get("api/er/page/".concat(this.page,"/item/",10,"/date/").concat(this.date)).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green"),e.data.length<10&&(t.no_more_post="",t.disable_next=!0,t.disable_color="grey");for(var n=0,r=Object.entries(e.data);n<r.length;n++){var c=Object(o.a)(r[n],2),d=(c[0],c[1]);t.increment=t.increment+1,t.data.push({id:d.id,slug:d.slug,title:d.title,subtitle:d.subtitle,event_date:d.event_date,country:d.country,content:d.content,created_at:d.created_at,human_date:d.human_date,author:d.author,image:d.image,increment:t.increment,date:d.date})}t.content=t.data,l.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){l.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),m=(n(513),n(40)),v=n(48),_=n.n(v),f=n(427),h=n(445),x=n(444),C=n(435),w=n(437),y=n(53),k=n(767),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("h1",[t._v("World Reminders")])])],1),t._v(" "),t._l(t.content,(function(e,o){return n("v-row",{key:o,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-card-text",{},[n("p",[t._v(t._s(e.date))]),t._v(" "),n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.subtitle))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.content)}})])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return n("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0",class:t.no_more_post},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"61555ec9",null);e.default=component.exports;_()(component,{VBtn:f.a,VCard:h.a,VCardText:x.b,VCol:C.a,VRow:w.a,VSheet:y.a,VSkeletonLoader:k.a})}}]);