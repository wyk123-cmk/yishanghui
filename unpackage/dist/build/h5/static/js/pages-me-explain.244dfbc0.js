(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-explain"],{"4ac5":function(t,e,n){var i=n("6acd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7a2e22f3",i,!0,{sourceMap:!1,shadowMode:!1})},"6acd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".main[data-v-de5f07cc]{padding:20px 15px;border-top:1px solid #eee;line-height:24px}.title[data-v-de5f07cc]{padding-bottom:10px}",""]),t.exports=e},"99f9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{type:"1",html:"",imgUrl:""}},onLoad:function(t){var e="说明";switch(this.type=t.type,t.type){case"1":e="充值说明";break;case"2":this.getCashPrompt(),e="提现说明";break;case"3":this.getCouponRemark(),e="优惠券说明";break;case"4":e="奖励金说明",this.imgUrl="http://express.1718china.cn/upload/jlj/referralRule.png";break}uni.setNavigationBarTitle({title:e})},methods:{getCashPrompt:function(){var t=this;t.$util.networkRequest({url:"/Referral/GetCashPrompt",success:function(e){t.html=e}})},getCouponRemark:function(){var t=this;t.$util.networkRequest({url:"/Coupon/GetCouponRemark",success:function(e){t.html=e}})}}};e.default=i},b8d0:function(t,e,n){"use strict";n.r(e);var i=n("99f9"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},bd5e:function(t,e,n){"use strict";var i=n("4ac5"),a=n.n(i);a.a},ce4ea:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"main"},["1"==t.type?n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[t._v("充值说明:")]),n("v-uni-text",{staticStyle:{"font-size":"13px",color:"#666"}},[t._v("1、因在估价时重量可能不准确，寄大件还会产生包装费、送货费等，所以在寄件时余额需大于预估金额。\\n 2、充值规则如下：（元/单位）\\n [1-50)≥100；\\n [50-100)≥200；\\n [100-200)≥300；\\n [200-300)≥500；\\n [300-400)≥600；\\n [400-500)≥700；\\n [500-600)≥800；\\n [600-700)≥900；\\n [700-800)≥1100；\\n [800-900)≥1300；\\n [900-1000)≥1500；\\n [1000-∞]≥1.5倍向上取整百。\\n 3、余额可随时提现。")]),n("v-uni-view",{staticStyle:{color:"#333333","margin-top":"10px"}},[t._v("如有疑问，请添加客服微信（13811418661）。")])],1):t._e(),"2"==t.type?n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[t._v("提现时间说明：")]),n("v-uni-view",{domProps:{innerHTML:t._s(t.html)}})],1):t._e(),"3"==t.type?n("v-uni-view",[n("v-uni-view",{domProps:{innerHTML:t._s(t.html)}})],1):t._e(),"4"==t.type?n("v-uni-view",[n("v-uni-image",{staticStyle:{width:"100%"},attrs:{mode:"widthFix",src:t.imgUrl}})],1):t._e()],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},f684:function(t,e,n){"use strict";n.r(e);var i=n("ce4ea"),a=n("b8d0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("bd5e");var u,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"de5f07cc",null,!1,i["a"],u);e["default"]=s.exports}}]);