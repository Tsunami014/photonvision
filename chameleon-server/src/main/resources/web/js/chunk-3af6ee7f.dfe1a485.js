(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3af6ee7f"],{1447:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",{attrs:{dense:"",align:"center"}},[r("v-col",{attrs:{cols:2}},[r("span",[e._v(e._s(e.name))])]),r("v-col",{attrs:{cols:10}},[r("v-slider",{staticClass:"align-center",attrs:{value:e.localValue,dark:"",max:e.max,min:e.min,"hide-details":"",color:"#4baf62",step:e.step},on:{start:function(t){e.isClicked=!0},end:function(t){e.isClicked=!1},change:e.handleclick,input:e.handleInput},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"50px"},attrs:{dark:"",max:e.max,min:e.min,value:e.localValue,"hide-details":"","single-line":"",type:"number",step:e.step},on:{input:e.handleChange,focus:function(t){e.isFocused=!0},blur:function(t){e.isFocused=!1}}})]},proxy:!0}])})],1)],1)],1)},s=[],i={name:"Slider",props:["min","max","name","value","step"],data(){return{isFocused:!1,isClicked:!1}},methods:{handleChange(e){this.isFocused&&(this.localValue=parseFloat(e))},handleInput(e){!this.isFocused&&this.isClicked&&(this.localValue=e)},handleclick(e){this.isFocused||(this.localValue=e)}},computed:{localValue:{get(){return this.value},set(e){this.$emit("input",e)}}}},n=i,d=r("2877"),l=r("6544"),o=r.n(l),c=r("62ad"),u=r("0fd9"),m=r("ba0d"),v=r("8654"),p=Object(d["a"])(n,a,s,!1,null,"3505e445",null);t["a"]=p.exports;o()(p,{VCol:c["a"],VRow:u["a"],VSlider:m["a"],VTextField:v["a"]})},e5f2:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("CVselect",{attrs:{name:"Camera",list:e.cameraList},model:{value:e.currentCameraIndex,callback:function(t){e.currentCameraIndex=t},expression:"currentCameraIndex"}}),r("CVswitch",{attrs:{name:"Driver Mode"},on:{input:e.sendDriverMode},model:{value:e.driverState.isDriver,callback:function(t){e.$set(e.driverState,"isDriver",t)},expression:"driverState.isDriver"}}),r("CVslider",{attrs:{name:"Exposure",min:0,max:100},on:{input:e.sendDriverMode},model:{value:e.driverState.driverExposure,callback:function(t){e.$set(e.driverState,"driverExposure",t)},expression:"driverState.driverExposure"}}),r("CVslider",{attrs:{name:"Brightness",min:0,max:100},on:{input:e.sendDriverMode},model:{value:e.driverState.driverBrightness,callback:function(t){e.$set(e.driverState,"driverBrightness",t)},expression:"driverState.driverBrightness"}})],1)},s=[],i=r("8384"),n=r("b530"),d=r("1447"),l={name:"DriverMode",components:{CVselect:i["a"],CVswitch:n["a"],CVslider:d["a"]},methods:{sendDriverMode(){this.handleInput("driverMode",this.driverState),this.$emit("update")}},computed:{currentCameraIndex:{get(){return this.$store.state.currentCameraIndex},set(e){this.$store.commit("currentCameraIndex",e)}},cameraList:{get(){return this.$store.state.cameraList},set(e){this.$store.commit("cameraList",e)}},driverState:{get(){return this.$store.state.driverMode},set(e){this.$store.commit("driverMode",e)}}}},o=l,c=r("2877"),u=Object(c["a"])(o,a,s,!1,null,"a82c7778",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-3af6ee7f.dfe1a485.js.map