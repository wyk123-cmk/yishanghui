(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderDetail"],{"09a5":function(e,t,i){"use strict";i.r(t);var s=i("bd95"),o=i.n(s);for(var r in s)"default"!==r&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t["default"]=o.a},"5b89":function(e,t,i){"use strict";(function(e){i("b397");s(i("66fd"));var t=s(i("6bcd"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"6bcd":function(e,t,i){"use strict";i.r(t);var s=i("928a"),o=i("09a5");for(var r in o)"default"!==r&&function(e){i.d(t,e,(function(){return o[e]}))}(r);i("debb");var a,n=i("f0c5"),c=Object(n["a"])(o["default"],s["b"],s["c"],!1,null,"181f054a",null,!1,s["a"],a);t["default"]=c.exports},"7b7f":function(e,t,i){},"928a":function(e,t,i){"use strict";var s,o=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.detailData.priceDetail,(function(t,i){var s=t.amount.toFixed(2);return{$orig:e.__get_orig(t),g0:s}})));e._isMounted||(e.e0=function(t){e.isBarCode=!1}),e.$mp.data=Object.assign({},{$root:{l0:i}})},r=[];i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return s}))},bd95:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{barcodeImg:"",mastCode:"",type:"",page:1,limit:5,total:0,logisticsList:[],kfUrl:"",cancelUrl:"",detailData:[],fromCity:"",fromName:"",fromAddress:"",fromPhone:"",fromCompanyName:"",toCity:"",toName:"",toAddress:"",toPhone:"",toCompanyName:"",goodName:"",goodType:"",goodCount:"",weigth:"",Sweigth:"",marketExpressPrice:0,expressPrice:0,insuranceAmount:"",priceTitle:"实付款",samount:"",createDate:"",sendTime:"",imgArr:[],fileArr:[],signingPicList:[],isbackSignBill:!1,isPrint:!1,isPrintBtn:!1,printUrl:"",isBarCode:!1,canvasCode:""}},onLoad:function(e){this.showImage=getApp().globalData.isDiscountPopup,this.mastCode=e.mastCode,this.type=e.type,this.kfUrl="/pages/order/customerService?mastCode="+this.mastCode,this.cancelUrl="/pages/order/cancel?mastCode="+this.mastCode,this.page=1,this.logisticsList=[],this.getDetailInfo(),this.getlogistics(),this.$util.IsPC()&&(this.isPrintBtn=!0)},methods:{longSave:function(){var e=this,t=[];t.push(e.barcodeImg),e.$util.longSave(t)},scrolltolower:function(){Math.ceil(this.total/this.limit)>=this.page&&this.getlogistics()},getDetailInfo:function(){var t=this;e.showLoading({title:"加载中..."}),t.$util.networkRequest({url:"/Express/Get",data:{mastCode:this.mastCode},success:function(e){t.detailData=e,t.fromCity=e.expressFrom.areaInfo.city,t.fromName=e.expressFrom.name,t.fromAddress=e.expressFrom.areaInfo.province+e.expressFrom.areaInfo.city+e.expressFrom.areaInfo.area+e.expressFrom.address,t.fromPhone=e.expressFrom.phone,t.fromCompanyName=e.expressFrom.companyName,t.toCity=e.expressTo.areaInfo.city,t.toName=e.expressTo.name,t.toAddress=e.expressTo.areaInfo.province+e.expressTo.areaInfo.city+e.expressTo.areaInfo.area+e.expressTo.address,t.toPhone=e.expressTo.phone,t.toCompanyName=e.expressTo.companyName,t.goodName=e.estimateGoods.name,t.goodType=e.estimateGoods.category,t.goodCount=e.estimateGoods.count,t.weigth=e.estimateGoods.weight,t.Sweigth=e.goods.weight,t.marketExpressPrice=e.marketExpressPrice.toFixed(2),t.expressPrice=e.expressPrice.toFixed(2),t.insuranceAmount=e.insurancePrice.toFixed(2),t.samount=e.price.toFixed(2),t.createDate=t.$util.formatDate.format(e.createTime,"yyyy-MM-dd hh:mm:ss"),t.sendTime=t.$util.formatDate.format(e.sendTime,"yyyy-MM-dd hh:mm:ss"),t.isbackSignBill=1==e.isBackSignBill;var i=e.takeDeliveryFileList;t.imgArr=[],t.fileArr=[],i.forEach((function(e){var i=e.fileName.split(".")[1];"pdf"==i?t.fileArr.push(e):t.imgArr.push(e)}))}})},getlogistics:function(){var t=this;e.showLoading({title:"加载中..."}),t.$util.networkRequest({url:"/Express/GetExpressRoute",data:{mastCode:t.mastCode,page:t.page,limit:t.limit},success:function(e){var i=e.details.total;if(0==i||0==e.details.list.length)return!1;e.details.list.filter((function(e){null!=e.routeTime&&""!=e.routeTime&&(e.routeTime=t.$util.formatDate.format(e.routeTime,"MM-dd hh:mm"))})),t.page++,t.total=i,t.logisticsList=t.logisticsList.concat(e.details.list)}})},signingImage:function(){var t=this;e.showLoading({title:"请稍等..."}),t.$util.networkRequest({url:"/Express/GetPictureImgList",data:{mastCode:this.mastCode},success:function(i){if(null==i)return!1;t.signingPicList=i;for(var s=[],o=0;o<t.signingPicList.length;o++)s.push(t.signingPicList[o].filePath);e.previewImage({current:0,urls:s})}})},phoneCall:function(t){console.log("tel:",t),e.makePhoneCall({phoneNumber:t})},setClip:function(t){e.setClipboardData({data:t,success:function(){e.showToast({title:"内容已复制",icon:"success"})}})},codeBtn:function(e){var t=this;t.$util.networkRequest({url:"/Express/GetExpressBarCodeFile",data:{mastCode:e},success:function(e){console.log(e),t.barcodeImg=e,t.longSave()}})},printing:function(){var e=this;if(""!=e.printUrl)return e.isPrint=!0,e.loadces(),!1;e.$util.networkRequest({url:"/Express/GetPrintFile",method:"POST",data:{value:this.mastCode},success:function(t){if(console.log("res:",t),""==t)return e.$util.showToast("此订单暂时并不能打印"),!1;e.printUrl=t,e.isPrint=!0}})},loadces:function(){var e=this;setTimeout((function(){window.print(),e.isPrint=!1}),10)}}};t.default=i}).call(this,i("543d")["default"])},debb:function(e,t,i){"use strict";var s=i("7b7f"),o=i.n(s);o.a}},[["5b89","common/runtime","common/vendor"]]]);