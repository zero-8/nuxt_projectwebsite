(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{537:function(e,t,n){"use strict";t.a={styles:"\n:root {\n  --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);\n  --ck-color-mention-text: hsl(341, 100%, 30%);\n  --ck-highlight-marker-blue: hsl(201, 97%, 72%);\n  --ck-highlight-marker-green: hsl(120, 93%, 68%);\n  --ck-highlight-marker-pink: hsl(345, 96%, 73%);\n  --ck-highlight-marker-yellow: hsl(60, 97%, 73%);\n  --ck-highlight-pen-green: hsl(112, 100%, 27%);\n  --ck-highlight-pen-red: hsl(0, 85%, 49%);\n  --ck-image-style-spacing: 1.5em;\n  --ck-todo-list-checkmark-size: 16px;\n}\n\n.image-style-side {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n  max-width: 50%;\n}\n\n.image-style-align-left {\n  float: left;\n  margin-right: var(--ck-image-style-spacing);\n}\n\n.image-style-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-style-align-right {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n}\n\n.image {\n  display: table;\n  clear: both;\n  text-align: center;\n  margin: 1em auto;\n}\n\n.image img {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  min-width: 50px;\n}\n\n.image > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n  word-break: break-word;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 97%);\n  padding: .6em;\n  font-size: .75em;\n  outline-offset: -1px;\n}\n\n.image.image_resized {\n  max-width: 100%;\n  display: block;\n  box-sizing: border-box;\n}\n\n.image.image_resized img {\n  width: 100%;\n}\n\n.image.image_resized > figcaption {\n  display: block;\n}\n\n.marker-yellow {\n  background-color: var(--ck-highlight-marker-yellow);\n}\n\n.marker-green {\n  background-color: var(--ck-highlight-marker-green);\n}\n\n.marker-pink {\n  background-color: var(--ck-highlight-marker-pink);\n}\n\n.marker-blue {\n  background-color: var(--ck-highlight-marker-blue);\n}\n\n.pen-red {\n  color: var(--ck-highlight-pen-red);\n  background-color: transparent;\n}\n\n.pen-green {\n  color: var(--ck-highlight-pen-green);\n  background-color: transparent;\n}\n\n.text-tiny {\n  font-size: .7em;\n}\n\n.text-small {\n  font-size: .85em;\n}\n\n.text-big {\n  font-size: 1.4em;\n}\n\n.text-huge {\n  font-size: 1.8em;\n}\n\nblockquote {\n  overflow: hidden;\n  padding-right: 1.5em;\n  padding-left: 1.5em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  border-left: solid 5px hsl(0, 0%, 80%);\n}\n\n[dir=\"rtl\"] blockquote {\n  border-left: 0;\n  border-right: solid 5px hsl(0, 0%, 80%);\n}\n\ncode {\n  background-color: hsla(0, 0%, 78%, 0.3);\n  padding: .15em;\n  border-radius: 2px;\n}\n\n.table {\n  margin: 1em auto;\n  display: table;\n}\n\n.table table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px double hsl(0, 0%, 70%);\n}\n\n.table table td,\n.table table th {\n  min-width: 2em;\n  padding: .4em;\n  border: 1px solid hsl(0, 0%, 75%);\n}\n\n.table table th {\n  font-weight: bold;\n  background: hsla(0, 0%, 0%, 5%);\n}\n\n[dir=\"rtl\"] .table th {\n  text-align: right;\n}\n\n[dir=\"ltr\"] .table th {\n  text-align: left;\n}\n\n.page-break {\n  position: relative;\n  clear: both;\n  padding: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-break::after {\n  content: '';\n  position: absolute;\n  border-bottom: 2px dashed hsl(0, 0%, 77%);\n  width: 100%;\n}\n\n.page-break__label {\n  position: relative;\n  z-index: 1;\n  padding: .3em .6em;\n  display: block;\n  text-transform: uppercase;\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;\n  font-size: 0.75em;\n  font-weight: bold;\n  color: hsl(0, 0%, 20%);\n  background: hsl(0, 0%, 100%);\n  box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.todo-list {\n  list-style: none;\n}\n\n.todo-list li {\n  margin-bottom: 5px;\n}\n\n.todo-list li .todo-list {\n  margin-top: 5px;\n}\n\n.todo-list .todo-list__label > input {\n  -webkit-appearance: none;\n  display: inline-block;\n  position: relative;\n  width: var(--ck-todo-list-checkmark-size);\n  height: var(--ck-todo-list-checkmark-size);\n  vertical-align: middle;\n  border: 0;\n  left: -25px;\n  margin-right: -15px;\n  right: 0;\n  margin-left: 0;\n}\n\n.todo-list .todo-list__label > input::before {\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 1px solid hsl(0, 0%, 20%);\n  border-radius: 2px;\n  transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;\n}\n\n.todo-list .todo-list__label > input::after {\n  display: block;\n  position: absolute;\n  box-sizing: content-box;\n  pointer-events: none;\n  content: '';\n  left: calc( var(--ck-todo-list-checkmark-size) / 3 );\n  top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );\n  border-style: solid;\n  border-color: transparent;\n  border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;\n  transform: rotate(45deg);\n}\n\n.todo-list .todo-list__label > input[checked]::before {\n  background: hsl(126, 64%, 41%);\n  border-color: hsl(126, 64%, 41%);\n}\n\n.todo-list .todo-list__label > input[checked]::after {\n  border-color: hsl(0, 0%, 100%);\n}\n\n.todo-list .todo-list__label .todo-list__label__description {\n  vertical-align: middle;\n}\n\n.media {\n  clear: both;\n  margin: 1em 0;\n  display: block;\n  min-width: 15em;\n}\n\n.raw-html-embed {\n  margin: 1em auto;\n  min-width: 15em;\n}\n\nhr {\n  margin: 15px 0;\n  height: 4px;\n  background: hsl(0, 0%, 87%);\n  border: 0;\n}\n\npre {\n  padding: 1em;\n  color: hsl(0, 0%, 20.8%);\n  background: hsla(0, 0%, 78%, 0.3);\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  text-align: left;\n  direction: ltr;\n  tab-size: 4;\n  white-space: pre-wrap;\n  font-style: normal;\n  min-width: 200px;\n}\n\npre code {\n  background: unset;\n  padding: 0;\n  border-radius: 0;\n}\n\n.mention {\n  background: var(--ck-color-mention-background);\n  color: var(--ck-color-mention-text);\n}\n@media print {\n\n  .page-break {\n      padding: 0;\n  }\n\n  .page-break::after {\n      display: none;\n  }\n}",DELIVERY:"Delivery",CARRIER:"Carrier"}},601:function(e,t,n){"use strict";n(8),n(7),n(10),n(13),n(9),n(14);var r=n(24),o=n(1),l=(n(23),n(69),n(104),n(252),n(43),n(29),n(34),n(51),n(188),n(129),n(321),n(60)),c=n(519),d=n(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=c.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return l.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=c.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(e,t){var n=this,r=l.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(r.componentOptions.listeners=m(m({},r.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),r},onChipInput:function(e){l.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(e,t){this.autoSelectFirst&&c.a.options.methods.onFilteredItemsChanged.call(this,e,t)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.x.home,d.x.end].includes(t)||l.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===d.x.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===d.x.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();c.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(c.a.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){var t;l.a.options.methods.setValue.call(this,null!=(t=e)?t:this.internalSearch)},updateEditing:function(){var e=this.internalValue.slice();e[this.editingIndex]=this.internalSearch,this.setValue(e),this.editingIndex=-1},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),o=n>-1&&"object"===Object(r.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var l=this.internalValue.slice();l.splice(n,1),this.setValue(l)}if(t>-1)return this.internalSearch=null;this.selectItem(o),this.internalSearch=null}},onPaste:function(e){var t;if(this.multiple&&!this.searchIsDirty){var n=null==(t=e.clipboardData)?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),l.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,c.a.options.methods.clearableCallback.call(this)}}})},636:function(e,t,n){var content=n(755);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("56043e34",content,!0,{sourceMap:!1})},754:function(e,t,n){"use strict";n(636)},755:function(e,t,n){var r=n(11)(!1);r.push([e.i,"ul.clean[data-v-7576ca53]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-7576ca53],.ck.ck-content.ck-editor__editable[data-v-7576ca53],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-7576ca53],.ck.ck-content.ck-editor__editable_inline[data-v-7576ca53]{height:350px}",""]),e.exports=r},864:function(e,t,n){"use strict";n.r(t);var r=n(63),o=n(22),l=n(15),c=(n(23),n(40),n(42),n(250),n(25),n(29),n(320),n(129),n(32),n(187),n(52),n(543)),d=n.n(c),h=n(537),m=n(186),f=n(127),v=n(28),_=n.n(v),x=(n(150),{mixins:[m.validationMixin],head:function(){return{title:"Blog Datatable"}},data:function(){return{form_tags:[],items:[],headers:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Name",value:"name"},{text:"Title",value:"title"},{text:"Slug",value:"slug"},{text:"Publish",value:"publish"},{text:"Date / Time",value:"created_at"},{text:"Action",value:"id",sortable:!1}],form_content:"",form_title:"",form_publish:"",dialog:!1,dialogDelete:!1,deletedialog:!1,editedIndex:-1,search:"",tabledata:[],tabledata_total:0,loading:!0,options:{},publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],form_image:"",image:"",image_preview:"",image_name:""}},validations:{form_content:{required:f.required},form_title:{required:f.required},form_publish:{required:f.required}},created:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timezone="Asia/Singapore",e.editorConfig={simpleUpload:{uploadUrl:"https://backend.inhinyeru.com/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:e.timezone,identifier:e.image_id,"X-XSRF-TOKEN":e.$auth.$storage.getCookies()["XSRF-TOKEN"]}}};case 2:case"end":return t.stop()}}),t)})))()},components:{"ckeditor-nuxt":function(){return n.e(0).then(n.t.bind(null,849,7))}},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},fetch:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,c,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie");case 2:return t.next=4,e.$axios.$get("api/blog/tags/data");case 4:for(n=t.sent,l=0,c=Object.entries(n.data);l<c.length;l++)d=Object(o.a)(c[l],2),d[0],h=d[1],e.items=[].concat(Object(r.a)(e.items),[h.name]);case 6:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getDataFromApi()},methods:{handleFileUpload:function(e){var t=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(t);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(e){console.log(e)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",this.form_image="",!1},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.image_id=this.tabledata[this.tabledata.indexOf(e)].ckeditor_log,this.form_title=this.tabledata[this.tabledata.indexOf(e)].title,this.form_image=this.tabledata[this.tabledata.indexOf(e)].image,this.form_content=this.tabledata[this.tabledata.indexOf(e)].content,this.form_tags=this.tabledata[this.tabledata.indexOf(e)].tags,this.form_publish=this.tabledata[this.tabledata.indexOf(e)].publishvalue,this.editedIndex=this.tabledata.indexOf(e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tabledata.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},SaveEdited:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:_.a.start(),n=new FormData,r=e.tabledata[e.editedIndex].id,e.form_content=d.a.inlineContent(e.form_content,h.a.styles),n.append("tags",e.form_tags),n.append("post_id",e.tabledata[e.editedIndex].id),n.append("title",e.form_title),n.append("content",e.form_content),n.append("publish",e.form_publish),n.append("image",e.form_image);try{e.$axios.$post("api/blog/update/".concat(r),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.tabledata[e.editedIndex].tags=e.form_tags,e.tabledata[e.editedIndex].title=e.form_title,e.tabledata[e.editedIndex].content=e.form_content,e.tabledata[e.editedIndex].publish=1==e.form_publish?"Draft":"Publish",e.tabledata[e.editedIndex].publishvalue=e.form_publish,e.tabledata[e.editedIndex].image=t.image,e.dialog=!1,e.form_publish="",e.image_preview="",e.$fetch(),_.a.done()})).catch((function(t){e.form_publish="",_.a.done()})).finally((function(){}))}catch(e){}case 13:case"end":return t.stop()}}),t)})))()},deleteItemConfirm:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:n=e.tabledata[e.editedIndex].id;try{e.$axios.$delete("api/blog/delete/".concat(n)).then((function(e){})).catch((function(e){})).finally((function(){}))}catch(e){}e.tabledata.splice(e.editedIndex,1),e.closeDelete();case 6:case"end":return t.stop()}}),t)})))()},getDataFromApi:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,l,c,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.options,r=n.sortBy,l=n.sortDesc,c=n.page,d=n.itemsPerPage,(h=new FormData).append("sortDesc",l),h.append("sortBy",r),h.append("page",c),h.append("itemsPerPage",d),h.append("search",e.search),t.next=10,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 10:e.$axios.$post("api/blog/datatable",h).then((function(t){var data=[],n=1;n=1==c?1:(c-1)*d+1;for(var r=0,l=Object.entries(t.data);r<l.length;r++){var h=Object(o.a)(l[r],2),m=(h[0],h[1]);data.push({no:n,name:m.name,id:m.id,slug:m.slug,title:m.title,content:m.content,publish:1==m.publish?"Draft":"Publish",publishvalue:m.publish,image:m.image,created_at:m.human_date,ckeditor_log:m.ckeditor_log,tags:m.tags}),n++}e.tabledata=data,e.tabledata_total=t.total,e.loading=!1})).catch((function(t){e.loading=!1})).finally((function(){e.loading=!1}));case 11:case"end":return t.stop()}}),t)})))()}}}),k=(n(754),n(35)),y=n(31),w=n.n(y),I=n(236),C=n(518),$=n(233),S=n(80),D=n(241),O=n(526),V=n(601),T=n(534),j=n(851),z=n(533),P=n(175),R=n(183),E=n(527),A=n(60),F=n(66),M=n(532),U=n(90),B=n(67),L=n(248),component=Object(k.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":""}},[n("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":""}},[n("v-card",[n("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary","max-height":"50vh"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-toolbar-title",[e._v("Settings")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:e.SaveEdited}},[e._v(" Save ")])],1)],1),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title"},on:{blur:function(t){return e.$v.form_title.$touch()},input:function(t){return e.$v.form_title.$touch()}},model:{value:e.form_title,callback:function(t){e.form_title=t},expression:"form_title"}}),e._v(" "),e.$v.form_title.$error?[e.$v.form_title.required?e._e():n("div",{staticClass:"errorMessage red--text"},[e._v("\n                    Title is required.\n                  ")])]:e._e()],2)],1),e._v(" "),n("v-row",[n("v-col",[n("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(t){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(t){e.form_publish=t},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():n("p",{staticClass:"errorMessage red--text"},[e._v("\n                    Select Publish is required.\n                  ")])]:e._e()],2)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-combobox",{attrs:{items:e.items,label:"Tags",multiple:"",chips:""},scopedSlots:e._u([{key:"selection",fn:function(data){return[n("v-chip",e._b({key:JSON.stringify(data.item),attrs:{"input-value":data.selected,disabled:data.disabled},on:{"click:close":function(e){return data.parent.selectItem(data.item)}}},"v-chip",data.attrs,!1),[n("v-avatar",{staticClass:"accent white--text",attrs:{left:""},domProps:{textContent:e._s(data.item.slice(0,1).toUpperCase())}}),e._v("\n                      "+e._s(data.item)+"\n                    ")],1)]}}]),model:{value:e.form_tags,callback:function(t){e.form_tags=t},expression:"form_tags"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{lg:"4"}},[n("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),n("v-card",[e.image_preview?n("v-img",{attrs:{src:e.image_preview}}):n("div",[e.form_image?n("v-img",{attrs:{src:e.form_image}}):e._e()],1)],1),e._v(" "),""!=this.image_preview||""!=this.form_image?n("label",{staticClass:"red--text",attrs:{onclick:"return false"},on:{click:function(t){return e.remove_image()}}},[e._v("Remove")]):e._e()],1),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-row",[n("v-col",{},[n("label",{staticClass:"black--text",attrs:{for:""}},[e._v("Content")]),e._v(" "),n("br"),e._v(" "),n("client-only",{attrs:{placeholder:"loading..."}},[n("ckeditor-nuxt",{staticStyle:{height:"300px"},attrs:{config:e.editorConfig,"error-messages":e.contentErrors},on:{blur:function(t){return e.$v.form_content.$touch()},input:function(t){return e.$v.form_content.$touch()}},model:{value:e.form_content,callback:function(t){e.form_content=t},expression:"form_content"}}),e._v(" "),e.$v.form_content.$error?[e.$v.form_content.required?e._e():n("div",{staticClass:"errorMessage red--text"},[e._v("\n                      Content is required.\n                    ")])]:e._e()],2)],1)],1)],1),e._v(" "),n("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),e._v(" "),n("v-card-title",[e._v("\n        Blog Table\n        "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{change:e.getDataFromApi},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",to:"/blog/create"}},[e._v("Create")])],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tabledata,options:e.options,"server-items-length":e.tabledata_total,loading:e.loading,"footer-props":{"items-per-page-options":[5,10,20,30,40,50]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)]},proxy:!0},{key:"header.id",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"header.name",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"item.publish",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.publish)+"\n        ")]}},{key:"item.created_at",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.created_at)+"\n        ")]}},{key:"item.id",fn:function(t){var r=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n            mdi-delete\n          ")])]}}])})],1)],1)],1)}),[],!1,null,"7576ca53",null);t.default=component.exports;w()(component,{Template:n(126).default}),w()(component,{VAvatar:I.a,VBtn:C.a,VCard:$.a,VCardActions:S.a,VCardText:S.b,VCardTitle:S.c,VChip:D.a,VCol:O.a,VCombobox:V.a,VContainer:T.a,VDataTable:j.a,VDialog:z.a,VIcon:P.a,VImg:R.a,VRow:E.a,VSelect:A.a,VSheet:F.a,VSpacer:M.a,VTextField:U.a,VToolbar:B.a,VToolbarItems:L.a,VToolbarTitle:L.b})}}]);