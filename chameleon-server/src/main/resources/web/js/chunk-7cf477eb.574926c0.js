(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cf477eb"],{"13f2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CVnumberinput",{attrs:{name:"Team Number"},model:{value:t.settings.teamNumber,callback:function(e){t.$set(t.settings,"teamNumber",e)},expression:"settings.teamNumber"}}),a("CVradio",{attrs:{list:["DHCP","Static"]},model:{value:t.settings.connectionType,callback:function(e){t.$set(t.settings,"connectionType",e)},expression:"settings.connectionType"}}),a("v-divider",{attrs:{color:"white"}}),a("CVinput",{attrs:{name:"IP",disabled:t.isDisabled},model:{value:t.settings.ip,callback:function(e){t.$set(t.settings,"ip",e)},expression:"settings.ip"}}),a("CVinput",{attrs:{name:"NetMask",disabled:t.isDisabled},model:{value:t.settings.netmask,callback:function(e){t.$set(t.settings,"netmask",e)},expression:"settings.netmask"}}),a("CVinput",{attrs:{name:"Gateway",disabled:t.isDisabled},model:{value:t.settings.gateway,callback:function(e){t.$set(t.settings,"gateway",e)},expression:"settings.gateway"}}),a("v-divider",{attrs:{color:"white"}}),a("CVinput",{attrs:{name:"Hostname"},model:{value:t.settings.hostname,callback:function(e){t.$set(t.settings,"hostname",e)},expression:"settings.hostname"}}),a("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{small:"",color:"#4baf62"},on:{click:t.sendGeneralSettings}},[t._v("Save General Settings")])],1)},i=[],n=a("9696"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-radio-group",{attrs:{row:"",dark:"",mandatory:!0},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}},t._l(t.list,(function(t,e){return a("v-radio",{key:e,attrs:{color:"#4baf62",label:t,value:e}})})),1)],1)},l=[],r={name:"Radio",props:["value","list"],data(){return{}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},u=r,c=a("2877"),d=a("6544"),h=a.n(d),p=(a("2c64"),a("ba87")),m=a("9d26"),v=a("c37a"),g=a("a9ad"),f=a("4e82"),b=a("5311"),V=a("7560"),y=a("fe09"),C=a("80d2"),k=a("58df");const $=Object(k["a"])(g["a"],b["a"],Object(f["a"])("radioGroup"),V["a"]);var w=$.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$vuetify.icons.radioOff"},onIcon:{type:String,default:"$vuetify.icons.radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){return y["a"].options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return v["a"].options.computed.computedId.call(this)},hasLabel:v["a"].options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||`radio-${this.radioGroup._uid}`},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(t){return y["a"].options.methods.genInput.call(this,"radio",t)},genLabel(){return this.hasLabel?this.$createElement(p["a"],{on:{click:t=>{t.preventDefault(),this.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(C["o"])(this,"label")||this.label):null},genRadio(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput({name:this.computedName,value:this.value,...this.$attrs}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(m["a"],this.setTextColor(this.validationState,{}),this.computedIcon)])},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(t){const e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),S=(a("ec29"),a("3d86"),a("604c")),x=a("8547");const I=Object(k["a"])(x["a"],S["a"],v["a"]);var _=I.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:{default:null}},computed:{classes(){return{...v["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},v["a"].options.methods.genDefaultSlot.call(this))},genInputSlot(){const t=v["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel(){const t=v["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="div",t):null},onClick:S["a"].options.methods.onClick}}),D=Object(c["a"])(u,o,l,!1,null,"343af1f8",null),G=D.exports;h()(D,{VRadio:w,VRadioGroup:_});var A=a("759a"),B={name:"General",components:{CVnumberinput:n["a"],CVradio:G,CVinput:A["a"]},data(){return{}},methods:{sendGeneralSettings(){const t=this;this.axios.post("http://"+this.$address+"/api/settings/general",this.settings).then((function(e){200===e.status&&(t.$store.state.saveBar=!0)}))}},computed:{isDisabled(){return 0===this.settings.connectionType},settings:{get(){return this.$store.state.settings}}}},O=B,j=a("8336"),E=a("ce7e"),F=Object(c["a"])(O,s,i,!1,null,"732a43ca",null);e["default"]=F.exports;h()(F,{VBtn:j["a"],VDivider:E["a"]})},"2c64":function(t,e,a){},"3d86":function(t,e,a){},5311:function(t,e,a){"use strict";var s=a("5607"),i=a("2b0e");e["a"]=i["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}})},"759a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{attrs:{cols:3}},[a("span",[t._v(t._s(t.name))])]),a("v-col",{attrs:{cols:9}},[a("v-text-field",{attrs:{dark:"",dense:"",disabled:t.disabled,"error-messages":t.errorMessage},on:{keydown:t.handleKeyboard},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)],1)],1)},i=[],n={name:"Input",props:["name","value","disabled","errorMessage"],data(){return{}},methods:{handleKeyboard(t){"Enter"==t.key&&this.$emit("Enter")}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},o=n,l=a("2877"),r=a("6544"),u=a.n(r),c=a("62ad"),d=a("0fd9"),h=a("8654"),p=Object(l["a"])(o,s,i,!1,null,"60193ff2",null);e["a"]=p.exports;u()(p,{VCol:c["a"],VRow:d["a"],VTextField:h["a"]})},"8ce9":function(t,e,a){},9696:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{attrs:{cols:2}},[a("span",[t._v(t._s(t.name))])]),a("v-col",[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"70px"},attrs:{dark:"","hide-details":"","single-line":"",type:"number"},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)],1)],1)},i=[],n={name:"NumberInput",props:["name","value"],data(){return{}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",parseFloat(t))}}}},o=n,l=a("2877"),r=a("6544"),u=a.n(r),c=a("62ad"),d=a("0fd9"),h=a("8654"),p=Object(l["a"])(o,s,i,!1,null,"efc987b0",null);e["a"]=p.exports;u()(p,{VCol:c["a"],VRow:d["a"],VTextField:h["a"]})},ce7e:function(t,e,a){"use strict";a("8ce9");var s=a("7560");e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";var s=a("c37a"),i=a("5311"),n=a("8547"),o=a("58df");e["a"]=Object(o["a"])(s["a"],i["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-7cf477eb.574926c0.js.map