(window.webpackJsonp=window.webpackJsonp||[]).push([[37,12,13],{540:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={middleware:"admin",layout:"admin"}},576:function(t,e,n){"use strict";n.r(e);var r={inheritAttrs:!1,props:["Dashboard","Redirect"]},l=n(35),o=n(31),m=n.n(o),c=n(518),_=n(233),v=n(80),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"pa-2 ma-2"},[n("v-card-title",[n("v-btn",t._b({},"v-btn",t.$attrs,!1),[n("h1",{staticClass:"black--text"},[t._v(t._s(t.Dashboard))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:c.a,VCard:_.a,VCardTitle:v.c})},577:function(t,e,n){"use strict";n.r(e);var r={},l=n(35),o=n(31),m=n.n(o),c=n(233),_=n(80),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"pa-2 ma-2"},[n("v-card-title",[t._t("menu_name")],2),t._v(" "),n("v-card-text",[t._t("create_menu"),t._v(" "),t._t("view_menu")],2)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:c.a,VCardText:_.b,VCardTitle:_.c})},854:function(t,e,n){"use strict";n.r(e);var r=n(15),l=(n(52),n(29),{mixins:[n(540).a],head:function(){return{title:"Dashboard"}},data:function(){return{}},computed:{email:function(){return this.$auth.state.user.email}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("google"!=t.$auth.state.strategy){e.next=10;break}return e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return(n=new FormData).append("email",t.$auth.state.user.email),n.append("name",t.$auth.state.user.name),e.next=8,t.$axios.$post("api/validate/account",n);case 8:return r=e.sent,e.abrupt("return",{profile:r.data});case 10:case"end":return e.stop()}}),e)})))()}}),o=n(35),m=n(31),c=n.n(m),_=n(518),v=n(534),d=n(66),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[n("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[n("DashTitle",{attrs:{Dashboard:"Dashboard",to:"/dashboard"}}),t._v(" "),n("Dashboard",[n("h2",{attrs:{slot:"menu_name"},slot:"menu_name"},[t._v("POST MENU")]),t._v(" "),n("v-btn",{staticClass:"green white--text",attrs:{slot:"create_menu",to:"admin/post/create"},slot:"create_menu"},[t._v("Create Post")]),t._v(" "),n("v-btn",{staticClass:"blue white--text",attrs:{slot:"view_menu",to:"admin/post/manage"},slot:"view_menu"},[t._v("Manage Post")])],1),t._v(" "),n("Dashboard",[n("h2",{attrs:{slot:"menu_name"},slot:"menu_name"},[t._v("BLOG MENU")]),t._v(" "),n("v-btn",{staticClass:"green white--text",attrs:{slot:"create_menu",to:"admin/blog/create"},slot:"create_menu"},[t._v("Create BLOG")]),t._v(" "),n("v-btn",{staticClass:"blue white--text",attrs:{slot:"view_menu",to:"admin/blog/manage"},slot:"view_menu"},[t._v("Manage BLOG")])],1),t._v(" "),n("Dashboard",[n("h2",{attrs:{slot:"menu_name"},slot:"menu_name"},[t._v("NEWS MENU")]),t._v(" "),n("v-btn",{staticClass:"green white--text",attrs:{slot:"create_menu",to:"admin/news/create"},slot:"create_menu"},[t._v("Create NEWS")]),t._v(" "),n("v-btn",{staticClass:"blue white--text",attrs:{slot:"view_menu",to:"admin/news/manage"},slot:"view_menu"},[t._v("Manage NEWS")])],1),t._v(" "),n("Dashboard",[n("h2",{attrs:{slot:"menu_name"},slot:"menu_name"},[t._v("QUOTES MENU")]),t._v(" "),n("v-btn",{staticClass:"green white--text",attrs:{slot:"create_menu",to:"admin/quotes/create"},slot:"create_menu"},[t._v("Create QUOTES")]),t._v(" "),n("v-btn",{staticClass:"blue white--text",attrs:{slot:"view_menu",to:"admin/quotes/manage"},slot:"view_menu"},[t._v("Manage QUOTES")])],1),t._v(" "),n("Dashboard",[n("h2",{attrs:{slot:"menu_name"},slot:"menu_name"},[t._v("World Reminders MENU")]),t._v(" "),n("v-btn",{staticClass:"green white--text",attrs:{slot:"create_menu",to:"admin/world-reminders/create"},slot:"create_menu"},[t._v("Create World Reminders")]),t._v(" "),n("v-btn",{staticClass:"blue white--text",attrs:{slot:"view_menu",to:"admin/world-reminders/manage"},slot:"view_menu"},[t._v("Manage World Reminders")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DashTitle:n(576).default,Dashboard:n(577).default}),c()(component,{VBtn:_.a,VContainer:v.a,VSheet:d.a})}}]);