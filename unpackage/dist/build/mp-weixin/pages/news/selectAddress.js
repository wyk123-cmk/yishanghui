(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/selectAddress"],{"0813":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{t:0,h:44,companyPage:1,limit:10,keyword:"",num:0,total:0,checkData:[],isChoose:!1,companyList:[],serviceKey:""}},created:function(){},onShow:function(){this.showImage=getApp().globalData.isDiscountPopup,this.init()},methods:{init:function(){var t=this;t.getList(t.companyPage,1,(function(e){t.companyPage++,t.total=e.total,e.list.forEach((function(t){t["isCheck"]=!1})),t.companyList=t.companyList.concat(e.list)}))},getList:function(e,i,n){var a=this;t.showLoading({title:"加载中..."}),a.$util.networkRequest({url:"/AddressBook/GetListByPage",data:{page:e,limit:a.limit,bookType:i,keyword:a.keyword},success:function(t){var e=t.total;if(0==e||0==t.list.length)return!1;n&&n(t)}})},scrolltolower:function(){Math.ceil(this.total/this.limit)>=this.companyPage&&this.init()},inputSearch:function(t){this.keyword=t.detail.value,this.companyPage=1,this.companyList=[],this.init()},checkboxChange:function(t){var e=this.companyList[t];e.isCheck?(this.companyList[t].isCheck=!1,this.checkData=this.checkData.filter((function(t){return t!=e.id}))):(this.companyList[t].isCheck=!0,this.checkData.push(parseInt(e.id))),this.num=this.checkData.length},Enter:function(){var t=this,e=this.checkData;t.$util.networkRequest({url:"/AddressBook/batchShareAddress",data:{idList:e},method:"POST",success:function(e){e&&t.$util.navigateBack(t)}})}}};e.default=i}).call(this,i("543d")["default"])},"1bfe":function(t,e,i){"use strict";var n=i("ca58"),a=i.n(n);a.a},6529:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},c=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}))},a237:function(t,e,i){"use strict";i.r(e);var n=i("0813"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},ca58:function(t,e,i){},e0df:function(t,e,i){"use strict";(function(t){i("b397");n(i("66fd"));var e=n(i("e132"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},e132:function(t,e,i){"use strict";i.r(e);var n=i("6529"),a=i("a237");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("1bfe");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"714a2758",null,!1,n["a"],o);e["default"]=u.exports}},[["e0df","common/runtime","common/vendor"]]]);