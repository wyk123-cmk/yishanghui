(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-companyInvoice"],{4623:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"\n.tips[data-v-10cf43c7]{font-size:12px;color:#999;padding:4px 15px;display:block;line-height:16px}.list-call[data-v-10cf43c7]{background-color:#fff;display:box;display:-webkit-box;padding:10px 0;border-bottom:1px solid #eee;position:relative}.list-call .recharge uni-text[data-v-10cf43c7]{display:block;color:#999;font-size:12px;margin-top:3px}.list-call .money[data-v-10cf43c7]{position:absolute;top:18px;right:15px;color:#4285f4;font-size:18px;font-weight:700}.checkbox-radio[data-v-10cf43c7]{color:#999;padding:10px;line-height:14px;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.scroll-wrapper[data-v-10cf43c7]{position:absolute;top:40px;left:0;right:0;bottom:60px}.invoice-footer[data-v-10cf43c7]{position:fixed;bottom:0;left:0;right:0;background-color:#fff;height:60px;line-height:60px}.invoice-footer .checkbox-radio[data-v-10cf43c7]{color:#333;float:left;border:0;margin-top:8px;font-size:14px}.amount[data-v-10cf43c7]{float:right;padding-right:30px}.amount uni-text[data-v-10cf43c7]{color:#ff0004}.next-step[data-v-10cf43c7]{float:right;background-color:#4285f4;color:#fff;border-radius:0;padding:0 20px;line-height:60px}",""]),t.exports=i},7529:function(t,i,e){"use strict";e.r(i);var a=e("c560"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(i,t,(function(){return a[t]}))}(c);i["default"]=o.a},"7a82":function(t,i,e){t.exports=e.p+"static/img/none.6cc20ceb.svg"},9056:function(t,i,e){"use strict";var a=e("b561"),o=e.n(a);o.a},b561:function(t,i,e){var a=e("4623");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("36d5014d",a,!0,{sourceMap:!1,shadowMode:!1})},c53b:function(t,i,e){"use strict";e.r(i);var a=e("f197"),o=e("7529");for(var c in o)"default"!==c&&function(t){e.d(i,t,(function(){return o[t]}))}(c);e("9056");var n,l=e("f0c5"),s=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"10cf43c7",null,!1,a["a"],n);i["default"]=s.exports},c560:function(t,i,e){"use strict";e("99af"),e("4de4"),e("b680"),e("d3b7"),e("acd8"),e("ac1f"),e("25f0"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{page:1,limit:10,total:0,totalSum:0,invoiceData:[],checkData:[],isCheckAll:!1}},onShow:function(){this.page=1,this.invoiceData=[],this.checkData=[],this.total=0,this.totalSum=0,this.isCheckAll=!1,this.getInvoice()},methods:{nextStep:function(){if(0==this.checkData.length)return uni.showToast({title:"请选择需要开的发票订单",icon:"none"}),!1;this.$store.state.cmpInvoiceData={mastCode:this.checkData,totalSum:this.totalSum},uni.navigateTo({url:"/pages/me/cmpInvoiceSubmit"})},checkboxChange:function(t,i,e){this.invoiceData.filter((function(t){t.id==e&&(t.checked=void 0==t.checked)})),t.detail.value.length>0?(this.checkData.push(e),this.totalSum=this.moneyFormat(parseFloat(i)+parseFloat(this.totalSum))):(this.totalSum=this.moneyFormat(parseFloat(this.totalSum)-parseFloat(i)),this.checkData=this.checkData.filter((function(t){return t!=e}))),this.checkData.length==this.invoiceData.length?this.isCheckAll=!0:this.isCheckAll=!1},checkAllChange:function(t){var i=this;i.isCheckAll=!i.isCheckAll,i.totalSum=0,i.invoiceData.filter((function(t){i.isCheckAll?(i.$set(t,"checked",!0),i.totalSum=i.moneyFormat(parseFloat(t.amount)+parseFloat(i.totalSum)),i.checkData.push(t.id)):(i.$set(t,"checked",!1),i.checkData=[])}))},scrolltolower:function(){Math.ceil(this.total/this.limit)>=this.page&&this.getInvoice()},getInvoice:function(){var t=this;uni.showLoading({title:"加载中..."}),t.$util.networkRequest({url:"/CompanyInvoice/GetRechargeForInvoiceList",data:{page:t.page,limit:t.limit},success:function(i){var e=i.total;if(0==e||0==i.list.length)return!1;i.list.filter((function(i){null!=i.createTime&&""!=i.createTime&&(i.createTime=t.$util.formatDate.format(i.createTime,"MM-dd hh:mm")),i.amount=i.amount.toFixed(2)})),t.page++,t.total=e,t.invoiceData=t.invoiceData.concat(i.list)}})},moneyFormat:function(t){if(!this.$util.isNotEmpty(t))return"0.00";var i=Math.round(100*parseFloat(t))/100,e=i.toString().split(".");return 1==e.length?(i=i.toString()+".00",i):e.length>1?(e[1].length<2&&(i=i.toString()+"0"),i):void 0}}};i.default=a},f197:function(t,i,e){"use strict";var a,o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"page-bg"},[a("v-uni-navigator",{staticClass:"head-right",attrs:{url:"/pages/me/cmpHistoricalInvoice"}},[t._v("历史开票")]),0==t.total?a("v-uni-view",{staticClass:"none-data-list"},[a("v-uni-image",{attrs:{src:e("7a82")}}),t._v("暂无内容")],1):a("v-uni-view",[a("v-uni-text",{staticClass:"tips"},[t._v("温馨提示：申请开具增值税专用发票开票金额需满1000元，如开票金额不足可累计进行开票！")]),a("v-uni-scroll-view",{staticClass:"scroll-wrapper",attrs:{"scroll-y":"true"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.scrolltolower.apply(void 0,arguments)}}},t._l(t.invoiceData,(function(i,e){return a("v-uni-view",{key:e,staticClass:"list-call"},[a("v-uni-checkbox-group",{staticClass:"checkbox-radio",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange(e,i.amount,i.id)}}},[a("v-uni-checkbox",{attrs:{value:String(i.id),checked:i.checked}})],1),a("v-uni-view",{staticClass:"recharge"},[t._v("账户充值"),a("v-uni-text",{staticClass:"time"},[t._v(t._s(i.createTime))])],1),a("v-uni-text",{staticClass:"money"},[t._v("￥"+t._s(i.amount))])],1)})),1),a("v-uni-view",{staticClass:"invoice-footer"},[a("v-uni-checkbox-group",{staticClass:"checkbox-radio",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.checkAllChange.apply(void 0,arguments)}}},[a("v-uni-checkbox",{attrs:{checked:t.isCheckAll}}),a("v-uni-text",[t._v("全选")])],1),a("v-uni-button",{staticClass:"next-step",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nextStep()}}},[t._v("下一步")]),a("v-uni-view",{staticClass:"amount"},[t._v("合计："),a("v-uni-text",[t._v(t._s(0==t.totalSum?"--":t.totalSum))])],1)],1)],1)],1)},c=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return a}))}}]);