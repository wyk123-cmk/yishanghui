(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-moreCoupon"],{"1d23":function(t,n,o){"use strict";o.r(n);var i=o("a1c6"),e=o("5a15");for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);o("e5c7");var s,c=o("f0c5"),u=Object(c["a"])(e["default"],i["b"],i["c"],!1,null,"3bf7e49c",null,!1,i["a"],s);n["default"]=u.exports},"39f6":function(t,n,o){var i=o("24fb");n=i(!1),n.push([t.i,'.nav-tab[data-v-3bf7e49c]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;line-height:30px}.nav-tab uni-text[data-v-3bf7e49c]{padding:0 5px;text-align:center}.nav-tab uni-text.active[data-v-3bf7e49c]{border-bottom:2px solid #ff1d21;color:#ff0004}.tab-con[data-v-3bf7e49c]{position:absolute;top:30px;left:0;right:0;bottom:52px;overflow-y:auto}.coupon-list[data-v-3bf7e49c]{background-image:-webkit-linear-gradient(0deg,#ff7742,#ff4544);background-image:-moz-linear-gradient(0deg,#ff7742 0,#ff4544 100%);background-image:-o-linear-gradient(0deg,#ff7742 0,#ff4544 100%);background-image:-webkit-linear-gradient(left,#ff7742,#ff4544);background-image:linear-gradient(90deg,#ff7742,#ff4544);border-radius:6px;height:90px;margin:12px 15px 0;display:box;display:-webkit-box;position:relative;overflow:hidden}.coupon-list[data-v-3bf7e49c]:last-child{margin-bottom:20px}.coupon-list.none[data-v-3bf7e49c]{background-color:#999;background-image:none}.coupon-list .amount[data-v-3bf7e49c]{color:#fff;padding:0 10px;text-align:center;padding-top:15px}.page-bg[data-v-3bf7e49c]{background:#fff}.coupon-list .amount>uni-view[data-v-3bf7e49c]{color:#fff}.coupon-list .amount>uni-view uni-text[data-v-3bf7e49c]{font-size:28px}.coupon-list .info[data-v-3bf7e49c]{color:#fff;padding-top:5px;width:calc(100% - 144px);width:-webkit-calc(100% - 144px)}.coupon-list .info uni-text[data-v-3bf7e49c]{display:block;line-height:16px;margin-bottom:5px;min-height:16px;font-size:13px}.coupon-list .info uni-text.order-num[data-v-3bf7e49c]{font-size:14px}.coupon-list .btn[data-v-3bf7e49c]{margin-top:34px;line-height:28px;padding:0 8px;border-radius:16px;display:block;color:#666;background-color:#fff;position:absolute;right:10px;z-index:2}.coupon-list.none .btn[data-v-3bf7e49c]{color:#999}.coupon-list .btn.share[data-v-3bf7e49c]{color:#ff4944}.coupon-list .iconfont.icon-yl[data-v-3bf7e49c]{font-size:50px;color:#fff;margin-top:47px;position:absolute;right:-8px}.coupon-list uni-image[data-v-3bf7e49c]{position:absolute;top:0;right:0;width:57px;height:57px}.my_conpou[data-v-3bf7e49c]{background-color:#fff;position:fixed;left:0;right:0;bottom:0;text-align:center;padding:15px 0;box-shadow:0 -1px 5px 1px #dcdcdc;-webkit-box-shadow:0 -1px 5px 1px #dcdcdc;z-index:2}.iconfont[data-v-3bf7e49c]{font-family:iconfont!important;font-style:normal;font-size:15px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.yjt[data-v-3bf7e49c]:after{content:">";color:#dbdbdb;font-size:16px;padding-left:6px;font-weight:400}',""]),t.exports=n},5104:function(t,n,o){"use strict";o("4160"),o("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{userType:"indi",showSend:!1,couponData:[],coupon:"我的",isShowQY:!1,isShareWX:!0}},onLoad:function(){var t=getApp();t.isToken()},onShow:function(){var t=this;if(!this.isShareWX)return this.isShareWX=!0,!1;t.getCoupon(),t.IsRegister()},onShareAppMessage:function(t){if("button"==t.from){this.isShareWX=!1;var n=this,o=n.couponData[t.target.id],i=o.id,e=o.amount;return{title:"我在领"+e+"元物流大额券点击助力一下呗",path:"/pages/me/shareImage?id="+i+"&type="+n.userType,desc:"助力成功您将获得一份尊享礼包",imageUrl:"../../static/images/coupon"+e+".png"}}},methods:{postCoupon:function(t,n){if("1"==n)return!1;var o=this;o.$util.networkRequest({url:"/Coupon/PostVoucherCoupon",method:"POST",data:{userType:o.userType,couponId:t},success:function(n){""!==n&&(o.$util.showToast("领取成功"),o.couponData.forEach((function(n){n.id==t&&(n.isget="_")})),o.getCoupon())}})},MyCoupn:function(t){if(console.log(t),"comp"==t&&0==this.isShowQY)return this.$util.showToast("尚未加入企业"),!1;uni.navigateTo({url:"/pages/me/coupon?type="+t})},IsRegister:function(){var t=this;t.$util.networkRequest({url:"/Company/IsRegister",method:"GET",data:{},success:function(n){t.isShowQY=!!n}})},sharePost:function(t,n){this.showSend=!0,this.$util.wxshare({title:"我在领"+n+"元物流大额券点击助力一下呗",desc:"助力成功您将获得一份尊享礼包",link:"http://"+window.location.host+"/pages/me/shareImage?id="+t+"&type="+this.userType,imgUrl:"http://"+window.location.host+"/static/images/coupon"+n+".png"})},btnNavTab:function(t){this.userType=t,this.getCoupon(),this.coupon="comp"==t?"企业":"我的"},getCoupon:function(){var t=this,n=t.userType;uni.showLoading({title:"加载中..."}),t.$util.networkRequest({url:"/Coupon/GetList",data:{userType:n},success:function(n){if(null==n)return!1;t.couponData=n.list},complete:function(n){n.data||(t.couponData=[])}})}}};n.default=i},"5a15":function(t,n,o){"use strict";o.r(n);var i=o("5104"),e=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(n,t,(function(){return i[t]}))}(a);n["default"]=e.a},"7a82":function(t,n,o){t.exports=o.p+"static/img/none.6cc20ceb.svg"},"857e":function(t,n,o){t.exports=o.p+"static/img/share.1cba287c.svg"},a1c6:function(t,n,o){"use strict";var i,e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"page-bg"},[i("v-uni-navigator",{staticClass:"head-right orange",attrs:{url:"/pages/me/explain?type=3"}},[t._v("说明")]),i("v-uni-view",{staticClass:"nav-tab"},[i("v-uni-text",{class:["indi"==t.userType?"active":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.btnNavTab("indi")}}},[t._v("个人")]),i("v-uni-text",{class:["comp"==t.userType?"active":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.btnNavTab("comp")}}},[t._v("企业")])],1),i("v-uni-view",{staticClass:"tab-con"},[0==t.couponData.length?i("v-uni-view",{staticClass:"none-data-list"},[i("v-uni-image",{attrs:{src:o("7a82")}}),t._v("暂无内容")],1):t._l(t.couponData,(function(n,o){return i("v-uni-view",{key:o,staticClass:"coupon-list",class:["1"==n.isget&&"2"==n.status?"none":""]},[i("v-uni-view",{staticClass:"amount"},[i("v-uni-view",[t._v("¥"),i("v-uni-text",[t._v(t._s(n.amount))])],1),t._v("优惠券")],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-text",{staticClass:"order-num"},[t._v(t._s("2"==n.status||"3"==n.status?n.orderNumDetail:""))]),i("v-uni-text",[t._v(t._s(n.fullReducAmount))]),i("v-uni-text",[t._v(t._s(n.validity))])],1),"2"==n.status&&n.isget.indexOf("_")<0||"0"==n.isget&&"3"==n.status||"0"==n.isget&&"1"==n.status?i("v-uni-text",{staticClass:"btn",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.postCoupon(n.id,n.isget)}}},[t._v("立即领取")]):t._e(),"3"==n.status&&"1"==n.isget?i("v-uni-text",{staticClass:"btn share",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.sharePost(n.id,n.amount)}}},[t._v("分享助力")]):t._e(),n.isget.indexOf("_")>-1?i("v-uni-text",{staticClass:"iconfont icon-yl"}):t._e()],1)}))],2),i("v-uni-view",{staticClass:"my_conpou"},[i("span",{staticClass:"iconfont yjt",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.MyCoupn(t.userType)}}},[t._v(t._s(t.coupon)+"优惠券")])]),t.showSend?i("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showSend=!1}}},[i("v-uni-view",{staticClass:"v-model"}),i("v-uni-view",{staticClass:"share-popup"},[i("v-uni-image",{attrs:{src:o("857e"),alt:"请点击右上角的分享按钮分享"}})],1)],1):t._e()],1)},a=[];o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return i}))},c7e9:function(t,n,o){var i=o("39f6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=o("4f06").default;e("c7a3ca82",i,!0,{sourceMap:!1,shadowMode:!1})},e5c7:function(t,n,o){"use strict";var i=o("c7e9"),e=o.n(i);e.a}}]);