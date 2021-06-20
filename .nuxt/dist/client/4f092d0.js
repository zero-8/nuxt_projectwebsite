(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{503:function(e,t,n){"use strict";t.a={styles:":root {\n  --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);\n  --ck-color-mention-text: hsl(341, 100%, 30%);\n  --ck-highlight-marker-blue: hsl(201, 97%, 72%);\n  --ck-highlight-marker-green: hsl(120, 93%, 68%);\n  --ck-highlight-marker-pink: hsl(345, 96%, 73%);\n  --ck-highlight-marker-yellow: hsl(60, 97%, 73%);\n  --ck-highlight-pen-green: hsl(112, 100%, 27%);\n  --ck-highlight-pen-red: hsl(0, 85%, 49%);\n  --ck-image-style-spacing: 1.5em;\n  --ck-todo-list-checkmark-size: 16px;\n}\n\n.image-style-side {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n  max-width: 50%;\n}\n\n.image-style-align-left {\n  float: left;\n  margin-right: var(--ck-image-style-spacing);\n}\n\n.image-style-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-style-align-right {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n}\n\n.image {\n  display: table;\n  clear: both;\n  text-align: center;\n  margin: 1em auto;\n}\n\n.image img {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  min-width: 50px;\n}\n\n.image > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n  word-break: break-word;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 97%);\n  padding: .6em;\n  font-size: .75em;\n  outline-offset: -1px;\n}\n\n.image.image_resized {\n  max-width: 100%;\n  display: block;\n  box-sizing: border-box;\n}\n\n.image.image_resized img {\n  width: 100%;\n}\n\n.image.image_resized > figcaption {\n  display: block;\n}\n\n.marker-yellow {\n  background-color: var(--ck-highlight-marker-yellow);\n}\n\n.marker-green {\n  background-color: var(--ck-highlight-marker-green);\n}\n\n.marker-pink {\n  background-color: var(--ck-highlight-marker-pink);\n}\n\n.marker-blue {\n  background-color: var(--ck-highlight-marker-blue);\n}\n\n.pen-red {\n  color: var(--ck-highlight-pen-red);\n  background-color: transparent;\n}\n\n.pen-green {\n  color: var(--ck-highlight-pen-green);\n  background-color: transparent;\n}\n\n.text-tiny {\n  font-size: .7em;\n}\n\n.text-small {\n  font-size: .85em;\n}\n\n.text-big {\n  font-size: 1.4em;\n}\n\n.text-huge {\n  font-size: 1.8em;\n}\n\nblockquote {\n  overflow: hidden;\n  padding-right: 1.5em;\n  padding-left: 1.5em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  border-left: solid 5px hsl(0, 0%, 80%);\n}\n\n[dir=\"rtl\"] blockquote {\n  border-left: 0;\n  border-right: solid 5px hsl(0, 0%, 80%);\n}\n\ncode {\n  background-color: hsla(0, 0%, 78%, 0.3);\n  padding: .15em;\n  border-radius: 2px;\n}\n\n.table {\n  margin: 1em auto;\n  display: table;\n}\n\n.table table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px double hsl(0, 0%, 70%);\n}\n\n.table table td,\n.table table th {\n  min-width: 2em;\n  padding: .4em;\n  border: 1px solid hsl(0, 0%, 75%);\n}\n\n.table table th {\n  font-weight: bold;\n  background: hsla(0, 0%, 0%, 5%);\n}\n\n[dir=\"rtl\"] .table th {\n  text-align: right;\n}\n\n[dir=\"ltr\"] .table th {\n  text-align: left;\n}\n\n.page-break {\n  position: relative;\n  clear: both;\n  padding: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-break::after {\n  content: '';\n  position: absolute;\n  border-bottom: 2px dashed hsl(0, 0%, 77%);\n  width: 100%;\n}\n\n.page-break__label {\n  position: relative;\n  z-index: 1;\n  padding: .3em .6em;\n  display: block;\n  text-transform: uppercase;\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;\n  font-size: 0.75em;\n  font-weight: bold;\n  color: hsl(0, 0%, 20%);\n  background: hsl(0, 0%, 100%);\n  box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.todo-list {\n  list-style: none;\n}\n\n.todo-list li {\n  margin-bottom: 5px;\n}\n\n.todo-list li .todo-list {\n  margin-top: 5px;\n}\n\n.todo-list .todo-list__label > input {\n  -webkit-appearance: none;\n  display: inline-block;\n  position: relative;\n  width: var(--ck-todo-list-checkmark-size);\n  height: var(--ck-todo-list-checkmark-size);\n  vertical-align: middle;\n  border: 0;\n  left: -25px;\n  margin-right: -15px;\n  right: 0;\n  margin-left: 0;\n}\n\n.todo-list .todo-list__label > input::before {\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 1px solid hsl(0, 0%, 20%);\n  border-radius: 2px;\n  transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;\n}\n\n.todo-list .todo-list__label > input::after {\n  display: block;\n  position: absolute;\n  box-sizing: content-box;\n  pointer-events: none;\n  content: '';\n  left: calc( var(--ck-todo-list-checkmark-size) / 3 );\n  top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );\n  border-style: solid;\n  border-color: transparent;\n  border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;\n  transform: rotate(45deg);\n}\n\n.todo-list .todo-list__label > input[checked]::before {\n  background: hsl(126, 64%, 41%);\n  border-color: hsl(126, 64%, 41%);\n}\n\n.todo-list .todo-list__label > input[checked]::after {\n  border-color: hsl(0, 0%, 100%);\n}\n\n.todo-list .todo-list__label .todo-list__label__description {\n  vertical-align: middle;\n}\n\n.media {\n  clear: both;\n  margin: 1em 0;\n  display: block;\n  min-width: 15em;\n}\n\n.raw-html-embed {\n  margin: 1em auto;\n  min-width: 15em;\n}\n\nhr {\n  margin: 15px 0;\n  height: 4px;\n  background: hsl(0, 0%, 87%);\n  border: 0;\n}\n\npre {\n  padding: 1em;\n  color: hsl(0, 0%, 20.8%);\n  background: hsla(0, 0%, 78%, 0.3);\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  text-align: left;\n  direction: ltr;\n  tab-size: 4;\n  white-space: pre-wrap;\n  font-style: normal;\n  min-width: 200px;\n}\n\npre code {\n  background: unset;\n  padding: 0;\n  border-radius: 0;\n}\n\n.mention {\n  background: var(--ck-color-mention-background);\n  color: var(--ck-color-mention-text);\n}\n@media print {\n\n  .page-break {\n      padding: 0;\n  }\n\n  .page-break::after {\n      display: none;\n  }\n}",DELIVERY:"Delivery",CARRIER:"Carrier"}},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={middleware:"admin",layout:"admin"}},605:function(e,t,n){var content=n(779);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("6edd19a0",content,!0,{sourceMap:!1})},778:function(e,t,n){"use strict";n(605)},779:function(e,t,n){var r=n(14)(!1);r.push([e.i,"ul.clean[data-v-0f643127]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-0f643127],.ck.ck-content.ck-editor__editable[data-v-0f643127],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-0f643127],.ck.ck-content.ck-editor__editable_inline[data-v-0f643127]{height:350px}",""]),e.exports=r},853:function(e,t,n){"use strict";n.r(t);var r=n(20),o=n(13),l=(n(22),n(38),n(43),n(302),n(29),n(141),n(30),n(221),n(222),n(52),n(505)),d=n(508),c=n.n(d),m=n(503),h=n(176),f=n(117),v=n(31),_=n.n(v),k=(n(140),{mixins:[h.validationMixin,l.a],head:function(){return{title:"News Datatable"}},data:function(){return{headers:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Name",value:"name"},{text:"Title",value:"title"},{text:"Slug",value:"slug"},{text:"Publish",value:"publish"},{text:"Date / Time",value:"created_at"},{text:"Action",value:"id",sortable:!1}],form_content:"",form_title:"",form_publish:"",dialog:!1,dialogDelete:!1,deletedialog:!1,editedIndex:-1,search:"",tabledata:[],tabledata_total:0,loading:!0,options:{},publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],form_image:"",image:"",image_preview:"",image_name:""}},validations:{form_content:{required:f.required},form_title:{required:f.required},form_publish:{required:f.required}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timezone="Asia/Singapore",e.editorConfig={simpleUpload:{uploadUrl:"https://backend.inhinyeru.com/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:e.timezone,identifier:e.image_id,"X-XSRF-TOKEN":e.$auth.$storage.getCookies()["XSRF-TOKEN"]}}};case 2:case"end":return t.stop()}}),t)})))()},components:{"ckeditor-nuxt":function(){return n.e(1).then(n.t.bind(null,810,7))}},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},mounted:function(){this.getDataFromApi()},methods:{handleFileUpload:function(e){var t=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(t);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(e){console.log(e)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",this.form_image="",!1},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.image_id=this.tabledata[this.tabledata.indexOf(e)].ckeditor_log,this.form_title=this.tabledata[this.tabledata.indexOf(e)].title,this.form_image=this.tabledata[this.tabledata.indexOf(e)].image,this.form_content=this.tabledata[this.tabledata.indexOf(e)].content,this.form_publish=this.tabledata[this.tabledata.indexOf(e)].publishvalue,this.editedIndex=this.tabledata.indexOf(e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tabledata.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},SaveEdited:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:_.a.start(),e.form_content=c.a.inlineContent(e.form_content,m.a.styles),n=new FormData,r=e.tabledata[e.editedIndex].id,n.append("post_id",e.tabledata[e.editedIndex].id),n.append("title",e.form_title),n.append("content",e.form_content),n.append("publish",e.form_publish),n.append("image",e.form_image);try{e.$axios.$post("admin/news/update/".concat(r),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.tabledata[e.editedIndex].title=e.form_title,e.tabledata[e.editedIndex].content=e.form_content,e.tabledata[e.editedIndex].publish=1==e.form_publish?"Draft":"Publish",e.tabledata[e.editedIndex].publishvalue=e.form_publish,e.tabledata[e.editedIndex].image=t.image,e.dialog=!1,e.form_publish="",e.image_preview="",_.a.done()})).catch((function(t){e.form_publish="",_.a.done()})).finally((function(){}))}catch(e){}case 12:case"end":return t.stop()}}),t)})))()},deleteItemConfirm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:n=e.tabledata[e.editedIndex].id;try{e.$axios.$delete("admin/news/delete/".concat(n)).then((function(e){})).catch((function(e){})).finally((function(){}))}catch(e){}e.tabledata.splice(e.editedIndex,1),e.closeDelete();case 6:case"end":return t.stop()}}),t)})))()},getDataFromApi:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,l,d,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.options,o=n.sortBy,l=n.sortDesc,d=n.page,c=n.itemsPerPage,(m=new FormData).append("sortDesc",l),m.append("sortBy",o),m.append("page",d),m.append("itemsPerPage",c),m.append("search",e.search),t.next=10,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 10:e.$axios.$post("admin/news/datatable",m).then((function(t){var data=[],n=1;n=1==d?1:(d-1)*c+1;for(var o=0,l=Object.entries(t.data);o<l.length;o++){var m=Object(r.a)(l[o],2),h=(m[0],m[1]);data.push({no:n,name:h.name,id:h.id,slug:h.slug,title:h.title,content:h.content,publish:1==h.publish?"Draft":"Publish",publishvalue:h.publish,image:h.image,created_at:h.human_date,ckeditor_log:h.ckeditor_log}),n++}e.tabledata=data,e.tabledata_total=t.total,e.loading=!1})).catch((function(t){e.loading=!1})).finally((function(){e.loading=!1}));case 11:case"end":return t.stop()}}),t)})))()}}}),x=(n(778),n(36)),w=n(37),y=n.n(w),$=n(485),C=n(483),I=n(482),D=n(494),z=n(495),T=n(812),O=n(501),V=n(208),R=n(172),S=n(496),j=n(618),A=n(59),E=n(500),F=n(488),P=n(60),U=n(219),component=Object(x.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":""}},[n("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":""}},[n("v-card",[n("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary","max-height":"50vh"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-toolbar-title",[e._v("Settings")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:e.SaveEdited}},[e._v(" Save ")])],1)],1),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title"},on:{blur:function(t){return e.$v.form_title.$touch()},input:function(t){return e.$v.form_title.$touch()}},model:{value:e.form_title,callback:function(t){e.form_title=t},expression:"form_title"}}),e._v(" "),e.$v.form_title.$error?[e.$v.form_title.required?e._e():n("div",{staticClass:"errorMessage red--text"},[e._v("\n                    Title is required.\n                  ")])]:e._e()],2)],1),e._v(" "),n("v-row",[n("v-col",[n("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(t){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(t){e.form_publish=t},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():n("p",{staticClass:"errorMessage red--text"},[e._v("\n                    Select Publish is required.\n                  ")])]:e._e()],2)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{lg:"4"}},[n("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),n("v-card",[e.image_preview?n("v-img",{attrs:{src:e.image_preview}}):n("div",[e.form_image?n("v-img",{attrs:{src:e.form_image}}):e._e()],1)],1),e._v(" "),""!=this.image_preview||""!=this.form_image?n("label",{staticClass:"red--text",attrs:{onclick:"return false"},on:{click:function(t){return e.remove_image()}}},[e._v("Remove")]):e._e()],1),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-row",[n("v-col",{},[n("label",{staticClass:"black--text",attrs:{for:""}},[e._v("Content")]),e._v(" "),n("br"),e._v(" "),n("client-only",{attrs:{placeholder:"loading..."}},[n("ckeditor-nuxt",{staticStyle:{height:"300px"},attrs:{config:e.editorConfig,"error-messages":e.contentErrors},on:{blur:function(t){return e.$v.form_content.$touch()},input:function(t){return e.$v.form_content.$touch()}},model:{value:e.form_content,callback:function(t){e.form_content=t},expression:"form_content"}}),e._v(" "),e.$v.form_content.$error?[e.$v.form_content.required?e._e():n("div",{staticClass:"errorMessage red--text"},[e._v("\n                      Content is required.\n                    ")])]:e._e()],2)],1)],1)],1),e._v(" "),n("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),e._v(" "),n("v-card-title",[e._v("\n        News Table\n        "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{change:e.getDataFromApi},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",to:"/admin/news/create"}},[e._v("Create")])],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tabledata,options:e.options,"server-items-length":e.tabledata_total,loading:e.loading,"footer-props":{"items-per-page-options":[5,10,20,30,40,50]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)]},proxy:!0},{key:"header.id",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"header.name",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"item.publish",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.publish)+"\n        ")]}},{key:"item.created_at",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.created_at)+"\n        ")]}},{key:"item.id",fn:function(t){var r=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n            mdi-delete\n          ")])]}}])})],1)],1)],1)}),[],!1,null,"0f643127",null);t.default=component.exports;y()(component,{Template:n(220).default}),y()(component,{VBtn:$.a,VCard:C.a,VCardActions:I.a,VCardText:I.b,VCardTitle:I.c,VCol:D.a,VContainer:z.a,VDataTable:T.a,VDialog:O.a,VIcon:V.a,VImg:R.a,VRow:S.a,VSelect:j.a,VSheet:A.a,VSpacer:E.a,VTextField:F.a,VToolbar:P.a,VToolbarItems:U.a,VToolbarTitle:U.b})}}]);