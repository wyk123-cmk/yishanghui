(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-claimStatus"],{"2a00":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{status:0}},onLoad:function(t){this.status=t.status;var a=0==t.status?"资料审核中":"认领失败";uni.setNavigationBarTitle({title:a})}};a.default=i},"33e9":function(t,a,n){var i=n("9c52");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("6521e82c",i,!0,{sourceMap:!1,shadowMode:!1})},4295:function(t,a,n){"use strict";var i,e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"status"},[0==t.status?i("v-uni-view",[i("v-uni-image",{attrs:{src:n("9bd7")}}),i("v-uni-view",{staticClass:"title"},[t._v("资料审核中！")]),i("v-uni-text",[t._v("您的资料已提交上传审核，请耐心等待")]),i("v-uni-navigator",{attrs:{"open-type":"switchTab",url:"/pages/me/userInfo"}},[i("v-uni-button",[t._v("返回首页")])],1)],1):t._e(),1==t.status?i("v-uni-view",[i("v-uni-image",{attrs:{src:n("4caf")}}),i("v-uni-view",{staticClass:"title"},[t._v("企业认领失败！")]),i("v-uni-navigator",{attrs:{"open-type":"redirect",url:"/pages/me/claim"}},[i("v-uni-button",[t._v("重新提交")])],1)],1):t._e()],1)},s=[];n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return s})),n.d(a,"a",(function(){return i}))},"4caf":function(t,a,n){t.exports=n.p+"static/img/shsb.9417f83c.svg"},7716:function(t,a,n){"use strict";var i=n("33e9"),e=n.n(i);e.a},"9bd7":function(t,a,n){t.exports=n.p+"static/img/shz.cf4c7dad.svg"},"9c52":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".status[data-v-05caa286]{text-align:center;padding-top:74px;color:#999}.status uni-image[data-v-05caa286]{width:116px;height:116px}.status .title[data-v-05caa286]{font-size:16px;font-weight:700;padding:20px 0}.status  uni-button[data-v-05caa286]{width:160px;height:44px;line-height:44px;border-radius:44px;color:#fff;background:#4285f4;margin-top:20px}",""]),t.exports=a},e4cf:function(t,a,n){"use strict";n.r(a);var i=n("2a00"),e=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},f1b4:function(t,a,n){"use strict";n.r(a);var i=n("4295"),e=n("e4cf");for(var s in e)"default"!==s&&function(t){n.d(a,t,(function(){return e[t]}))}(s);n("7716");var u,r=n("f0c5"),c=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,"05caa286",null,!1,i["a"],u);a["default"]=c.exports}}]);