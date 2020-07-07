<style scoped>
	@import "../../common/css/me/userInfo.css";
</style>
<template>
	<view class="page-bg">
		<page-imges :show="showImage"></page-imges>
		<view class="content">
			<view class="bg"></view>
			<view class="user-box">
				<view class="outline">
					<view v-if="!isLogin" class="user-heard" @click="goLogin">
						<view class="pic"><image src="../../static/images/user.jpg"></image></view>
						<text class="txt" style="font-size: 16px;color:#fff">点击登录/注册</text>
					</view>
					<view v-else class="user-heard">
						<!-- 上传头像 -->
						<!-- #ifdef H5 -->
						<view class="pic">
							<view ref="input" class="input-view"></view>
							<image :src="userInfo.logo" mode="aspectFill"></image>
						</view>
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN -->
						<view class="pic" @click="uploadUserPic()"><image :src="userInfo.logo" mode="aspectFill"></image></view>
						<!-- #endif -->
						<view class="con_user">
							<view class="txt" @click="UpdeteUseInfo()">{{userInfo.userName==null?"点击完善":userInfo.userName}}</view>
							<view class="user-icon">
								<view class="u-i-l" @click="goOrderList(1)"><text class="iconfont icon-jijian-"></text>我寄的</view>
								<view class="u-i-l" style="margin-left: 30px;" @click="goOrderList(2)"><text class="iconfont icon-shoujian"></text>我收的</view>
							</view>
						</view>
					</view>
					<view class="leiji">
						<view class="ljys">
							<label>累计已省(元)</label>
							<text :style="$util.GetAmount(userInfo.saveMoney)=='--'?'color:#999':''">{{$util.GetAmount(userInfo.saveMoney)}}</text>
						</view>
						<view class="bordr_s"></view>
						<view class="ljys">
							<label>累计发货(元)</label>
							<text :style="$util.GetAmount(userInfo.takeDeliveryMoney)=='--'?'color:#999':''">{{$util.GetAmount(userInfo.takeDeliveryMoney)}}</text>
						</view>
						<view class="bordr_s"></view>
						<view class="ljys">
							<label>累计市场价(元)</label>
							<text :style="$util.GetAmount(userInfo.marketMoney)=='--'?'color:#999':''">{{$util.GetAmount(userInfo.marketMoney)}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="icon-list">
				<view class="list" @click="goPage('addressList')"><image mode="widthFix" src="../../static/images/user-icon1.svg" ></image>地址薄</view>
				<view class="list" @click="goPage('myWallet')"><image mode="widthFix" src="../../static/images/user-icon2.svg" ></image>钱包</view>
				<view class="list" @click="goPage('coupon?type=indi')"><image mode="widthFix" src="../../static/images/user-icon5.svg" ></image>优惠券</view>
				<view class="list" @click="goPage('invoice')"><image mode="widthFix" src="../../static/images/user-icon3.svg" ></image>发票申请</view>
				<view class="list" @click="goOrderList(1)"><image mode="widthFix" src="../../static/images/user-icon4.svg"></image>我的订单</view>
			</view>
			<view class="item-list" @click="goPage('myCompany')">
				我的企业
				<image class="new" mode="widthFix" src="../../static/images/new.svg"></image>
				<text class="iconfont icon--right-jian"></text>
			</view>
			<view class="item-list" @click="goPage('bounty')">
				奖励金
				<text class="iconfont icon--right-jian"></text>
			</view>
			<view class="item-list" @click="phoneCall()">
				客服电话
				<text class="tel">{{tel}}</text>
			</view>
			<view class="item-list" @click="goPage('feedback')">
				问题反馈
				<text class="iconfont icon--right-jian"></text>
			</view>
		</view>
		<button class="exit" v-if="isLogin" @click="btnExit">退出登录</button>
	</view>
</template>
<script>
export default {
	data() {
		return {
			tel: "010-51285752",
			showImage: false,
			isLogin: false,
			userInfo: [],
			token: "",
			SumFH:"0",
			SumYS:"3432",
			SumMarket:"645"
		}
	},
	onShow(){
		let _token = uni.getStorageSync("token");
		if(_token == "" || _token == undefined){
			this.isLogin = false;
		}else{
			this.isLogin = true;
			this.token = _token;
			this.getUserInfo();
		}
		let app = getApp();
		app.isToken();
		this.showImage = app.globalData.isDiscountActive;
	},
	mounted() {
		const that = this;
		// #ifdef H5
		this.$util.$refsFileHtml({
			url: "/Account/ChangeLogo",
			formData: {SuffixName: ""},
			$input: this.$refs.input.$el
		}, function(data){
			that.userInfo.logo = data.data;
		});
		//#endif
	},
	methods: {
		getUserInfo: function(){
			const that = this;
			that.$util.networkRequest({
				url : "/Account/Get",
				success: function(res){
					console.log(res);
					that.userInfo = res;
				}
			});
		},
		goOrderList(type){
			if(this.goLogin() != false) return false;
			this.$store.state.orderType = type;
			uni.switchTab({
				url: '/pages/order/orderList'
			});
		},
		UpdeteUseInfo(){
			uni.navigateTo({
				url:"/pages/logs/peopleInfo?type=1"
			})
		},
		//上传头像
		uploadUserPic(){
			let that = this;
			that.$util.chooseImage({
				url: "/Account/ChangeLogo",
				formData: {SuffixName: ""},
			},function(data){
				that.userInfo.logo = data.data;
			});
		},
		//退出登录
		btnExit(){
			let that = this;
			let _recordType = 1; //1:公众号;2:小程序;3:pc
			// #ifdef H5
			// #endif
			// #ifdef MP-WEIXIN
				_recordType = 2
			// #endif
			that.$util.networkRequest({
				url: "/Account/Logout",
				method: "POST",
				data: {recordType: _recordType},
				success: res => {
					uni.removeStorageSync('token');
					uni.navigateTo({url: "/pages/logs/logs"});
				}
			});
		},
		goPage(_url){
			if(this.goLogin() != false) return false;
			uni.navigateTo({ url:'/pages/me/' + _url })
		},
		goLogin(){
			if(this.isLogin) return false;
			uni.navigateTo({url: "/pages/logs/logs"});
		},
		//拨打电话
		phoneCall(){
			uni.makePhoneCall({
				phoneNumber: this.tel //仅为示例
			});
		}
	}
}
</script>