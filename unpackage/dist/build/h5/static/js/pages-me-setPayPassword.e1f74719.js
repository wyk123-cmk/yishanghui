(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-setPayPassword"],{3263:function(t,e,n){"use strict";n.r(e);var a=n("45b1"),i=n("3d4e");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7e42");var s,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"10e737ac",null,!1,a["a"],s);e["default"]=c.exports},"3d4e":function(t,e,n){"use strict";n.r(e);var a=n("909f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"45b1":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page-bg"},[n("v-uni-text",{staticClass:"tips"},[t._v("设置密码前需要验证您的身份信息")]),n("v-uni-form",{staticClass:"pay-form"},[n("v-uni-label",[n("v-uni-view",{staticClass:"code-btn"},[t.isGetCode?n("v-uni-text",[t._v(t._s(t.codeTime)+" s")]):n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v("获取验证码")])],1),n("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),n("v-uni-label",[n("v-uni-input",{attrs:{type:"password",placeholder:"请输入支付密码"},model:{value:t.userPass,callback:function(e){t.userPass=e},expression:"userPass"}})],1),n("v-uni-button",{staticClass:"btn-default-css",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnSubmit.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"7b67":function(t,e,n){var a=n("929f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b8322ce6",a,!0,{sourceMap:!1,shadowMode:!1})},"7e42":function(t,e,n){"use strict";var a=n("7b67"),i=n.n(a);i.a},"909f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{code:"",userPass:"",codeTime:60,isGetCode:!1}},methods:{sendCode:function(){var t=this;t.$util.networkRequest({url:"/Company/SendCode",method:"POST",success:function(e){if(e){t.isGetCode=!0;var n=setInterval((function(){t.codeTime--,t.codeTime<=0&&(t.isGetCode=!1,t.codeTime=60,clearInterval(n))}),1e3)}}})},btnSubmit:function(){var t=this;if(!this.$util.isNotEmpty(t.code))return t.$util.showToast("验证码不能为空"),!1;if(!this.$util.isNotEmpty(t.userPass))return t.$util.showToast("密码不能为空"),!1;var e={payPassWord:this.userPass,verificationCode:this.code};t.$util.networkRequest({url:"/Company/SetPassword",method:"POST",data:e,success:function(e){e&&uni.showModal({title:"提示",content:"支付密码设置成功!",showCancel:!1,success:function(){t.$util.navigateBack(t)}})}})}}};e.default=a},"929f":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".tips[data-v-10e737ac]{color:#999;font-size:12px;padding:10px 15px;display:block}.pay-form uni-label[data-v-10e737ac]{background-color:#fff;display:block;padding:12px 15px;line-height:22px}.pay-form uni-label + uni-label[data-v-10e737ac]{border-top:1px solid #f7f7f7}.pay-form uni-label uni-input[data-v-10e737ac]{width:70%}.pay-form .code-btn[data-v-10e737ac]{float:right;color:#666}",""]),t.exports=e}}]);