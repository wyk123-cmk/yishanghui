(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-addMember"],{"04cc":function(e,t,n){"use strict";n.r(t);var u=n("7844"),i=n("704f");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("e4ed");var a,r=n("f0c5"),s=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"3b73270d",null,!1,u["a"],a);t["default"]=s.exports},"0f29":function(e,t,n){var u=n("24fb");t=u(!1),t.push([e.i,".form[data-v-3b73270d]{background-color:#fff;margin-top:8px;padding:15px}.form uni-label[data-v-3b73270d]{border:1px solid #f7f7f7;padding:15px;margin-bottom:15px;border-radius:4px;display:box;display:-webkit-box}.form uni-label uni-input[data-v-3b73270d]{height:20px;line-height:20px;font-size:14px;width:70%;margin-left:10px}.btn-default-css[data-v-3b73270d]{position:fixed;left:0;right:0;bottom:0}",""]),e.exports=t},"1df3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{userName:"",userPhone:"",userPosition:""}},methods:{btnAddUser:function(){var e=this;if(""==e.userName||null==e.userName)return e.$util.showToast("请输入成员姓名"),!1;if(""==e.userPhone||null==e.userPhone)return e.$util.showToast("请输入成员手机号"),!1;if(""==e.userPosition||null==e.userPosition)return e.$util.showToast("请输入成员部门"),!1;var t={phone:e.userPhone,userName:e.userName,department:e.userPosition};uni.showLoading({mask:!0,title:"加载中..."}),e.$util.networkRequest({url:"/CompanyUser/AddUser",method:"POST",data:t,success:function(t){uni.showModal({title:"提示",content:"成员添加成功",showCancel:!1,success:function(){e.$util.navigateBack(e)}})}})}}};t.default=u},5780:function(e,t,n){var u=n("0f29");"string"===typeof u&&(u=[[e.i,u,""]]),u.locals&&(e.exports=u.locals);var i=n("4f06").default;i("3339fd5e",u,!0,{sourceMap:!1,shadowMode:!1})},"704f":function(e,t,n){"use strict";n.r(t);var u=n("1df3"),i=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);t["default"]=i.a},7844:function(e,t,n){"use strict";var u,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page-bg"},[n("v-uni-view",{staticClass:"form"},[n("v-uni-label",[e._v("姓名"),n("v-uni-input",{attrs:{type:"text",placeholder:"输入成员真实姓名"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),n("v-uni-label",[e._v("手机"),n("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"输入成员手机号"},model:{value:e.userPhone,callback:function(t){e.userPhone=t},expression:"userPhone"}})],1),n("v-uni-label",[e._v("部门"),n("v-uni-input",{attrs:{type:"text",placeholder:"输入成员部门"},model:{value:e.userPosition,callback:function(t){e.userPosition=t},expression:"userPosition"}})],1)],1),n("v-uni-button",{staticClass:"btn-default-css",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.btnAddUser.apply(void 0,arguments)}}},[e._v("添加成员")])],1)},o=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u}))},e4ed:function(e,t,n){"use strict";var u=n("5780"),i=n.n(u);i.a}}]);