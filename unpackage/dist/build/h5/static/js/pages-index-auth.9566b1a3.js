(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-auth"],{"4ff1":function(t,n,e){"use strict";e.r(n);var a=e("d0c0"),u=e("5d01");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);var c,o=e("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=r.exports},"5d01":function(t,n,e){"use strict";e.r(n);var a=e("7319"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},7319:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{accountCode:"",appKey:"",sign:"",timestamp:""}},onLoad:function(t){var n=this;uni.request({url:n.apiUrl+"/OpenService/GetAccountLoginFlag",method:"POST",header:{appKey:t.appKey,sign:t.sign,timestamp:t.timestamp,appId:n.appId},data:{accountCode:t.accountCode},success:function(t){200==t.data?(uni.setStorage({key:"token",data:data}),uni.switchTab({url:"/pages/index/index"})):uni.showModal({title:"提示",content:t.data.message,showCancel:!1,success:function(t){uni.navigateTo({url:"/pages/logs/logs"})}})},fail:function(t){}})}};n.default=a},d0c0:function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{"text-align":"center","margin-top":"20%"}},[t._v("正在授权登录跳转,请稍后...")])},i=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}))}}]);