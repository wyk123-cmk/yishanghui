(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/cmpInvoiceSubmit","components/address-picker/address-picker"],{"0695":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("4795"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||u(t,e)||c(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function u(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var i=[],n=!0,a=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)if(i.push(s.value),e&&i.length===e)break}catch(r){a=!0,o=r}finally{try{n||null==c["return"]||c["return"]()}finally{if(a)throw o}}return i}}function l(t){if(Array.isArray(t))return t}function d(t,e,i,n,a,o,s){try{var c=t[o](s),r=c.value}catch(u){return void i(u)}c.done?e(r):Promise.resolve(r).then(n,a)}function f(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var o=t.apply(e,i);function s(t){d(o,n,a,s,c,"next",t)}function c(t){d(o,n,a,s,c,"throw",t)}s(void 0)}))}}var h={name:"addressPicker",props:{defaultValue:{type:[Array,String],default:""},disabled:{type:Boolean,default:!1},state:{type:String,default:""}},data:function(){return{pickerValue:[],isDisabled:!1,range:[],zones_tree:[]}},watch:{defaultValue:function(){this.defaultValue=this.defaultValue,this.value_format(),this.range_set()}},created:function(){var e=f(n.default.mark((function e(i){var a,s,c,r,u;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=this,!a.$store.state.addressInit){e.next=14;break}return a.$store.state.addressInit=!1,t.showLoading({title:"加载...",mask:!0}),e.next=6,t.request({url:a.apiUrl+"/Area/GetListEx",dataType:"json",method:"GET"});case 6:s=e.sent,c=o(s,2),c[0],r=c[1],a.$store.state.addressJson=r.data.data,a.setTree(),e.next=15;break;case 14:u=setInterval((function(){a.$store.state.addressJson.length>0&&(clearInterval(u),a.setTree())}),1e3);case 15:case"end":return e.stop()}}),e,this)})));function i(t){return e.apply(this,arguments)}return i}(),methods:{setTree:function(){this.zones_tree=this.$store.state.addressJson,this.isDisabled=this.disabled,this.value_format(),this.range_set(),t.hideLoading()},value_format:function(){var t=this.defaultValue;"string"==typeof t&&t.indexOf(",")>0&&(t=t.split(","));var e=0,i=0,n=0;"string"==typeof t?(this.zones_tree.forEach((function(a,o){a.list.forEach((function(a,s){a.list.forEach((function(a,c){a.code==t&&(e=o,i=s,n=c)}))}))})),this.pickerValue=[e,i,n]):"string"==typeof t[0]?(this.zones_tree.forEach((function(a,o){a.title==t[0]&&(e=o,a.list.forEach((function(e,a){e.title==t[1]&&(i=a,e.list.forEach((function(e,i){e.title==t[2]&&(n=i)})))})))})),this.pickerValue=[e,i,n]):this.pickerValue=t},range_set:function(){var t=this,e=[[],[],[]];if(2==this.state)e=[[],[]];this.zones_tree.forEach((function(i,n){e[0].push(i.title),n==t.pickerValue[0]&&i.list.forEach((function(i,n){e[1].push(i.title),2!=t.state&&n==t.pickerValue[1]&&i.list.forEach((function(t,i){e[2].push(t.title)}))}))})),this.range=e},region_change:function(t){var e=t.detail.value,i=[],n=[],a=this.zones_tree[e[0]];i.push(a.title),n.push(a.code);var o=a.list[e[1]];if(i.push(o.title),n.push(o.code),2!=this.state){var s=o.list[e[2]];i.push(s.title),n.push(s.code)}t.detail={code:n,value:i,data:s},this.$emit("change",t)},region_change_col:function(t){this.pickerValue[t.detail.column]=t.detail.value,this.range_set(),this.$emit("columnchange",t)},region_cancel:function(t){this.$emit("cancel",t)}}};e.default=h}).call(this,i("543d")["default"])},1238:function(t,e,i){"use strict";i.r(e);var n=i("5a32"),a=i("6e02");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=r.exports},"5a32":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"5ddf":function(t,e,i){"use strict";var n=i("a32e"),a=i.n(n);a.a},"6e02":function(t,e,i){"use strict";i.r(e);var n=i("0695"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"745e":function(t,e,i){"use strict";var n={addressPicker:function(){return Promise.resolve().then(i.bind(null,"1238"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.isNotice=!0,t.isTextarea=!1},t.e1=function(e){t.isNotice=!1,t.isTextarea=!0},t.e2=function(e){t.isInvoice=!1,t.isTextarea=!0})},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},a32e:function(t,e,i){},c5f5:function(t,e,i){"use strict";(function(t){i("b397");n(i("66fd"));var e=n(i("ccd7"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},ccd7:function(t,e,i){"use strict";i.r(e);var n=i("745e"),a=i("f911");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5ddf");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"f13a3de4",null,!1,n["a"],s);e["default"]=r.exports},eded:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(i("1238"));function n(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{totalSum:"",city:"",address:"",isNotice:!1,isInvoice:!1,dataCheck:!1,isFirstInvoice:!0,isTextarea:!0,invoiceData:{mastCodeList:[],invoiceType:"",invoiceName:"",invoiceNumber:"",invoiceProject:"",bankName:"",bankCode:"",cmpyAddress:"",mobile:"",invoiceRemark:"",name:"",invoicePhone:"",reviceEmail:""},isDisabled:!0}},created:function(){var t=this.$store.state.cmpInvoiceData,e=this;void 0!=t&&(e.totalSum=t.totalSum,e.invoiceData.mastCodeList=t.mastCode,e.totalSum<1e3&&(e.isDisabled=!1,e.invoiceData.invoiceType="DInvoince")),e.$util.networkRequest({url:"/CompanyInvoice/GetInvoiceCmpyInfo",method:"POST",data:JSON.stringify(e.invoiceData.mastCodeList),success:function(t){e.invoiceData.invoiceName=t.invoiceName,e.invoiceData.invoiceNumber=t.invoiceNumber,e.invoiceData.invoiceProject=t.invoiceProject,e.invoiceData.cmpyAddress=t.cmpyAddress,e.invoiceData.mobile=t.cmpyTel,e.invoiceData.bankName=t.bank,e.invoiceData.bankCode=t.bankAccount,e.invoiceData.name=t.name,e.invoiceData.invoicePhone=t.invoicePhone,e.isFirstInvoice=t.isFirstInvoice,e.getUserHistoryInfo()}})},methods:{confirm:function(){this.Valid()&&(this.isInvoice=!0,this.isTextarea=!1)},twoConfirm:function(){var e=this,i="",n="",a="";"ZInvoince"==e.invoiceData.invoiceType&&(i=e.invoiceData.name,n=e.invoiceData.invoicePhone,a=e.city+" "+e.address);var o={rechargeCodeList:e.invoiceData.mastCodeList,billType:e.invoiceData.invoiceType,invoiceName:e.invoiceData.invoiceName,invoiceNumber:e.invoiceData.invoiceNumber,invoiceRemark:e.invoiceData.invoiceRemark,bank:e.invoiceData.bankName,bankAccount:e.invoiceData.bankCode,cmpyAddress:e.invoiceData.cmpyAddress,cmpyTel:e.invoiceData.mobile,name:i,phone:n,email:e.invoiceData.reviceEmail,address:a};e.isInvoice=!1,t.showLoading({mask:!0,title:"开票中..."}),e.$util.networkRequest({url:"/CompanyInvoice/Post",method:"POST",data:o,success:function(e){if(null==e||!e)return!1;t.showModal({title:"提示",content:"开票申请成功，等待审核!",showCancel:!1,success:function(){t.redirectTo({url:"/pages/me/historicalInvoice"})}})}})},radioChange:function(t){this.invoiceData.invoiceType=t.detail.value},checkboxChange:function(){this.dataCheck=!this.dataCheck},cityPickerChange:function(t){this.city=t.detail.value[0]+"-"+t.detail.value[1]+"-"+t.detail.value[2]},getUserHistoryInfo:function(){var t=this;t.$util.networkRequest({url:"/Invoice/GetLastInvoiceInfo",success:function(e){if(-1!=e.address.indexOf("-")){var i=e.address.split("-"),n=i[2].split(" "),a="",o="";1==n.length?o=i[2]:(a="-"+n[0],o=n[1]),t.city=i[0]+"-"+i[1]+a,t.address=o}t.invoiceData.reviceEmail=e.invoiceEmail}})},Valid:function(){return this.$util.isNotEmpty(this.invoiceData.invoiceType)?this.$util.isNotEmpty(this.invoiceData.invoiceName)?this.$util.isNotEmpty(this.invoiceData.invoiceNumber)?this.$util.isNotEmpty(this.invoiceData.bankName)?this.$util.isNotEmpty(this.invoiceData.bankCode)?this.$util.isNotEmpty(this.invoiceData.cmpyAddress)?this.$util.isNotEmpty(this.invoiceData.mobile)?"ZInvoince"!=this.invoiceData.invoiceType||this.$util.isNotEmpty(this.invoiceData.name)?"ZInvoince"!=this.invoiceData.invoiceType||this.$util.isNotEmpty(this.invoiceData.invoicePhone)?this.$util.isNotEmpty(this.invoiceData.reviceEmail)?this.$util.isEmail(this.invoiceData.reviceEmail)?"ZInvoince"!=this.invoiceData.invoiceType||this.$util.isNotEmpty(this.city)?"ZInvoince"!=this.invoiceData.invoiceType||this.$util.isNotEmpty(this.address)?!(this.isFirstInvoice&&!this.dataCheck)||(this.$util.showToast("您是首次开票，请验证并确认开票信息无误"),!1):(this.$util.showToast("请填写收票人详细地址信息"),!1):(this.$util.showToast("请选择收票人地址信息"),!1):(this.$util.showToast("收票人邮箱格式错误"),!1):(this.$util.showToast("请填写收票人邮箱"),!1):(this.$util.showToast("请填写收票人手机"),!1):(this.$util.showToast("请填写收票人名称"),!1):(this.$util.showToast("请填写固定电话"),!1):(this.$util.showToast("请填写注册所在场地"),!1):(this.$util.showToast("请填写开户账号"),!1):(this.$util.showToast("请填写开户银行"),!1):(this.$util.showToast("请填写纳税人识别号"),!1):(this.$util.showToast("请填写发票抬头"),!1):(this.$util.showToast("请选择发票类型"),!1)}}};e.default=a}).call(this,i("543d")["default"])},f911:function(t,e,i){"use strict";i.r(e);var n=i("eded"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}},[["c5f5","common/runtime","common/vendor"]]]);