<template>
	<view>
		<text class="head-right" @click="cancel">取消订单</text>
		<view class="con">
			<!-- <image mode="widthFix" src="../../static/images/cb.svg"></image> -->
			<view class="tips">快递员已接单，请耐心等待</view>
			<view class="txt">您期望的上门时间（{{sendTime}}以前取件）已通知快递员，请保持电话畅通</view>
			<view class="btn">
				<button @click="btnAgain">再寄一单</button>
				<button @click="btnDetail">查看详情</button>
			</view>
			<view class="amount-box" @click="goPage">
				<image mode="widthFix" src="../../static/images/jlj-ad.png"></image>
				<image class="go" mode="aspectFit" src="../../static/images/go.png" ></image>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			mastCode: "",
			sendTime: ""
		}
	},
	onLoad(options){
		this.mastCode = options.mastCode;
		this.sendTime = this.$util.formatDate.format(options.sendTime,"yyyy-MM-dd hh:mm");
	},
	methods: {
		cancel: function(){
			uni.navigateTo({url: "/pages/order/cancel?type=0&mastCode="+this.mastCode});
		},
		btnAgain: function(){
			this.$util.navigateBack(this);
		},
		btnDetail: function(){
			uni.redirectTo({url: "/pages/order/orderDetail?mastCode="+this.mastCode});
		},
		goPage: function(){
			uni.navigateTo({url: "/pages/me/bounty"});
		}
	}
}
</script>
<style scoped>
.con{
	padding-top: 90px;
	text-align: center;
	border-top: 1px solid #EEEEEE;
}
.con image{
	width: 28%;
}
.con .tips{
	font-size: 16px;
	font-weight: bold;
	color: #4285F4;
	padding-top: 26px;
	padding-bottom: 6px;
}
.con .txt{
	padding: 0 28px;
	color: #999999;
}
.con .btn{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 25px 30px;
}
.con .btn button{
	background-color: #4285f4;
	border: 1px solid #4285f4;
	border-radius: 4px;
	text-align: center;
	width: 35%;
	height: 40px;
	line-height: 38px;
	color: #FFFFFF;
}
.con .btn button:first-child{
	background-color: #FFFFFF;
	color: #4285f4;
}
.amount-box{
	position: relative;
	margin: 60px 15px;
}
.amount-box image{
	width: 100%;
	margin: 0 auto;
	display: block;
}
.amount-box .go{
	position: absolute;
	top: 2px;
	left: calc(50% - 35px);
	height: 100%;
	transform: translatey(-50%);
    animation: bling 1s cubic-bezier(0.33, 0.13, 0.93, 0.62) infinite;
}
@keyframes bling{
	0%{ transform:scale(1)}
	25%{ transform:scale(.86)}
	50%{ transform:scale(.78)}
	75%{ transform:scale(.86)}
	100%{ transform:scale(1)}
}
</style>
