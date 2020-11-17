(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-invoiceSubmit"],{1193:function(i,t,e){"use strict";var a=e("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(e("1238"));var n={data:function(){return{totalSum:0,companyData:[],isShowCompany:!1,city:"",address:"",isNotice:!1,isInvoice:!1,isTextarea:!0,invoiceData:{mastCodeList:[],invoiceType:"Company",invoiceName:"",invoiceNumber:"",billType:"PInvoince",invoiceRemark:"",name:"",phone:"",mail:"",address:""}}},created:function(){var i=this.$store.state.invoiceInfo,t=this;void 0!=i&&(t.totalSum=i.totalSum,t.invoiceData.mastCodeList=i.mastCode),t.$util.networkRequest({url:"/Account/Get",success:function(i){t.invoiceData.name=i.userName,t.invoiceData.phone=i.userPhone}})},methods:{confirm:function(){var i=this,t=i.invoiceData;if("Company"==t.invoiceType){if(!this.$util.isNotEmpty(t.invoiceName))return i.$util.showToast("请填写发票抬头"),!1;if(!this.$util.isNotEmpty(t.invoiceNumber))return i.$util.showToast("企业开票请填写纳税人识别号"),!1}if("Person"==t.invoiceType){if(!this.$util.isNotEmpty(t.invoiceName))return i.$util.showToast("请填写开票人姓名"),!1;if(!this.$util.isNotEmpty(t.invoiceNumber))return i.$util.showToast("请填写开票人手机号"),!1}return this.$util.isNotEmpty(t.name)?this.$util.isNotEmpty(t.phone)?this.$util.isNotEmpty(t.mail)?this.$util.isNotEmpty(i.city)?this.$util.isNotEmpty(i.address)?(t.address=i.city+i.address,i.isInvoice=!0,void(i.isTextarea=!1)):(i.$util.showToast("请填写收票详细地址"),!1):(i.$util.showToast("请选择收票地址"),!1):(i.$util.showToast("请填写收票人邮箱"),!1):(i.$util.showToast("请填写收票人手机号"),!1):(i.$util.showToast("请填写收票人姓名"),!1)},twoConfirm:function(){var i=this;uni.showLoading({mask:!0,title:"加载中..."}),i.$util.networkRequest({url:"/Invoice/Post",method:"POST",data:i.invoiceData,success:function(t){i.isInvoice=!1,uni.redirectTo({url:"/pages/me/historicalInvoice"})}})},btnCompanyName:function(i){this.isShowCompany=!1,this.invoiceData.invoiceName=i.companyName,this.invoiceData.invoiceNumber=i.creditCode,this.companyData=[]},getCompanyName:function(i){var t=this,e=i.detail.value;if(this.invoiceData.invoiceName=e,""==e)return t.isShowCompany=!1,t.companyData=[],!1;t.$util.networkRequest({url:"/Account/GetCompanyName",data:{keyWord:e},success:function(i){0==i.length?t.isShowCompany=!1:t.isShowCompany=!0,t.companyData=i}})},radioChange:function(i){console.log(i.detail.value),this.invoiceData.invoiceType=i.detail.value,this.invoiceData.invoiceName="",this.invoiceData.invoiceNumber=""},cityPickerChange:function(i){this.city=i.detail.value[0]+"-"+i.detail.value[1]+"-"+i.detail.value[2]}}};t.default=n},"524d":function(i,t,e){"use strict";e.r(t);var a=e("1193"),n=e.n(a);for(var o in a)"default"!==o&&function(i){e.d(t,i,(function(){return a[i]}))}(o);t["default"]=n.a},"953c":function(i,t,e){"use strict";var a=e("efd0"),n=e.n(a);n.a},bc58:function(i,t,e){"use strict";var a={addressPicker:e("1238").default},n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticStyle:{"background-color":"#F7F7F7"}},[e("v-uni-text",{staticClass:"tips"},[i._v("根据相关规定，仪商汇快运暂时只提供电子发票，请谅解")]),e("v-uni-text",{staticClass:"head-right",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isNotice=!0,i.isTextarea=!1}}},[i._v("发票须知")]),e("v-uni-view",{staticClass:"form"},[e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("发票类型")]),e("v-uni-radio-group",{staticClass:"radio",on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.radioChange.apply(void 0,arguments)}}},[e("v-uni-radio",{attrs:{color:"#4285f4",value:"Company",checked:"true"}}),e("v-uni-text",[i._v("单位")]),e("v-uni-radio",{attrs:{color:"#4285f4",value:"Person"}}),e("v-uni-text",[i._v("个人")])],1)],1),"Company"==i.invoiceData.invoiceType?e("v-uni-view",[e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("发票抬头")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请填写发票抬头"},on:{input:function(t){arguments[0]=t=i.$handleEvent(t),i.getCompanyName.apply(void 0,arguments)}},model:{value:i.invoiceData.invoiceName,callback:function(t){i.$set(i.invoiceData,"invoiceName",t)},expression:"invoiceData.invoiceName"}}),i.isShowCompany?e("v-uni-view",{staticClass:"company-list"},i._l(i.companyData,(function(t,a){return e("v-uni-text",{key:a,on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.btnCompanyName(t)}}},[i._v(i._s(t.companyName))])})),1):i._e()],1),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("纳税人识别号")]),e("v-uni-input",{attrs:{type:"text",placeholder:"企业开票请填写纳税人识别号"},model:{value:i.invoiceData.invoiceNumber,callback:function(t){i.$set(i.invoiceData,"invoiceNumber",t)},expression:"invoiceData.invoiceNumber"}})],1)],1):i._e(),"Person"==i.invoiceData.invoiceType?e("v-uni-view",[e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("姓名")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请填写开票人姓名"},model:{value:i.invoiceData.invoiceName,callback:function(t){i.$set(i.invoiceData,"invoiceName",t)},expression:"invoiceData.invoiceName"}})],1),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("手机号")]),e("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请填写开票人手机号"},model:{value:i.invoiceData.invoiceNumber,callback:function(t){i.$set(i.invoiceData,"invoiceNumber",t)},expression:"invoiceData.invoiceNumber"}})],1)],1):i._e(),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("发票项目")]),e("v-uni-input",{attrs:{type:"text",value:"国内货物运输代理服务",disabled:"true"}})],1),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("开票金额")]),e("v-uni-input",{attrs:{type:"text",value:"￥"+i.totalSum+"元",disabled:"true"}})],1),e("v-uni-view",{staticClass:"label-list"},[i.isTextarea?e("v-uni-textarea",{attrs:{maxlength:"-1",placeholder:"备注","cursor-spacing":"70","show-confirm-bar":!1},model:{value:i.invoiceData.invoiceRemark,callback:function(t){i.$set(i.invoiceData,"invoiceRemark",t)},expression:"invoiceData.invoiceRemark"}}):e("v-uni-text",{staticClass:"textarea-text"},[i._v(i._s(""==i.invoiceData.invoiceRemark?"备注":i.invoiceData.invoiceRemark))])],1)],1),e("v-uni-view",{staticClass:"form"},[e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("收票人姓名")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请填写收票人姓名"},model:{value:i.invoiceData.name,callback:function(t){i.$set(i.invoiceData,"name",t)},expression:"invoiceData.name"}})],1),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("收票人手机")]),e("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请填写收票人手机"},model:{value:i.invoiceData.phone,callback:function(t){i.$set(i.invoiceData,"phone",t)},expression:"invoiceData.phone"}})],1),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("收票人邮箱")]),e("v-uni-input",{attrs:{type:"text",placeholder:"用来接收电子发票"},model:{value:i.invoiceData.mail,callback:function(t){i.$set(i.invoiceData,"mail",t)},expression:"invoiceData.mail"}})],1),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("收票地址")]),e("address-picker",{staticClass:"address",attrs:{disabled:!1},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.cityPickerChange.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"txt",class:[""==i.city?"no-checked":""]},[i._v(i._s(""==i.city?"请选择":i.city))])],1)],1),e("v-uni-view",{staticClass:"label-list"},[e("v-uni-text",{staticClass:"name"},[i._v("详细地址")]),e("v-uni-input",{attrs:{type:"text",placeholder:"详细地址"},model:{value:i.address,callback:function(t){i.address=t},expression:"address"}})],1)],1),e("v-uni-button",{staticClass:"btn-default-css",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.confirm.apply(void 0,arguments)}}},[i._v("确认开票")]),i.isNotice?e("v-uni-view",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isNotice=!1,i.isTextarea=!0}}},[e("v-uni-view",{staticClass:"v-model"}),e("v-uni-view",{staticClass:"notice-popup"},[e("v-uni-text",{staticClass:"title"},[i._v("发票须知")]),e("v-uni-text",[i._v("1、个人寄件，仪商汇快运暂时只提供增值税电子普通发票，请谅解")]),e("v-uni-text",[i._v("2、请确定发票信息填写无误，点击“申请发票”，开票后不支持修改")]),e("v-uni-text",[i._v("3、发票将在3-5个工作日内开好，电子普通发票以短信或邮件的形式发送至申请时填写的收票人手机或者邮箱上")])],1)],1):i._e(),i.isInvoice?e("v-uni-view",[e("v-uni-view",{staticClass:"v-model"}),e("v-uni-view",{staticClass:"invoice-popup"},[e("v-uni-text",{staticClass:"title"},[i._v("发票信息确认")]),e("v-uni-view",{staticClass:"info-list"},[e("v-uni-text",[i._v("发票类型：")]),i._v(i._s("Company"==i.invoiceData.invoiceType?"单位":"个人"))],1),"Company"==i.invoiceData.invoiceType?e("v-uni-view",[e("v-uni-view",{staticClass:"info-list"},[e("v-uni-text",[i._v("发票抬头：")]),i._v(i._s(i.invoiceData.invoiceName))],1),e("v-uni-view",{staticClass:"info-list"},[e("v-uni-text",[i._v("纳税人识别号：")]),i._v(i._s(i.invoiceData.invoiceNumber))],1)],1):i._e(),"Person"==i.invoiceData.invoiceType?e("v-uni-view",[e("v-uni-view",{staticClass:"info-list"},[e("v-uni-text",[i._v("开票人姓名：")]),i._v(i._s(i.invoiceData.invoiceName))],1),e("v-uni-view",{staticClass:"info-list"},[e("v-uni-text",[i._v("开票人手机号：")]),i._v(i._s(i.invoiceData.invoiceNumber))],1)],1):i._e(),e("v-uni-view",{staticClass:"info-list"},[e("v-uni-text",[i._v("收票人邮箱：")]),i._v(i._s(i.invoiceData.mail))],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-text",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isInvoice=!1,i.isTextarea=!0}}},[i._v("取消")]),e("v-uni-text",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.twoConfirm.apply(void 0,arguments)}}},[i._v("确认")])],1)],1)],1):i._e()],1)},o=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},c95f:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,".page-bg[data-v-7ade0dce]{position:absolute;top:0;left:0;right:0;bottom:0;overflow-y:auto}.tips[data-v-7ade0dce]{color:#999;padding:10px 15px 0;font-size:12px;display:block}\n.form[data-v-7ade0dce]{background-color:#fff;overflow:hidden;margin-top:10px;position:relative}.form .label-list[data-v-7ade0dce]{border-top:1px solid #eee;margin:0 15px;padding:15px 0;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;margin-top:-1px;line-height:24px}.form .label-list .name[data-v-7ade0dce]{display:block;width:98px;line-height:20px;color:#999}.form .label-list .radio uni-text[data-v-7ade0dce]{float:left;margin-right:20px}.form .label-list uni-radio[data-v-7ade0dce]{-webkit-transform:scale(.6);transform:scale(.6);float:left}.form .label-list uni-input[data-v-7ade0dce],\r\n.form .label-list .address[data-v-7ade0dce]{line-height:20px;width:calc(100% - 98px);width:-webkit-calc(100% - 98px)}.form .label-list .address .txt[data-v-7ade0dce]{display:block}.form .label-list uni-textarea[data-v-7ade0dce],\r\n.form .label-list .textarea-text[data-v-7ade0dce]{display:block;width:calc(100% - 20px);width:-webkit-calc(100% - 20px);padding:8px 10px;background-color:#f7f7f7;resize:none;height:50px}.form .label-list .textarea-text[data-v-7ade0dce]{overflow:hidden}.form .label-list .no-checked[data-v-7ade0dce]{color:grey}.company-list[data-v-7ade0dce]{border:1px solid #f7f7f7;position:absolute;top:108px;left:15px;right:15px;z-index:2;background-color:#fff;height:220px;overflow-y:auto;z-index:99}.company-list uni-text[data-v-7ade0dce]{display:block;margin:10px 15px 10px}.invoice-popup[data-v-7ade0dce],\r\n.notice-popup[data-v-7ade0dce]{top:50%;position:fixed;background:#fff;left:20px;right:20px;font-size:15px;z-index:1000}.notice-popup[data-v-7ade0dce]{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);padding-bottom:20px}.notice-popup uni-text[data-v-7ade0dce]{font-size:13px;color:#666;padding-bottom:4px;text-align:justify}.notice-popup uni-text[data-v-7ade0dce],\r\n.invoice-popup .title[data-v-7ade0dce]{display:block;padding:5px 15px 0}.notice-popup .title[data-v-7ade0dce],\r\n.invoice-popup .title[data-v-7ade0dce]{padding:10px 0;margin-bottom:15px;text-align:center;color:#333;font-size:14px;border-bottom:1px solid #efefef}.invoice-popup[data-v-7ade0dce]{margin-top:-130px}.invoice-popup .info-list[data-v-7ade0dce]{margin:0 15px 10px}.invoice-popup .info-list uni-text[data-v-7ade0dce]{color:#999}.invoice-popup .btn[data-v-7ade0dce]{display:-webkit-flex;display:-webkit-box;display:flex;padding-top:5px}.invoice-popup .btn uni-text[data-v-7ade0dce]{display:block;width:50%;height:40px;line-height:40px;color:#333;border-top:1px solid #eee;text-align:center}.invoice-popup .btn uni-text[data-v-7ade0dce]:last-child{border-left:1px solid #eee}.label-list.checkbox[data-v-7ade0dce]{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.label-list.checkbox uni-text[data-v-7ade0dce]{color:red;padding-left:3px}",""]),i.exports=t},efd0:function(i,t,e){var a=e("c95f");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("2dcc669b",a,!0,{sourceMap:!1,shadowMode:!1})},fa84:function(i,t,e){"use strict";e.r(t);var a=e("bc58"),n=e("524d");for(var o in n)"default"!==o&&function(i){e.d(t,i,(function(){return n[i]}))}(o);e("953c");var s,c=e("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"7ade0dce",null,!1,a["a"],s);t["default"]=l.exports}}]);