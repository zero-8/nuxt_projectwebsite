(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{907:function(e,t,n){"use strict";n.r(t);var r=n(15),o=(n(51),n(43),{auth:!1,head:function(){return{title:"World Reminders "+this.id,meta:[{hid:"World Reminders",name:"World Reminders",content:"World Reminders"}]}},data:function(){return{datum:[{name:"test1"},{name:"test2"},{name:"test3"},{name:"test4"},{name:"test5"},{name:"test6"},{name:"test7"}],data:[1,2,3,4,5,6],numberOfColumns:4,loading:!1}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(Math.ceil(e.datum.length/4)),console.log(e.datum.slice(4*(i-1),4*i));case 2:case"end":return t.stop()}}),t)})))()},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,e.error,e.params,t.next=3,n.$get("/sanctum/csrf-cookie");case 3:return t.next=5,n.$get("api/user_details");case 5:return r=t.sent,console.log(r.user.details),t.abrupt("return",{profile:r.user});case 8:case"end":return t.stop()}}),t)})))()},computed:{id:function(){return this.$route.params.username},rowCount:function(){return Math.floor((this.data.length-1)/this.numberOfColumns)+1}},methods:{layoutCount:function(e,t){return(e-1)*this.numberOfColumns+t}},mounted:function(){},components:{},watch:{}}),c=n(35),l=n(31),m=n.n(l),d=n(238),f=n(526),h=n(534),v=n(527),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Event # "+e._s(e.id))]),e._v(" "),n("v-container",e._l(e.rowCount,(function(t,r){return n("v-row",{key:e.data.id},e._l(e.numberOfColumns,(function(t,r){return n("v-col",{key:e.data.id},[e._v("\n        AA\n      ")])})),1)})),1),e._v(" "),n("v-container",e._l(Math.ceil(e.datum.length/4),(function(i,t){return n("v-row",{key:t,attrs:{color:"blue"}},e._l(e.datum.slice(4*(i-1),4*i),(function(t,r){return n("v-col",{key:r,attrs:{color:"red",lg:"3"}},[n("v-card",[e._v("\n          "+e._s(t.name)+"\n        ")])],1)})),1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCard:d.a,VCol:f.a,VContainer:h.a,VRow:v.a})}}]);