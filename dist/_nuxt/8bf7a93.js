(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{466:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2065bca8",content,!0,{sourceMap:!1})},467:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},479:function(t,e,n){var content=n(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("736c1daf",content,!0,{sourceMap:!1})},565:function(t,e,n){"use strict";n(479)},566:function(t,e,n){var o=n(16)(!1);o.push([t.i,"ul.clean[data-v-c6417f0e]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-c6417f0e],.ck.ck-content.ck-editor__editable[data-v-c6417f0e],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-c6417f0e],.ck.ck-content.ck-editor__editable_inline[data-v-c6417f0e]{height:350px}",""]),t.exports=o},575:function(t,e,n){"use strict";var o=n(74),r=n(2),l=(n(23),n(66),n(46),n(31),n(47),n(91),n(10),n(7),n(9),n(12),n(8),n(13),n(466),n(436)),c=n(116),d=n(126),h=n(226),f=n(229),v=n(228),m=n(227),_=n(44),x=n(127),k=n(5),y=n(6),w=n(0);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(k.a)(c.a,d.a,h.a,f.a,v.a,m.a,_.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(l.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:O({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=O(O({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(w.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(w.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},612:function(t,e,n){"use strict";n.r(e);var o=n(15),r=n(11),l=(n(19),n(33),n(37),n(290),n(24),n(125),n(30),n(206),n(204),n(60),n(451)),c=n(452),d=n(65),h=n.n(d),f=(n(198),{middleware:"auth",mixins:[l.validationMixin],head:function(){return{title:"Post Datatable"}},data:function(){return{headers:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Name",value:"name"},{text:"Title",value:"title"},{text:"Slug",value:"slug"},{text:"Publish",value:"publish"},{text:"Date / Time",value:"created_at"},{text:"Action",value:"id",sortable:!1}],form_content:"",form_title:"",form_publish:"",dialog:!1,dialogDelete:!1,deletedialog:!1,editedIndex:-1,search:"",tabledata:[],tabledata_total:0,loading:!0,options:{},publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],form_image:"",image:"",image_preview:"",image_name:""}},validations:{form_content:{required:c.required},form_title:{required:c.required},form_publish:{required:c.required}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.timezone="Asia/Singapore",t.editorConfig={simpleUpload:{uploadUrl:"http://35.223.238.193:3001/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:t.timezone,"X-XSRF-TOKEN":t.$auth.$storage.getCookies()["XSRF-TOKEN"]}}};case 2:case"end":return e.stop()}}),e)})))()},components:{"ckeditor-nuxt":function(){return n.e(4).then(n.t.bind(null,593,7))}},computed:{titleErrors:function(){var t=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&t.push("Title is required."),t):t},contentErrors:function(){var t=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&t.push("Content is required."),t):t}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},mounted:function(){this.getDataFromApi()},methods:{handleFileUpload:function(t){var e=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(e);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(t){console.log(t)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",this.form_image="",!1},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},editItem:function(t){this.$axios.$get("/sanctum/csrf-cookie").then((function(t){})),this.form_title=this.tabledata[this.tabledata.indexOf(t)].title,this.form_image=this.tabledata[this.tabledata.indexOf(t)].image,this.form_content=this.tabledata[this.tabledata.indexOf(t)].content,this.form_publish=this.tabledata[this.tabledata.indexOf(t)].publishvalue,this.editedIndex=this.tabledata.indexOf(t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.tabledata.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},SaveEdited:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 2:h.a.start(),n=new FormData,o=t.tabledata[t.editedIndex].id,n.append("post_id",t.tabledata[t.editedIndex].id),n.append("title",t.form_title),n.append("content",t.form_content),n.append("publish",t.form_publish),n.append("image",t.form_image);try{t.$axios.$post("api/blog/update/".concat(o),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.tabledata[t.editedIndex].title=t.form_title,t.tabledata[t.editedIndex].content=t.form_content,t.tabledata[t.editedIndex].publish=1==t.form_publish?"Draft":"Publish",t.tabledata[t.editedIndex].publishvalue=t.form_publish,t.tabledata[t.editedIndex].image=e.image,t.dialog=!1,t.form_publish="",t.image_preview="",h.a.done()})).catch((function(e){t.form_publish="",h.a.done()})).finally((function(){}))}catch(t){}case 11:case"end":return e.stop()}}),e)})))()},deleteItemConfirm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 2:n=t.tabledata[t.editedIndex].id;try{t.$axios.$delete("api/blog/delete/".concat(n)).then((function(t){})).catch((function(t){})).finally((function(){}))}catch(t){}t.tabledata.splice(t.editedIndex,1),t.closeDelete();case 6:case"end":return e.stop()}}),e)})))()},getDataFromApi:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.options,r=n.sortBy,l=n.sortDesc,c=n.page,d=n.itemsPerPage,(h=new FormData).append("sortDesc",l),h.append("sortBy",r),h.append("page",c),h.append("itemsPerPage",d),h.append("search",t.search),e.next=10,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 10:t.$axios.$post("api/blog/datatable",h).then((function(e){var data=[],n=1;n=1==c?1:(c-1)*d+1;for(var r=0,l=Object.entries(e.data);r<l.length;r++){var h=Object(o.a)(l[r],2),f=(h[0],h[1]);data.push({no:n,name:f.name,id:f.id,slug:f.slug,title:f.title,content:f.content,publish:1==f.publish?"Draft":"Publish",publishvalue:f.publish,image:f.image,created_at:f.human_date}),n++}t.tabledata=data,t.tabledata_total=e.total,t.loading=!1})).catch((function(e){t.loading=!1})).finally((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e)})))()}}}),v=(n(565),n(53)),m=n(64),_=n.n(m),x=n(203),k=n(440),y=n(438),w=n(428),$=n(431),O=n(594),C=n(575),I=n(187),j=n(156),D=n(429),A=n(487),T=n(51),S=n(435),E=n(492),P=n(52),V=n(205),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":""}},[n("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":""}},[n("v-card",[n("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary","max-height":"50vh"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Settings")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:t.SaveEdited}},[t._v(" Save ")])],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title"},on:{blur:function(e){return t.$v.form_title.$touch()},input:function(e){return t.$v.form_title.$touch()}},model:{value:t.form_title,callback:function(e){t.form_title=e},expression:"form_title"}}),t._v(" "),t.$v.form_title.$error?[t.$v.form_title.required?t._e():n("div",{staticClass:"errorMessage red--text"},[t._v("\n                    Title is required.\n                  ")])]:t._e()],2)],1),t._v(" "),n("v-row",[n("v-col",[n("v-select",{attrs:{items:t.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(e){return t.$v.form_publish.$touch()}},model:{value:t.form_publish,callback:function(e){t.form_publish=e},expression:"form_publish"}}),t._v(" "),t.$v.form_publish.$error?[t.$v.form_publish.required?t._e():n("p",{staticClass:"errorMessage red--text"},[t._v("\n                    Select Publish is required.\n                  ")])]:t._e()],2)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{lg:"4"}},[n("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(e){return t.handleFileUpload()}}}),t._v(" "),n("v-card",[t.image_preview?n("v-img",{attrs:{src:t.image_preview}}):n("div",[t.form_image?n("v-img",{attrs:{src:t.form_image}}):t._e()],1)],1),t._v(" "),""!=this.image_preview||""!=this.form_image?n("label",{staticClass:"red--text",attrs:{onclick:"return false"},on:{click:function(e){return t.remove_image()}}},[t._v("Remove")]):t._e()],1),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-row",[n("v-col",{},[n("label",{staticClass:"black--text",attrs:{for:""}},[t._v("Content")]),t._v(" "),n("br"),t._v(" "),n("client-only",{attrs:{placeholder:"loading..."}},[n("ckeditor-nuxt",{staticStyle:{height:"300px"},attrs:{config:t.editorConfig,"error-messages":t.contentErrors},on:{blur:function(e){return t.$v.form_content.$touch()},input:function(e){return t.$v.form_content.$touch()}},model:{value:t.form_content,callback:function(e){t.form_content=e},expression:"form_content"}}),t._v(" "),t.$v.form_content.$error?[t.$v.form_content.required?t._e():n("div",{staticClass:"errorMessage red--text"},[t._v("\n                      Content is required.\n                    ")])]:t._e()],2)],1)],1)],1),t._v(" "),n("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),t._v(" "),n("v-card-title",[t._v("\n        Post Table\n        "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{change:t.getDataFromApi},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tabledata,options:t.options,"server-items-length":t.tabledata_total,loading:t.loading,"footer-props":{"items-per-page-options":[5,10,20,30,40,50]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),n("v-spacer")],1)],1)],1)]},proxy:!0},{key:"header.id",fn:function(e){var header=e.header;return[t._v("\n          "+t._s(header.text.toUpperCase())+"\n        ")]}},{key:"header.name",fn:function(e){var header=e.header;return[t._v("\n          "+t._s(header.text.toUpperCase())+"\n        ")]}},{key:"item.publish",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.publish)+"\n        ")]}},{key:"item.created_at",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.created_at)+"\n        ")]}},{key:"item.id",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(o)}}},[t._v("\n            mdi-pencil\n          ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(o)}}},[t._v("\n            mdi-delete\n          ")])]}}])})],1)],1)],1)}),[],!1,null,"c6417f0e",null);e.default=component.exports;_()(component,{Template:n(289).default}),_()(component,{VBtn:x.a,VCard:k.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:w.a,VContainer:$.a,VDataTable:O.a,VDialog:C.a,VIcon:I.a,VImg:j.a,VRow:D.a,VSelect:A.a,VSheet:T.a,VSpacer:S.a,VTextField:E.a,VToolbar:P.a,VToolbarItems:V.a,VToolbarTitle:V.b})}}]);