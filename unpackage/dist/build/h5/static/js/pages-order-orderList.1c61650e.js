(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-orderList"],{"0264":function(t,e,i){"use strict";var s,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("page-imges",{attrs:{show:t.showImage}}),s("v-uni-view",{staticClass:"search"},[s("v-uni-view",{staticClass:"label-input"},[s("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名、电话、公司名称、单号"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),s("v-uni-text",{staticClass:"iconfont icon-chaxun",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goKeyword.apply(void 0,arguments)}}})],1),s("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnMore.apply(void 0,arguments)}}},[t._v("筛选")])],1),s("v-uni-view",{staticClass:"tab-nav"},[s("v-uni-view",{class:[1==t.tabIndex?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnNavTab(1)}}},[s("v-uni-text",[t._v("我的寄件("+t._s(t.sentTotal)+")")])],1),s("v-uni-view",{class:[2==t.tabIndex?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnNavTab(2)}}},[s("v-uni-text",[t._v("我的收件("+t._s(t.receiveTotal)+")")])],1)],1),1==t.tabIndex?s("v-uni-scroll-view",{staticClass:"tab-con",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.sentScroll.apply(void 0,arguments)}}},[0==t.sentList.length?s("v-uni-view",{staticClass:"none-data-list"},[s("v-uni-image",{attrs:{src:i("c101")}}),t._v("暂无内容")],1):t._l(t.sentList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"order-item-list"},[s("v-uni-view",{staticClass:"number",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setClip(e.expressCode)}}},[e.isCompany?s("v-uni-image",{staticClass:"qy_img",attrs:{src:i("47e8"),mode:"aspectFit"}}):t._e(),t._v("运单号："+t._s(e.expressCode)),s("v-uni-text",{staticClass:"iconfont icon-copy"})],1),s("v-uni-text",{staticClass:"detail",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(1,e.mastCode)}}},[t._v("详情")]),s("v-uni-view",{staticClass:"transport-o",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(2,e.mastCode)}}},[s("v-uni-view",{staticClass:"express"},[s("v-uni-text",{staticClass:"city"},[t._v(t._s(e.expressFrom.areaInfo.city))]),s("v-uni-text",[t._v(t._s(e.expressFrom.name))])],1),s("v-uni-view",{staticClass:"status"},[s("v-uni-image",{attrs:{mode:"widthFix",src:i("1bb8")}}),"9"==e.status?s("v-uni-text",{staticStyle:{color:"green"}},[t._v(t._s(e.statusText))]):"3"==e.status?s("v-uni-text",{staticStyle:{color:"#E47800"}},[t._v(t._s(e.statusText))]):"4"==e.status?s("v-uni-text",{staticStyle:{color:"#4285f4"}},[t._v(t._s(e.statusText))]):"-1"==e.status||"1"==e.status?s("v-uni-text",{staticStyle:{color:"#999999"}},[t._v(t._s(e.statusText))]):s("v-uni-text",[t._v(t._s(e.statusText))])],1),s("v-uni-view",{staticClass:"express"},[s("v-uni-text",{staticClass:"city"},[t._v(t._s(e.expressTo.areaInfo.city))]),s("v-uni-text",[t._v(t._s(e.expressTo.name))])],1)],1),"4"==e.status?s("v-uni-view",{staticClass:"finished-time"},[t._v("签收时间："+t._s(e.finishedTime))]):t._e(),"1"==e.status?s("v-uni-view",{staticClass:"info"},[2==e.payType?s("v-uni-view",[t._v("到付")]):s("v-uni-view",[t._v("￥"),s("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))])],1),s("v-uni-text",{staticClass:"btn del",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(3,e.mastCode)}}},[t._v("取消")])],1):t._e(),"2"==e.status&&1==e.payType?s("v-uni-view",{staticClass:"info"},[s("v-uni-view",[t._v("￥"),s("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))])],1),s("v-uni-text",{staticClass:"btn"},[t._v("去付款")])],1):t._e(),9==e.status?s("v-uni-view",{staticClass:"info"},[s("v-uni-text"),s("v-uni-text",{staticClass:"btn del",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeOrder(e.mastCode)}}},[t._v("删除")])],1):t._e()],1)}))],2):t._e(),2==t.tabIndex?s("v-uni-scroll-view",{staticClass:"tab-con",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.receiveScroll.apply(void 0,arguments)}}},[0==t.receiveList.length?s("v-uni-view",{staticClass:"none-data-list"},[s("v-uni-image",{attrs:{src:i("dcd5")}}),t._v("暂无内容")],1):t._l(t.receiveList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"order-item-list"},[s("v-uni-view",{staticClass:"number",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setClip(e.expressCode)}}},[t._v("运单号："+t._s(e.expressCode)),s("v-uni-text",{staticClass:"iconfont icon-copy"})],1),s("v-uni-text",{staticClass:"detail",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(1,e.mastCode)}}},[t._v("详情")]),s("v-uni-view",{staticClass:"transport-o",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(2,e.mastCode)}}},[s("v-uni-view",{staticClass:"express"},[s("v-uni-text",{staticClass:"city"},[t._v(t._s(e.expressFrom.areaInfo.city))]),s("v-uni-text",[t._v(t._s(e.expressFrom.name))])],1),s("v-uni-view",{staticClass:"status"},[s("v-uni-image",{attrs:{mode:"widthFix",src:i("1bb8")}}),"9"==e.status?s("v-uni-text",{staticStyle:{color:"green"}},[t._v(t._s(e.statusText))]):"3"==e.status?s("v-uni-text",{staticStyle:{color:"#E47800"}},[t._v(t._s(e.statusText))]):"4"==e.status?s("v-uni-text",{staticStyle:{color:"#4285f4"}},[t._v(t._s(e.statusText))]):"-1"==e.status||"1"==e.status?s("v-uni-text",{staticStyle:{color:"#999999"}},[t._v(t._s(e.statusText))]):s("v-uni-text",[t._v(t._s(e.statusText))])],1),s("v-uni-view",{staticClass:"express"},[s("v-uni-text",{staticClass:"city"},[t._v(t._s(e.expressTo.areaInfo.city))]),s("v-uni-text",[t._v(t._s(e.expressTo.name))])],1)],1),"4"==e.status?s("v-uni-view",{staticClass:"finished-time"},[t._v("签收时间："+t._s(e.finishedTime))]):t._e(),"1"==e.status?s("v-uni-view",{staticClass:"info"},[2==e.payType?s("v-uni-view",[t._v("到付")]):s("v-uni-view",[t._v("￥"),s("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))])],1)],1):t._e(),"2"==e.status&&1==e.payType?s("v-uni-view",{staticClass:"info"},[s("v-uni-view",[t._v("￥"),s("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))])],1),s("v-uni-text",{staticClass:"btn"},[t._v("去付款")])],1):t._e()],1)}))],2):t._e(),s("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isMore,expression:"isMore"}],staticClass:"senior-search-popup"},[s("v-uni-view",{staticClass:"overlay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isMore=!1}}}),s("v-uni-view",{staticClass:"more-search"},[s("v-uni-view",[s("v-uni-text",{staticClass:"name"},[t._v("寄件形式")]),s("v-uni-view",{staticClass:"search-type-list"},[s("v-uni-text",{class:{active:1==t.mode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMode(1)}}},[t._v("个人")]),s("v-uni-text",{class:{active:2==t.mode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMode(2)}}},[t._v("企业")])],1)],1),s("v-uni-view",[s("v-uni-text",{staticClass:"name"},[t._v("运输状态")]),s("v-uni-view",{staticClass:"search-type-list"},t._l(t.statusData,(function(e,i){return s("v-uni-text",{key:i,class:{active:-1!=t.status.indexOf(e.key)},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickStatus(e.key)}}},[t._v(t._s(e.txt))])})),1)],1),s("v-uni-view",[s("v-uni-text",{staticClass:"name"},[t._v("付款方式")]),s("v-uni-view",{staticClass:"search-type-list"},[s("v-uni-text",{class:{active:1==t.paymode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickPaymode(1)}}},[t._v("寄付")]),s("v-uni-text",{class:{active:2==t.paymode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickPaymode(2)}}},[t._v("到付")])],1)],1),s("v-uni-view",[s("v-uni-text",{staticClass:"name"},[t._v("订单时间")]),s("v-uni-view",{staticClass:"search-type-list"},[s("v-uni-picker",{staticClass:"picker",class:[0==t.isPicker?"active":""],attrs:{mode:"multiSelector",range:t.startArray,value:t.startIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isPicker=0},change:function(e){arguments[0]=e=t.$handleEvent(e),t.startPickerChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.startPickerColumn.apply(void 0,arguments)}}},[t._v(t._s(""==t.startDate?"开始时间":t.startDate))]),t._v("至"),s("v-uni-picker",{staticClass:"picker",class:[1==t.isPicker?"active":""],attrs:{mode:"multiSelector",range:t.endArray,value:t.endIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isPicker=1},change:function(e){arguments[0]=e=t.$handleEvent(e),t.endPickChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.endPickerColumn.apply(void 0,arguments)}}},[t._v(t._s(""==t.endDate?"结束时间":t.endDate))])],1)],1),s("v-uni-view",{staticClass:"search-type-list btn"},[s("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[t._v("重置")]),s("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}))},"0da0":function(t,e,i){t.exports=i.p+"static/img/icon-active.0b22760e.png"},"1bb8":function(t,e,i){t.exports=i.p+"static/img/cjt.e71b6292.svg"},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"47e8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABeElEQVQokW3Sz4vNURgG8M/7nRtlwoKFxsJ/YKmmGaOk/Jg9kQViY8ECOyv5USjJSpmNZGF2FjJFE1nIj5qysFAWbGQQJla6r8693zt95/Z96nROz/s8p+e874mpJylCD8naCPulI5jss97gLu4H37OvMzBuw2EcwgbtWMKDcknyPKae5rXgbIv0Mz5hoqV2uwoOtBReCzuFY5hpqe+r8LZB/MN17JZuSA9xrn7C14bufTVEXMRlvMg0nukqfqDoTjd0vzpDxqPJRKZ7wclkNhjDLuxp6JaqZLFBbJEqaV7YjI2l8/UTNjV0vzvSN7FM/MUCfuJRsBoXBvGwvhwyfSnZXzZuWhBmI3qGK1iFHfWaW1aF+Y7wEXdwHOPBM33jH2G0xKrla+p9rqq86oyM0O06kWk0OKgfr6CYCtY1Ej2OynQ5VFk+Xh9lVqeaUx7CeWEvuj3jimK4ha11gwb4gO241PvdNcocVyK8yzQZnCnNSW5GWGya4D/hOWYPg2xJvAAAAABJRU5ErkJggg=="},"908b":function(t,e,i){var s=i("24fb"),a=i("1de5"),n=i("0da0");e=s(!1);var r=a(n);e.push([t.i,".order-heard[data-v-7cddf07e]{position:fixed;top:0;left:0;right:0;z-index:2}.qy_img[data-v-7cddf07e]{width:18px;height:15px;vertical-align:middle;margin-right:3px}.search[data-v-7cddf07e]{padding:8px 15px;background-color:#fff;height:34px}.search .label-input[data-v-7cddf07e]{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;float:left;background-color:#f7f7f7;width:calc(100% - 65px);width:-webkit-calc(100% - 65px);line-height:34px;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:10px;overflow:hidden}.search .label-input uni-input[data-v-7cddf07e]{width:80%;margin-left:10px}.search uni-button[data-v-7cddf07e]{display:inline-block;background:#f7f7f7;float:right;width:50px;padding:0;border-top-left-radius:0;border-bottom-left-radius:0}.tab-nav[data-v-7cddf07e]{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:43px;background-color:#fff}.tab-nav > uni-view[data-v-7cddf07e]{width:50%;text-align:center}.tab-nav > uni-view.active uni-text[data-v-7cddf07e]{border-bottom:1px solid #4285f4;color:#4285f4;padding:0 10px 10px;width:auto}.tab-con[data-v-7cddf07e]{background-color:#f7f7f7;position:fixed;top:93px;left:0;right:0;bottom:0}\n.tab-con[data-v-7cddf07e]{bottom:50px}\n.order-item-list[data-v-7cddf07e]{padding:15px;margin-top:10px;background-color:#fff;position:relative}.order-item-list .number[data-v-7cddf07e]{font-size:12px;color:#999}.order-item-list .iconfont[data-v-7cddf07e]{margin-left:3px}.order-item-list .detail[data-v-7cddf07e]{font-size:14px;position:absolute;top:15px;right:15px}.order-item-list .finished-time[data-v-7cddf07e]{font-size:12px;color:#999}.order-item-list .info[data-v-7cddf07e]{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-item-list .info .price[data-v-7cddf07e]{font-size:20px;color:red}.order-item-list .info .btn[data-v-7cddf07e]{display:block;border-radius:6px;background-color:#4285f4;color:#fff;padding:4px 12px}.order-item-list .info .btn.del[data-v-7cddf07e]{background-color:red}.senior-search-popup[data-v-7cddf07e]{position:fixed;top:50px;left:0;right:0;bottom:0;z-index:2}.senior-search-popup .overlay[data-v-7cddf07e]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.6)}.senior-search-popup .more-search[data-v-7cddf07e]{position:absolute;top:0;left:0;right:0;background-color:#fff;padding-left:15px}.senior-search-popup .more-search .name[data-v-7cddf07e]{font-size:15px;display:block;margin-top:10px}.senior-search-popup .more-search .search-type-list[data-v-7cddf07e]{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:10px 0 15px;line-height:34px;text-align:center;color:#999}.senior-search-popup .more-search .search-type-list uni-text[data-v-7cddf07e],\r\n.senior-search-popup .more-search .search-type-list .picker[data-v-7cddf07e]{width:100%;height:34px;background:#f7f7f7;border-radius:4px;overflow:hidden;margin-right:15px;color:#333}.senior-search-popup .more-search .search-type-list .picker[data-v-7cddf07e]:first-child{margin-right:10px}.senior-search-popup .more-search .search-type-list .picker+.picker[data-v-7cddf07e]{margin-left:10px}.senior-search-popup .more-search .search-type-list uni-text.active[data-v-7cddf07e]{background-color:#d6ebff;background-image:url("+r+");background-repeat:no-repeat;background-size:18px;background-position:100% 100%}.senior-search-popup .more-search .search-type-list .picker.active[data-v-7cddf07e]{border-bottom:1px solid #0f84f3}.senior-search-popup .more-search .search-type-list.btn[data-v-7cddf07e]{margin:0;margin-left:-15px}.senior-search-popup .more-search .search-type-list.btn uni-button[data-v-7cddf07e]{width:50%;height:50px;line-height:50px;padding:0;background:#d6ebff;color:#0f84f3;border-radius:0}.senior-search-popup .more-search .search-type-list.btn uni-button[data-v-7cddf07e]:last-child{background:#0f84f3;color:#fff}",""]),t.exports=e},"9b55":function(t,e,i){"use strict";i.r(e);var s=i("b513"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"9cd6":function(t,e,i){"use strict";var s=i("d5bf"),a=i.n(s);a.a},b513:function(t,e,i){"use strict";i("99af"),i("4de4"),i("c975"),i("a434"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{tabIndex:1,isMore:!1,statusData:[{txt:"待揽收",key:1},{txt:"运输中",key:3},{txt:"已签收",key:4},{txt:"已取消",key:9}],keyword:"",status:[],mode:"",paymode:"",limit:5,sentTotal:0,receiveTotal:0,sentPage:1,receivePage:1,sentList:[],receiveList:[],showImage:!1,startYear:2019,isPicker:0,startDate:"",startArray:[],startIndex:[0,0,0],endDate:"",endArray:[],endIndex:[0,0,0]}},onLoad:function(t){var e=getApp();e.isToken(),1==t.orderType&&(this.tabIndex=2)},onShow:function(){var t=getApp();this.showImage=t.globalData.isDiscountActive,this.keyword="",this.sentPage=1,this.receivePage=1,this.sentList=[],this.receiveList=[],this.reset(),this.getExpressTotal(),void 0==this.$store.state.orderType||""==this.$store.state.orderType||(this.tabIndex=this.$store.state.orderType,this.$store.state.orderType="")},onHide:function(){this.$store.state.orderType=1},created:function(){for(var t=new Date,e=[],i=this.startYear;i<=t.getFullYear();i++)e.push(i+"年");var s=e.length-1,a=this.$util.getMonth(e[s]),n=a.length-1,r=this.$util.getDays(e[s],a[n]),o=r.length-1;this.startArray[0]=e,this.startArray[1]=a,this.startArray[2]=r,this.endArray[0]=e,this.endArray[1]=a,this.endArray[2]=r,this.startIndex=[s,n,o],this.endIndex=[s,n,o]},methods:{getExpressTotal:function(){var t=this;t.$util.networkRequest({url:"/Express/GetExpressTotal",success:function(e){t.sentTotal=e.sendCount,t.receiveTotal=e.receiveCount,t.getSearch()}})},clickMode:function(t){t==this.mode?this.mode="":this.mode=t},clickPaymode:function(t){t==this.paymode?this.paymode="":this.paymode=t},btnMore:function(){this.isMore=!this.isMore},btnNavTab:function(t){this.tabIndex!=t&&(this.tabIndex=t,1==t&&0==this.sentList.length&&this.getSearch(),2==t&&0==this.receiveList.length&&this.getSearch())},sentScroll:function(t){Math.ceil(this.sentTotal/this.limit)>=this.sentPage&&this.getSearch()},receiveScroll:function(t){Math.ceil(this.sentTotal/this.limit)>=this.receivePage&&this.getSearch()},goKeyword:function(){this.confirm()},reset:function(){this.mode="",this.status=[],this.paymode="",this.startDate="",this.endDate=""},confirm:function(){if(""!=this.startDate){if(""==this.endDate)return this.$util.showToast("结束日期不能为空"),!1;if(new Date(this.startDate)>=new Date(this.endDate))return this.$util.showToast("结束日期不能小于开始日期"),!1}this.sentPage=1,this.receivePage=1,this.sentList=[],this.receiveList=[],this.getSearch()},getSearch:function(){var t=this,e=1,i=1;1==t.tabIndex?(e="Sent",i=t.sentPage):(e="Receive",i=t.receivePage);var s=0==t.status.length?null:t.status;uni.showLoading({title:"加载中..."});var a={limit:t.limit,page:i,expressType:e,keyword:t.keyword,mode:t.mode,status:s,paymode:t.paymode,startTime:t.startDate,endTime:t.endDate};t.isMore=!1,t.$util.networkRequest({url:"/Express/Search",method:"POST",data:a,success:function(i){var s=i.total;if(0==s||0==i.list.length)return!1;i.list.filter((function(e){null!=e.finishedTime&&""!=e.finishedTime&&(e.finishedTime=t.$util.formatDate.format(e.finishedTime,"yyyy-MM-dd hh:mm"))})),"Sent"==e&&(t.sentPage++,t.sentList=t.sentList.concat(i.list)),"Receive"==e&&(t.receivePage++,t.receiveList=t.receiveList.concat(i.list))}})},startPickerChange:function(t){var e=t.detail.value,i=this.startArray[0][e[0]].split("年")[0],s=this.startArray[1][e[1]].split("月")[0],a=this.startArray[2][e[2]].split("日")[0],n=i+"-"+s+"-"+a;if(n==this.endDate)return this.$util.showToast("开始时间与结束时间不能一致"),!1;this.startDate=n},startPickerColumn:function(t){new Date;var e=t.detail.value;switch(this.startIndex[t.detail.column]=e,t.detail.column){case 0:this.startArray[1]=this.$util.getMonth(this.startArray[0][e]),this.startArray[2]=this.$util.getDays(this.startArray[0][e],this.startArray[1][0]),this.startIndex.splice(1,1,0),this.startIndex.splice(2,1,0);break;case 1:this.startArray[2]=this.$util.getDays(this.startArray[0][this.startIndex[0]],this.startArray[1][e]),this.startIndex.splice(2,1,0);break}this.$forceUpdate()},endPickChange:function(t){var e=t.detail.value,i=this.endArray[0][e[0]].split("年")[0],s=this.endArray[1][e[1]].split("月")[0],a=this.endArray[2][e[2]].split("日")[0],n=i+"-"+s+"-"+a;if(n==this.startDate)return this.$util.showToast("开始时间与结束时间不能一致"),!1;this.endDate=n},endPickerColumn:function(t){new Date;var e=t.detail.value;switch(this.endIndex[t.detail.column]=e,t.detail.column){case 0:this.endArray[1]=this.$util.getMonth(this.endArray[0][e]),this.endArray[2]=this.$util.getDays(this.endArray[0][e],this.endArray[1][0]),this.endIndex.splice(1,1,0),this.endIndex.splice(2,1,0);break;case 1:this.endArray[2]=this.$util.getDays(this.endArray[0][this.endIndex[0]],this.endArray[1][e]),this.endIndex.splice(2,1,0);break}this.$forceUpdate()},clickStatus:function(t){-1==this.status.indexOf(t)?this.status.push(t):this.status=this.status.filter((function(e){return e!=t}))},setClip:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"内容已复制",icon:"success"})}})},removeOrder:function(t){var e=this;uni.showModal({title:"提示",content:"确定要删除此单吗？",success:function(i){i.confirm&&e.$util.networkRequest({url:"/Express/DeleteExpress",data:{mastCode:t,reason:""},method:"POST",success:function(i){1==e.tabIndex?(e.sentTotal--,e.sentList=e.sentList.filter((function(e){return e.mastCode!=t}))):(e.receiveTotal--,e.receiveList=e.receiveList.filter((function(e){return e.mastCode!=t})))}})}})},goPage:function(t,e){var i=1==this.tabIndex?"Sent":"Receive";1==t?uni.navigateTo({url:"/pages/order/orderDetail?mastCode="+e+"&type="+i}):2==t?uni.navigateTo({url:"/pages/order/logistics?mastCode="+e}):3==t&&uni.navigateTo({url:"/pages/order/cancel?mastCode="+e})}}};e.default=s},c101:function(t,e,i){t.exports=i.p+"static/img/none-jj.6b610d66.svg"},d5bf:function(t,e,i){var s=i("908b");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("6807789c",s,!0,{sourceMap:!1,shadowMode:!1})},dcd5:function(t,e,i){t.exports=i.p+"static/img/none-sj.9b302636.svg"},ee60:function(t,e,i){"use strict";i.r(e);var s=i("0264"),a=i("9b55");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("9cd6");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"7cddf07e",null,!1,s["a"],r);e["default"]=c.exports}}]);