(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/addressList"],{"4ebb":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{keyword:"",type:"",isInit:!0,isActive:0,limit:5,code:"",isAdd:!1,personalPage:1,personalTotal:0,personalList:[],companyPage:1,companyTotal:0,companyList:[],isCompanyData:!1,t:0,h:44}},created:function(){var e=this;t.getSystemInfo({success:function(s){var n=t.getMenuButtonBoundingClientRect?t.getMenuButtonBoundingClientRect():null,a=44;null!=n&&(a=n.bottom+n.top-2*s.statusBarHeight),e.t=s.statusBarHeight,e.h=a}})},onLoad:function(t){var e=this;void 0!=t.type&&(this.type=t.type),void 0!=t.code&&(this.code=t.code),e.$util.networkRequest({url:"/Company/IsRegister",success:function(t){t&&(e.isCompanyData=!0)}})},onShow:function(){if(this.showImage=getApp().globalData.isDiscountPopup,!this.isInit)return this.isInit=!0,!1;this.keyword="",this.search(),this.GetShareList()},onBackPress:function(t){t.from},methods:{bindTabNav:function(t){if(this.isActive==t)return!1;this.isActive=t},GetShareList:function(){var e=this;t.showLoading({title:"加载中..."}),e.$util.networkRequest({url:"/AddressBook/GetShareListByPage",data:{page:1,limit:2},success:function(t){var s=t.total;0==s||0==t.list.length?e.isAdd=!0:e.isAdd=!1}})},shareADD:function(){this.isAdd?t.navigateTo({url:"/pages/news/selectAddress"}):t.navigateTo({url:"/pages/news/shareAddress"})},changeInput:function(t){this.keyword=t.detail.value,this.search()},goback:function(){t.navigateBack({})},search:function(){this.personalPage=1,this.personalTotal=0,this.personalList=[],this.companyPage=1,this.companyTotal=0,this.companyList=[],this.personalAddressList(),this.companyAddressList()},personalScrolltolower:function(){Math.ceil(this.personalTotal/this.limit)>=this.personalPage&&this.personalAddressList()},personalAddressList:function(){var t=this;t.getList(t.personalPage,1,(function(e){t.personalPage++,t.personalTotal=e.total,t.personalList=t.personalList.concat(e.list)}))},companyScrolltolower:function(){Math.ceil(this.companyTotal/this.limit)>=this.companyPage&&this.companyAddressList()},companyAddressList:function(){var t=this;t.getList(t.companyPage,2,(function(e){t.companyPage++,t.companyTotal=e.total,t.companyList=t.companyList.concat(e.list)}))},setDefault:function(e){var s=e.detail.value[0],n=this;t.showLoading({title:"加载中..."}),n.$util.networkRequest({url:"/AddressBook/SetDefault",method:"POST",data:{value:s},success:function(t){n.keyword="",n.$store.state.expressDeliveryInfo["repAddress"].contactsCode==s&&(n.$store.state.expressDeliveryInfo["repAddress"]={}),n.search()}})},remove:function(e,s){var n=this,a="您确定要删除吗？";s&&(a="该地址已与企业成员共享，删除后成员将不可见？"),t.showModal({title:"提示",content:a,success:function(s){s.confirm&&n.$util.networkRequest({url:"/AddressBook/Remove",data:{value:e},method:"POST",success:function(s){t.showToast({title:"删除成功",duration:2e3,icon:"none"}),0==n.isActive&&(n.personalList=n.personalList.filter((function(t){return t.contactsCode!=e})),n.companyPage=1,n.companyTotal=0,n.companyList=[],n.companyAddressList())}})}})},getList:function(e,s,n){var a=this;t.showLoading({title:"加载中..."}),a.$util.networkRequest({url:"/AddressBook/GetListByPage",data:{page:e,limit:a.limit,bookType:s,keyword:a.keyword},success:function(t){var e=t.total;if(0==e||0==t.list.length)return!1;n&&n(t)}})},goEdit:function(e){e=void 0==e?"":e,t.navigateTo({url:"/pages/me/addressEdit?addresscode="+e+"&type="+this.type})},btnSetAddress:function(t){var e=this;if(""==this.type)return!1;var s=t.contactsCode,n={name:t.name,contactsCode:s,address:t.areaInfo.province+t.areaInfo.city+t.areaInfo.area+t.address,ad:t.address,areaCode:t.areaInfo.areaCode,phone:t.phone,yfaddress:t.areaInfo.province+t.areaInfo.city+t.areaInfo.area};if("send"==this.type){var a=this.$store.state.batchOrderInfo.list,o=!0;if(0!=a.length)a.forEach((function(t,n){t.repAddress.contactsCode==s&&(e.$util.showToast("寄件人不能和收件人一致"),o=!1)}));else if("{}"!=JSON.stringify(this.$store.state.expressDeliveryInfo["repAddress"])&&this.$store.state.expressDeliveryInfo["repAddress"].contactsCode==s)return this.$util.showToast("寄件人不能和收件人一致"),!1;if(!o)return!1;this.$store.state.expressDeliveryInfo["sendAddress"]=n}if("rep"==this.type){if("{}"!=JSON.stringify(this.$store.state.expressDeliveryInfo["sendAddress"])){if(this.$store.state.expressDeliveryInfo["sendAddress"].contactsCode==s)return this.$util.showToast("收件人不能和寄件人一致"),!1}else if(t.isDefault&&this.code==s)return this.$util.showToast("收件人不能和寄件人一致"),!1;this.$store.state.expressDeliveryInfo["repAddress"]=n}this.$util.navigateBack(this)},phoneCall:function(e){this.isInit=!1,t.makePhoneCall({phoneNumber:e})},setCopy:function(e){var s=e.name+" "+e.phone+" "+e.companyName+" "+e.areaInfo.province+e.areaInfo.city+e.areaInfo.area+e.address;t.setClipboardData({data:s,success:function(){t.showToast({title:"内容已复制",icon:"success"})}})}}};e.default=s}).call(this,s("543d")["default"])},"591b":function(t,e,s){"use strict";var n=s("b9db"),a=s.n(n);a.a},"75c9":function(t,e,s){"use strict";s.r(e);var n=s("4ebb"),a=s.n(n);for(var o in n)"default"!==o&&function(t){s.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"903a":function(t,e,s){"use strict";s.r(e);var n=s("9296"),a=s("75c9");for(var o in a)"default"!==o&&function(t){s.d(e,t,(function(){return a[t]}))}(o);s("591b");var i,r=s("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7f2cfe98",null,!1,n["a"],i);e["default"]=c.exports},9296:function(t,e,s){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return n}))},a49b:function(t,e,s){"use strict";(function(t){s("b397");n(s("66fd"));var e=n(s("903a"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("543d")["createPage"])},b9db:function(t,e,s){}},[["a49b","common/runtime","common/vendor"]]]);