(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{864:function(e,t,n){"use strict";n.r(t);var r=n(54),o=n(13),c=(n(22),n(25),n(52),n(31)),d=n.n(c),l=(n(140),{auth:!1,head:function(){return{title:"World Reminders "+this.id,meta:[{hid:"World Reminders",name:"World Reminders",content:"World Reminders"}]}},data:function(){return{loading:!1,page:2}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,e.error,r=e.params,t.next=3,n.$get("/sanctum/csrf-cookie");case 3:return t.next=5,n.$get("api/er/page/1/item/10/month/".concat(r.id));case 5:return o=t.sent,t.abrupt("return",{content:o.data,length:o.data.length});case 7:case"end":return t.stop()}}),t)})))()},created:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{id:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.$route.params.id);case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){},components:{},watch:{},methods:{nextArticle:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.$get("/sanctum/csrf-cookie");case 3:d.a.start(),d.a.inc();try{e.$axios.$get("api/er/page/".concat(e.page,"/item/",10,"/month/").concat(e.id)).then((function(t){e.length=t.data.length,e.content=[].concat(Object(r.a)(e.content),Object(r.a)(t.data)),d.a.done(),e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,d.a.done()})).finally((function(){}))}catch(t){e.loading=!1,console.log("error")}case 6:case"end":return t.stop()}}),t)})))()}}}),m=n(36),f=n(37),h=n.n(f),w=n(494),R=n(495),x=n(496),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"white",attrs:{fluid:""}},[n("v-row",{},[n("v-col",{attrs:{ms:"10",lg:"10"}},[n("WorldRemindersCard",{attrs:{content:e.content,length:e.length,loading:e.loading},on:{"next-article":e.nextArticle}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{WorldRemindersCard:n(620).default}),h()(component,{VCol:w.a,VContainer:R.a,VRow:x.a})}}]);