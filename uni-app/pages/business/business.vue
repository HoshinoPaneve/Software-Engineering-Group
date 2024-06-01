<template>
	<view class="container">
		<view class="banner"></view>
		<view class="main">
			<view class="bus-info">
				<view class="bus-detail">
					<view class="name">
						{{business.name}}
					</view>
					<view class="score">
						{{business.score}}分
					</view>
					<view class="saleVolume">
						月销：{{business.saleVolume}}
					</view>
				</view>
				<image :src="$hostURL+business.image" class="bus-img" />
			</view>
			<view class="operation">
				<view class="bus-tab">
					<view :class="tab=='order'?'tab tab-active' :'tab'" @click="tabChange('order')">
					  点菜
					</view>
					<view :class="tab=='info'?'tab tab-active' :'tab'" @click="tabChange('info')">
					  商家
					</view>
				</view>
				<view class="order" v-if="tab=='order'">
					<scroll-view scroll-y="true" class="order-menubar">
						<view v-for="(item,index) in menu" :key="item.id" :class="index==menuID?'menu menu-selected' :'menu'" @click="menuChange(index)">
							{{item.type}}
						</view>
					</scroll-view>
					
					<scroll-view scroll-y="true" class="order-foodbar">
						<view v-for="(item,index) in foods" :key="item.id" class="food-info">
							<image :src="$hostURL+item.image" mode="heightFix" class="food-img"></image>
							<view class="food-detail">
								<view class="food-name">{{item.name}}</view>
								<view class="food-price">￥{{item.price}}</view>
								<view class="addOrReduce">
								  <text class="iconfont icon-reduce" data-id="{{index}}" bindtap="reduce"></text>
								  <text> {{index}} </text>
								  <text class="iconfont icon-add" data-id="{{index}}" bindtap="add"></text>
								</view>
							</view>
							
						</view>
					</scroll-view>
				</view>
				<view class="info" v-if="tab=='info'">
					<view class="info_top">
					  <view class="info_title">
					    商家信息
					  </view>
					  <view class="iconfont icon-map">{{business.address}}</view>
					  <view class="iconfont icon-time2">配送时间：10:30-20:00</view>
					  <view class="iconfont icon-car">商家提供配送服务</view>
					  <view class="iconfont icon-money">¥{{business.beginExpense}}元起送｜配送费¥{{business.deliverExpense}}</view>
					  <view class="iconfont">电话：{{business.tel}}</view>
					</view>
					<view class="info_top">
					  <view class="info_title">
					    店内活动
					  </view>
					  <view class="iconfont icon-zhekou">满22减17；满50减33（在线支付专享）</view>
					  <view class="iconfont icon-zhekou">折扣商品2.6折起（在线支付专享)</view>
					  <view class="iconfont icon-zhekou">部分商品第二份半价</view>
					  
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab:'order',
				menuID:0,
				business:{
					id:1,
					name:'香茵波克现烤汉堡（武大校内店）',
					saleVolume:321,
					score:4.9,
					image:'/images/bus-img/bus-2.png',
					address:'武汉市武昌区武汉大学东中区九栋一楼',
					tel:'18164297568',
					beginExpense:0,
					deliverExpense:0
				},
				menu:[],
				foods:[{
					name:String,
					price:Number,
					image:String,
					saleVolume:Number,
				}],
			}
		},
		watch: {
		},
		methods: {
			tabChange(data){
				this.tab=data;
			},
			menuChange(data){
				this.menuID=data;
			},
			async getBusInfo(busId){
				const res=await this.$myRequest({
					url:'/business/selectById',
					data:{
						id:busId
					}
				})
				this.business=res.data;
				console.log(res)
			},
			async getMenu(busId){
				const res=await this.$myRequest({
					url:'/menu/select',
					data:{
						id:busId
					}
				})
				this.menu=res.data;
				console.log(res)
			},
			async getfood(busId){
				const res=await this.$myRequest({
					url:'/food/select',
					data:{
						id:busId
					}
				})
				this.foods=res.data;
				console.log(res)
			}
		},
		onLoad: function(option){
			this.getBusInfo(option.busId);
			this.getMenu(option.busId);
			this.getfood(option.busId);
		}
	}
	
</script>

<style>
	.banner{
		width: 100%;
		height: 150rpx;
		background-color: aquamarine;
	}
	.main{
		margin-top: -20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-color: #fff;
	}
	.bus-info{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.bus-detail{
		width: 60%;
	}
	.bus-img{
		width: 160rpx;
		height: 160rpx;
		border: 2rpx solid #aaa;
		border-radius: 20rpx;
	}
	.name{
		margin: 10rpx 0;
		white-space: nowrap;
		overflow: hidden;
		font-size: 40rpx;
		font-weight: bold;
	}
	.score{
		color: orange;
		display: inline-block;
		margin-right: 30rpx;
	}
	.saleVolume{
		display: inline-block;
	}
	.bus-tab{
		width: 100;
		display: flex;
		justify-content: space-around;
		border-bottom: 2px solid #eee;
	}
	.tab{
		width: 30%;
		padding: 30rpx;  
		text-align: center;
	}
	.tab-active{
		border-bottom: 4rpx solid #ffe400;
	}
	
	.order-menubar{
		float: left;
		height: 1000rpx;
		width: 25%;
		background: #eee;
	}
	.order-foodbar{
		float: left;
		height: 1000rpx;
		width: 75%;
	}
	.menu{
		padding: 40rpx 0;
		text-align: center;
		overflow: hidden;
		border-bottom: 2rpx solid #ddd;
	}
	.menu-selected{
		background-color: #fff;
		border-left: 8rpx solid #ffe400;
	}
	
	.food-info{
		display: flex;
		height: 250rpx;
		background-color: #fff;
		border-radius: 30rpx;
		border: 2rpx solid #ddd;
		margin: 15rpx;
	}
	.food-info .food-img{
		height: 100%;
		margin-left: 30rpx;
		max-width: 280rpx
	}
	.food-detail{
		position: absolute;
		right: 15%;
		padding-top:20rpx;
		text-align: right;
		height: 250rpx;
	}
	.food-name{
		float:right;
		max-height: 100rpx;
		overflow: hidden;
		font-size: 26rpx;
		width: 150rpx;
	}
	.food-price{
		color: red;
		font-size: 40rpx;
	}
	.addOrReduce{
		position: absolute;
		bottom: 60rpx;
		right: -10rpx;
	}
	.addOrReduce > .iconfont {
	  font-size: 40rpx;
	  color: #ffe400;
	  padding:15rpx;
	}
	
	.info_top {
	  margin-top: 10rpx;
	  background: white;
	  padding: 20rpx 40rpx;
	}
	.info_title {
	  font-weight: bold;
	  border-bottom: 2rpx solid #ddd;
	  padding-bottom: 20rpx;
	}
	.info_top>.iconfont {
	  line-height: 60rpx;
	  font-size: 28rpx;
	  color: #666;
	}
	.info_top>.iconfont:before {
	  margin-right: 20rpx;
	  font-size: 40rpx;
	}
	.info_top>.icon-zhekou:before {  
	  color: #f74d4d;
	}
</style>
