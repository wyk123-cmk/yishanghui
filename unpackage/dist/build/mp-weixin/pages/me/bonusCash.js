(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/bonusCash"],{"19ec":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:"0.00",userName:"",processAmount:0}},onLoad:function(){this.getReferralInfo()},methods:{getReferralInfo:function(){var t=this;t.$util.networkRequest({url:"/Referral/GetCashInfo",success:function(e){console.log("data:",e),t.userName=e.nickName,t.amount=Number(e.amount).toFixed(2),t.processAmount=e.processAmount.toFixed(2)}})},btnCash:function(){var e=this;if(t.showLoading({title:"请稍后...",mask:!0}),"0.00"==e.amount||0==e.amount)return e.$util.showToast("您目前提现金额为0.00元"),!1;e.$util.networkRequest({url:"/Referral/Cash",method:"POST",data:{value:e.amount},success:function(n){n&&t.redirectTo({url:"/pages/me/cashApply?nickName="+e.userName+"&amount="+e.amount})},error:function(e){2201==e.errCode&&t.showModal({title:"提示",content:"请先完善您的个人信息",showCancel:!1,success:function(){t.navigateTo({url:"/pages/logs/peopleInfo?type=1"})}})}})},h5_userInfo:function(){var e=this;e.$util.networkRequest({url:"/Account/GetUserWxInfo",success:function(n){n.UnAuthorized&&t.showModal({title:"提示",content:"请先关注“仪商汇”微信公众号",showCancel:!1,success:function(){e.$util.navigateBack(e)}})}})}}};e.default=n}).call(this,n("543d")["default"])},"9b18":function(t,e,n){"use strict";var o=n("fd0c"),u=n.n(o);u.a},bb6e:function(t,e,n){"use strict";n.r(e);var o=n("19ec"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=u.a},ca0f:function(t,e,n){"use strict";var o,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},d5ea:function(t,e,n){"use strict";n.r(e);var o=n("ca0f"),u=n("bb6e");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("9b18");var c,r=n("f0c5"),s=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,"1d3c1009",null,!1,o["a"],c);e["default"]=s.exports},df16:function(t,e,n){"use strict";(function(t){n("b397");o(n("66fd"));var e=o(n("d5ea"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},fd0c:function(t,e,n){}},[["df16","common/runtime","common/vendor"]]]);