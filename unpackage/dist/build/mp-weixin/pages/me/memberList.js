(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/memberList"],{"41f7":function(t,e,a){"use strict";var s=a("8af5"),i=a.n(s);i.a},"5c7f":function(t,e,a){"use strict";a.r(e);var s=a("ad64"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);e["default"]=i.a},7809:function(t,e,a){"use strict";a.r(e);var s=a("7a46"),i=a("5c7f");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("41f7");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],s["b"],s["c"],!1,null,"5de1f4e8",null,!1,s["a"],o);e["default"]=c.exports},"7a46":function(t,e,a){"use strict";var s,i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s}))},"8af5":function(t,e,a){},ad64:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{keyword:"",classifyData:[],masterName:"",masterPhone:"",limit:12,searchPage:1,searchTotal:0,dataList:[],token:"",type:"",isShowSheet:!1,animationData:{},h:0,sheetList:[]}},onLoad:function(e){this.type=e.type,this.token=t.getStorageSync("token"),this.animation=t.createAnimation(),this.showImage=getApp().globalData.isDiscountPopup},onShow:function(){this.keyword="",this.searchPage=1,this.dataList=[],this.getCmpyUserDepartment(),this.closeMaster()},mounted:function(){},methods:{search:function(t){if(this.keyword=t.detail.value,this.searchPage=1,this.dataList=[],""==this.keyword)return!1;this.getSearch()},searchScrolltolower:function(){Math.ceil(this.searchTotal/this.limit)>=this.searchPage&&this.getSearch()},getSearch:function(){var e=this;t.showLoading({title:"加载中..."}),e.$util.networkRequest({url:"/CompanyUser/GetList",data:{page:e.searchPage,limit:e.limit,keyWord:e.keyword,department:""},success:function(t){var a=t.total;if(0==a||0==t.list.length)return!1;e.searchPage++,e.searchTotal=a,e.dataList=e.dataList.concat(t.list)}})},addMember:function(){this.sheetList=[{txt:"批量上传文档",index:null},{txt:"添加成员",index:null}],this.showMaster()},getCmpyUserDepartment:function(){var t=this;t.$util.networkRequest({url:"/CompanyUser/GetCmpyUserDepartment",success:function(e){e.departmentLsit.forEach((function(t){t["show"]=!1,t["page"]=1,t["subList"]=[]})),t.classifyData=e.departmentLsit,t.masterName=e.masterName,t.masterPhone=e.masterPhone}})},classifyClick:function(t,e){if(e<=0)return!1;this.classifyData.forEach((function(e,a){e.show=a==t&&!e.show})),0==this.classifyData[t].subList.length&&this.getMemberList(t)},scrolltolower:function(t,e,a){Math.ceil(a/this.limit)>=e&&this.getMemberList(t)},getMemberList:function(t){var e=this,a=this.classifyData[t];e.$util.networkRequest({url:"/CompanyUser/GetList",data:{page:a.page,limit:e.limit,keyWord:"",department:a.departMentName},success:function(t){a.subList=a.subList.concat(t.list),a.page++}})},actionSheet:function(e,a,s,i,n){2==this.type?(this.$store.state.expressDeliveryInfo.busName=i,this.$store.state.expressDeliveryInfo.busPhone=n,t.navigateBack({})):(this.sheetList=[{txt:"设置管理员",index:e,id:a,department:s},{txt:"移至部门",index:e,id:a,department:s},{txt:"删除",index:e,id:a,department:s}],this.showMaster())},setAdmin:function(t){var e=this;e.$util.networkRequest({url:"/CompanyUser/SetMaster",method:"POST",data:{value:t},success:function(t){e.searchPage=1,e.dataList=[],e.getSearch(),e.getCmpyUserDepartment(),e.$util.showToast("管理员设置成功")}})},deleteAdmin:function(e,a){var s=this;a<=0?s.$util.showToast("请选择删除的员工信息"):t.showModal({title:"提示",content:"确定要删除吗?",success:function(e){e.confirm&&(t.showLoading({mask:!0,title:"正在删除..."}),s.$util.networkRequest({url:"/CompanyUser/DelUser",method:"POST",data:JSON.stringify([a]),success:function(t){s.searchPage=1,s.dataList=[],s.getSearch(),s.getCmpyUserDepartment(),s.$util.showToast("删除成功")}}))}})},uploadFileWX:function(){var e=this;wx.chooseMessageFile({type:"file",success:function(a){var s=a.tempFiles,i=!0,n="";s.forEach((function(t){var a=t.name.split("."),s=a[a.length-1];"xlsx"==s?e.$util.ajaxUploadFile({formData:{FileName:"CmpyUser",UploadType:11,SuffixName:"."+s},filePath:t.path,name:t.name},(function(t){e.callBack(t)})):(n+=n+t.name+"、",i=!1)})),i||(n=n.substring(0,n.length-1),t.showModal({title:"提示",content:"目前文件仅支持xlsx上传,\n"+n+"上传失败!",showCancel:!1}))}})},uploadFileH5:function(e,a){var s=this,i=e.files[0],n=i.name,o=n.split("."),r="."+o[o.length-1];t.uploadFile({url:s.apiUrl+"/Account/UploadFileWeb",header:{token:s.token,appId:s.appId},formData:{FileName:"CmpyUser",UploadType:11,SuffixName:r},files:[{name:"update_file",file:i,uri:a.srcElement.value}],success:function(t){e.value="";var a=JSON.parse(t.data);200==a.errCode?s.callBack(a):s.$util.showToast(a.message)},fail:function(t){e.value="",console.log(t)}})},callBack:function(t){var e=this;e.$util.networkRequest({url:"/CompanyUser/ImprotCmpyUser",method:"POST",data:{url:t.data},success:function(t){e.searchPage=1,e.dataList=[],e.getSearch(),e.getCmpyUserDepartment(),e.$util.showToast("共"+t.total+"条数据,导入成功!")}})},showMaster:function(){this.isShowSheet=!0,this.h=46*Number(this.sheetList.length)+51+"px","批量上传文档"==this.sheetList[0].txt&&(this.h="160px"),this.animation.translateY("-"+this.h).step(),this.animationData=this.animation.export()},closeMaster:function(){this.animation.translateY("100%").step(),this.animationData=this.animation.export(),this.isShowSheet=!1},sheetMenuClick:function(e,a){this.closeMaster(),null==a.index?(0==e&&this.uploadFileWX(),1==e&&t.navigateTo({url:"/pages/me/addMember"})):(0==e&&this.setAdmin(a.id),1==e&&t.navigateTo({url:"moveDepartment?id="+a.id+"&department="+encodeURIComponent(a.department)}),2==e&&this.deleteAdmin(a.index,a.id))}}};e.default=a}).call(this,a("543d")["default"])},db25:function(t,e,a){"use strict";(function(t){a("b397");s(a("66fd"));var e=s(a("7809"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])}},[["db25","common/runtime","common/vendor"]]]);