(window.webpackJsonp=window.webpackJsonp||[]).push([[37,29],{593:function(e,t,r){"use strict";r.r(t);var n=r(15),o=(r(53),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loader=!0,t.next=3,e.$axios.$get("/sanctum/csrf-cookie");case 3:return t.next=5,e.$axios.$get("api/blog/item/3");case 5:r=t.sent,e.content=r.data,e.loader=!1;case 8:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=r(35),l=r(31),v=r.n(l),d=r(236),f=r(233),_=r(52),m=r(241),h=r(553),x=r(526),w=r(534),C=r(183),k=r(527),V=r(67),R=r(549),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",[e.loader?e._e():r("v-container",[r("v-row",[r("v-col",[r("h2",{staticClass:"ml-3 mb-2"},[e._v("Related Blogs")])])],1),e._v(" "),r("v-row",e._l(e.content,(function(t,n){return r("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[r("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/blog/"+t.slug}}},[null!=t.image?r("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:t.image}}):r("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),e._v(" "),r("v-card-title",[r("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/blog/"+t.slug}}},[e._v("\n                "+e._s(t.title)+"\n              ")])],1)]),e._v(" "),r("v-card-text",{},[r("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[r("span",{staticClass:"pt-3"},[e._v("Tags: ‌‌")]),e._v(" "),e._l(t.tags,(function(t,n){return r("v-chip",{key:n,staticClass:"white--text",attrs:{to:"/blog/tags/"+t,color:"blue"}},[e._v(e._s(t))])}))],2),e._v(" "),null!=t.profile_picture?r("v-avatar",{staticClass:"d-inline-flex pa-2"},[r("img",{attrs:{src:t.profile_picture,alt:""}})]):r("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[r("p",[e._v("Author:")])]),e._v(" "),r("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[r("p",[e._v(e._s(t.name))])]),e._v(" "),r("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[r("p",[e._v(e._s(t.human_date))])])],1)],1)],1)})),1)],1),e._v(" "),e.loader?r("v-container",e._l(e.content,(function(e,t){return r("v-row",{key:t},[r("v-col",[r("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VAvatar:d.a,VCard:f.a,VCardText:_.c,VCardTitle:_.d,VChip:m.a,VChipGroup:h.a,VCol:x.a,VContainer:w.a,VImg:C.a,VRow:k.a,VSheet:V.a,VSkeletonLoader:R.a})},901:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(15),c=(r(29),r(53),Object(n.a)({head:function(){return{title:"Profile "+this.username,meta:[{hid:"Profile",name:"Profile",content:"Profile"}]}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred",loading:!1,profile:[]}},watch:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.error,o=e.params,t.prev=1,t.next=4,r.$get("/sanctum/csrf-cookie");case 4:return t.next=6,r.$get("api/user_details/username/".concat(o.username));case 6:return c=t.sent,t.abrupt("return",{profile:c.user});case 10:t.prev=10,t.t0=t.catch(1),n({statusCode:500,message:"Page not found"});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},afetch:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{username:function(){return this.$route.params.username},allibataname:function(){return this.profile.name}},methods:{},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},components:{}},"watch",{})),l=r(35),v=r(31),d=r.n(v),f=r(236),_=r(233),m=r(52),h=r(526),x=r(534),w=r(183),C=r(527),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",[r("h1",[e._v("Profile Username : "+e._s(e.username))])])],1),e._v(" "),r("v-row",[r("v-col",[r("v-card",[e.profile.details.cover_photo?r("v-img",{staticClass:"ml-2 mt-2",attrs:{src:e.profile.details.cover_photo}}):e._e(),e._v(" "),e.profile.details.profile_picture?r("v-avatar",{attrs:{width:"37"}},[r("v-img",{attrs:{src:e.profile.details.profile_picture}})],1):r("v-avatar",{staticClass:"ml-2 mt-2 white--text",attrs:{color:"grey"}},[e._v("\n          "+e._s(e.profile.name.charAt(0).toUpperCase())+"\n        ")]),e._v(" "),r("v-card-text",[r("span",{staticClass:"fs-1-5"},[e._v(e._s(e.profile.name))]),r("br"),e._v(" "),r("span",{staticClass:"fs-1-5"},[r("span",{staticClass:"font-Bonida"},[e._v(e._s(e.allibataname))])]),r("br"),e._v(" "),e.username?r("span",[e._v("Username: "+e._s(e.username))]):e._e(),r("br"),e._v(" "),e.profile.email?r("span",[e._v("Email: "+e._s(e.profile.email))]):e._e(),r("br"),e._v(" "),e.profile.details.house_number?r("span",[e._v("\n            Address No: "+e._s(e.profile.details.house_number)+"\n          ")]):e._e(),e._v(" "),r("br"),e._v(" "),e.profile.details.street?r("span",[e._v("\n            Address street: "+e._s(e.profile.details.street)+"\n          ")]):e._e(),e._v(" "),r("br"),e._v(" "),e.profile.details.city?r("span",[e._v("\n            Address City: "+e._s(e.profile.details.city)+"\n          ")]):e._e(),e._v(" "),r("br"),e._v(" "),e.profile.details.province?r("span",[e._v("\n            Address province: "+e._s(e.profile.details.province)+"\n          ")]):e._e(),e._v(" "),r("br"),e._v(" "),e.profile.details.country?r("span",[e._v("\n            Address country: "+e._s(e.profile.details.country)+"\n          ")]):e._e(),e._v(" "),r("br")])],1)],1)],1),e._v(" "),r("v-row",[r("v-col",[r("WidgetBlogtags")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{WidgetBlogtags:r(593).default}),d()(component,{VAvatar:f.a,VCard:_.a,VCardText:m.c,VCol:h.a,VContainer:x.a,VImg:w.a,VRow:C.a})}}]);