(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/allowSee"],{2386:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{t:0,h:44,page:1,limit:10,total:0,isShow:!1,memList:[],serviceKey:""}},onLoad:function(t){this.serviceKey=t.serviceKey,this.showImage=getApp().globalData.isDiscountPopup},created:function(){var e=this;t.getSystemInfo({success:function(i){var n=t.getMenuButtonBoundingClientRect?t.getMenuButtonBoundingClientRect():null,o=44;null!=n&&(o=n.bottom+n.top-2*i.statusBarHeight),e.t=i.statusBarHeight,e.h=o}})},onShow:function(){this.page=1,this.memList=[],this.init()},methods:{init:function(){var t=this,e=this,i={page:this.page,limit:this.limit,serviceKey:this.serviceKey};e.$util.networkRequest({url:"/CmpyRole/GetCmpyUserRoleList",data:i,success:function(i){console.log(i);var n=i.total;e.page++,e.total=n,t.memList=e.memList.concat(i.list)}})},CloseDelete:function(){this.isShow=!1},scrolltolower:function(){Math.ceil(this.total/this.limit)>=this.page&&this.init()},goback:function(){t.navigateBack({})},DeleteMem:function(t){var e=this,i={serviceKey:this.serviceKey,serviceValue:t};e.$util.networkRequest({url:"/CmpyRole/DelRole",data:i,method:"POST",success:function(t){console.log(t),e.page=1,e.memList=[],e.init()}})},AddMem:function(){t.navigateTo({url:"/pages/me/selectMember?serviceKey="+this.serviceKey})},Delete:function(){this.isShow=!0}}};e.default=i}).call(this,i("543d")["default"])},"27cf":function(t,e,i){"use strict";i.r(e);var n=i("788f"),o=i("cc03");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("7648");var c,u=i("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"424622d8",null,!1,n["a"],c);e["default"]=a.exports},7648:function(t,e,i){"use strict";var n=i("8730"),o=i.n(n);o.a},"788f":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},8730:function(t,e,i){},ae59:function(t,e,i){"use strict";(function(t){i("b397");n(i("66fd"));var e=n(i("27cf"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},cc03:function(t,e,i){"use strict";i.r(e);var n=i("2386"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a}},[["ae59","common/runtime","common/vendor"]]]);