(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{859:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(52),{data:function(){return{posts:{content:[],image:"",date:"",author:""},title:"",pageload:!0}},head:function(){return{title:"Post:"+this.title,meta:[{hid:"Post",name:"Post",content:"Post"+this.title}]}},mounted:function(){console.log("mounted")},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios,t.error,t.params;case 1:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:return e.next=4,t.$axios.$get("api/user_details");case 4:n=e.sent,console.log(n.user.details);case 6:case"end":return e.stop()}}),e)})))()},middleware:"auth",components:{},watch:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),f=n(518),m=n(526),h=n(534),v=n(175),w=n(527),x=n(66),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{lg:"12"}},[n("v-sheet",{staticClass:"blue white--text pa-2 ma-2"},[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"green"}},[n("v-icon",{attrs:{dark:""}},[t._v(" Profile")])],1),t._v(" "),n("label",{attrs:{for:""}})],1)],1)],1)],1)],1)}),[],!1,null,"9d434992",null);e.default=component.exports;d()(component,{VBtn:f.a,VCol:m.a,VContainer:h.a,VIcon:v.a,VRow:w.a,VSheet:x.a})}}]);