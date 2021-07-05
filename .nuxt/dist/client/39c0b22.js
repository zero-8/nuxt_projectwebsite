(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{539:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={middleware:"admin",layout:"admin"}},664:function(e,t,n){var content=n(833);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("df8d8942",content,!0,{sourceMap:!1})},832:function(e,t,n){"use strict";n(664)},833:function(e,t,n){var r=n(11)(!1);r.push([e.i,"ul.clean[data-v-4806f31c]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-4806f31c],.ck.ck-content.ck-editor__editable[data-v-4806f31c],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-4806f31c],.ck.ck-content.ck-editor__editable_inline[data-v-4806f31c]{height:350px}",""]),e.exports=r},896:function(e,t,n){"use strict";n.r(t);var r=n(22),o=n(15),c=(n(23),n(40),n(42),n(32),n(187),n(250),n(29),n(7),n(52),n(51),n(539)),l=n(186),d=n(126),m=(n(28),n(150),"https://backend.inhinyeru.com"),f={mixins:[l.validationMixin,c.a],head:function(){return{title:"Users Datatable"}},data:function(){return{headers:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Admin",value:"name"},{text:"Type",value:"type"},{text:"Logs",value:"description"},{text:"Date / Time",value:"created_at"}],form_content:"",form_title:"",form_publish:"",dialog:!1,dialogDelete:!1,deletedialog:!1,editedIndex:-1,search:"",tabledata:[],tabledata_total:0,loading:!0,options:{},publishselection:[{value:0,text:"No"},{value:1,text:"Yes"}],form_image:"",image:"",image_preview:"",image_name:"",form_username:"",form_name:"",form_email:"",form_is_admin:""}},validations:{form_content:{required:d.required},form_title:{required:d.required},form_publish:{required:d.required}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timezone="Asia/Singapore",e.url=m,e.editorConfig={simpleUpload:{uploadUrl:m+"/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",identifier:e.image_id,Timezone:e.timezone,"X-XSRF-TOKEN":e.$auth.$storage.getCookies()["XSRF-TOKEN"]}}};case 3:case"end":return t.stop()}}),t)})))()},components:{"ckeditor-nuxt":function(){return n.e(0).then(n.t.bind(null,856,7))}},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},mounted:function(){this.getDataFromApi()},methods:{close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},getDataFromApi:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,l,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:e.loading=!0,n=e.options,o=n.sortBy,c=n.sortDesc,l=n.page,d=n.itemsPerPage,(m=new FormData).append("sortDesc",c),m.append("sortBy",o),m.append("page",l),m.append("itemsPerPage",d),m.append("search",e.search),e.$axios.$get("/sanctum/csrf-cookie").then((function(e){})),e.$axios.$post("admin/users/datatable_logs",m).then((function(t){var data=[],n=1;n=1==l?1:(l-1)*d+1;for(var o=0,c=Object.entries(t.data);o<c.length;o++){var m=Object(r.a)(c[o],2),f=(m[0],m[1]);data.push({no:n,name:f.name,email:f.email,description:f.description,created_at:f.human_date,type:f.type_desc}),n++}e.tabledata=data,e.tabledata_total=t.total,e.loading=!1})).catch((function(t){e.loading=!1})).finally((function(){e.loading=!1}));case 12:case"end":return t.stop()}}),t)})))()}}},v=(n(832),n(35)),h=n(31),_=n.n(h),x=n(518),k=n(238),y=n(85),D=n(534),w=n(858),C=n(533),$=n(66),T=n(532),V=n(90),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":""}},[n("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":""}},[n("v-card",[n("v-card-title",[e._v("\n        Users Table Logs\n        "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{change:e.getDataFromApi},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tabledata,options:e.options,"server-items-length":e.tabledata_total,loading:e.loading,"footer-props":{"items-per-page-options":[5,10,20,30,40,50]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)]},proxy:!0},{key:"header.id",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"header.name",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"item.created_at",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.created_at)+"\n        ")]}}])})],1)],1)],1)}),[],!1,null,"4806f31c",null);t.default=component.exports;_()(component,{Template:n(125).default}),_()(component,{VBtn:x.a,VCard:k.a,VCardActions:y.a,VCardTitle:y.c,VContainer:D.a,VDataTable:w.a,VDialog:C.a,VSheet:$.a,VSpacer:T.a,VTextField:V.a})}}]);