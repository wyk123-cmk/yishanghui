<style scoped>
	@import '../../common/css/order/logistics.css';
</style>
<template>
	<view>
		<view class="transport-o">
			<view class="express">
				<text class="city">{{logisticsData.expressFrom.areaInfo.city}}</text>
				<text>{{logisticsData.expressFrom.name}}</text>
			</view>
			<view class="status">
				<image src="../../static/images/bscjt.svg"></image>
				<text>{{logisticsData.expressStatusText}}</text>
			</view>
			<view class="express">
				<text class="city">{{logisticsData.expressTo.areaInfo.city}}</text>
				<text>{{logisticsData.expressTo.name}}</text>
			</view>
		</view>
		<view class="small-title">订单跟踪<text @click="goPage()">详情</text></view>
		<scroll-view class="scroll-wrapper" scroll-y="true" @scrolltolower="scrolltolower">
			<view class="none" v-if="total==0">暂无物流信息！</view>
			<view v-else class="item-list" v-for="(item, i) in detailsList" :key="i">
				<image v-if="i==0" src="../../static/images/yuandian1.png"></image>
				<image v-else src="../../static/images/yuandian.png"></image>
				{{item.routeInfo}}
				<text :style="i==0?'color: #fd5a6f;':''">{{item.routeTime}}</text>
			</view>
		</scroll-view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			mastCode: "",
			page: 1,
			limit: 10,
			total: 0,
			logisticsData: {
				expressFrom: {
				  areaInfo: {}
				},
				expressTo: {
				  areaInfo: {}
				}
			},
			detailsList: []
		}
	},
	onLoad(options){
		this.mastCode = options.mastCode;
	},
	onShow(){
		this.page = 1;
		this.detailsList = [];
		this.getInfo();
	},
	methods: {
		scrolltolower:  function() {
			if(Math.ceil(this.total / this.limit) >= this.page){
				this.getInfo();
			}
		},
		getInfo: function(){
			const that = this;
			uni.showLoading({ title: '加载中...' });
			that.$util.networkRequest({
				url: "/Express/GetExpressRoute",
				data: {
					mastCode: this.mastCode,
					page: that.page,
					limit: that.limit
				},
				success: function(res){
					that.logisticsData = res;
					let total = res.details.total;
					if(total == 0 || res.details.list.length == 0) return false;
					res.details.list.filter(item => {
						if(item.routeTime != null && item.routeTime != ""){
							item.routeTime = that.$util.formatDate.format(item.routeTime,"MM-dd hh:mm")
						}
					});
					that.page++;
					that.total = total;
					that.detailsList = that.detailsList.concat(res.details.list);
				}
			})
		},
		goPage(){
			uni.navigateTo({ url: '/pages/order/orderDetail?mastCode='+this.mastCode });
		}
	}
}
</script>