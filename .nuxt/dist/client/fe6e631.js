(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{624:function(e,t,r){var content=r(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("4b3407af",content,!0,{sourceMap:!1})},779:function(e,t,r){"use strict";r(624)},780:function(e,t,r){var o=r(11)(!1);o.push([e.i,"ul.clean[data-v-b57eda6a]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-b57eda6a],.ck.ck-content.ck-editor__editable[data-v-b57eda6a],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-b57eda6a],.ck.ck-content.ck-editor__editable_inline[data-v-b57eda6a]{height:350px}",""]),e.exports=o},884:function(e,t,r){"use strict";r.r(t);var o=r(16),n=(r(21),r(51),r(2)),l=r(184),c=r(127);n.default.use(l.Vuelidate);var d={head:function(){return{title:"Create News"}},middleware:"auth",mixins:[l.validationMixin],data:function(){return{form_message:"",form_author:"",form_publish:"",token:null,publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}]}},validations:{form_message:{required:c.required},form_author:{required:c.required},form_publish:{required:c.required}},components:{},created:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},methods:{onSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.form_author&&e.form_message&&e.form_publish)){t.next=11;break}return t.next=3,e.$axios.$get("/sanctum/csrf-cookie");case 3:e.$toast.success("Sending"),(r=new FormData).append("publish",e.form_publish),r.append("message",e.form_message),r.append("author",e.form_author),e.$axios.post("/api/quotes/create",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$toast.success("Done.")})).catch((function(e){})).finally((function(){})),t.next=12;break;case 11:e.$toast.error("Validation failed.");case 12:case"end":return t.stop()}}),t)})))()}}},f=(r(779),r(35)),m=r(33),v=r.n(m),_=r(507),h=r(515),$=r(524),x=r(516),k=r(57),w=r(66),C=r(91),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[r("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[r("form",{staticClass:"white pa-5",attrs:{action:""}},[r("v-row",[r("v-col",[r("v-btn",{attrs:{color:"primary",depressed:"",to:"/dashboard"}},[e._v(" BACK ")])],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Quote"},on:{blur:function(t){return e.$v.form_message.$touch()},input:function(t){return e.$v.form_message.$touch()}},model:{value:e.form_message,callback:function(t){e.form_message=t},expression:"form_message"}}),e._v(" "),e.$v.form_message.$error?[e.$v.form_message.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n              Quote is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Author"},on:{blur:function(t){return e.$v.form_author.$touch()},input:function(t){return e.$v.form_author.$touch()}},model:{value:e.form_author,callback:function(t){e.form_author=t},expression:"form_author"}}),e._v(" "),e.$v.form_author.$error?[e.$v.form_author.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n              Title is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(t){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(t){e.form_publish=t},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():r("p",{staticClass:"errorMessage red--text"},[e._v("\n              Select Publish is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-btn",{staticClass:"ml-0",attrs:{color:"success"},on:{click:function(t){return e.onSubmit()}}},[r("label",{staticClass:"white-font"},[e._v("Submit")])])],1)],1)],1)])],1)}),[],!1,null,"b57eda6a",null);t.default=component.exports;v()(component,{Template:r(183).default}),v()(component,{VBtn:_.a,VCol:h.a,VContainer:$.a,VRow:x.a,VSelect:k.a,VSheet:w.a,VTextField:C.a})}}]);