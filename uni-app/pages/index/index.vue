<template>
	<view class="index-container">
		<view class="top-banner">
			<uni-search-bar @confirm="search" @input="input" bgColor="rgba(255,255,255,1)" placeholder="搜索" radius="50"/>
			
			
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular class="swiper">
			<swiper-item v-for="item in swiper">
				<view class="swiper-item">
					<image :src="$hostURL+item.image" class="swiper-img"/>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="outerbox">
			<view class="innerbox">
				<image src="/static/icons/index-idle.png" class="icon"></image>
				<text>收闲置</text>
			</view>
			
			<navigator url="/pages/takeaway/takeaway">
				<view class="innerbox">
					<image src="/static/icons/index-takeaway.png" class="icon"></image>
					<text>点外卖</text>
				</view>
				
			</navigator>
			
			<view class="innerbox">
				<image src="/static/icons/index-delivery.png" class="icon"></image>
				<text>取快递</text>
			</view>
		</view>
		<view class="recommend-text">
			<text>兴趣推荐</text>
		</view>
		<view class="recommend-list">
			<view class="recommend" v-for="item in recommendList" @click="toBusiness(item.busId)">
				<image :src="$hostURL+ item.image" class="recommend-image"></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:
				[{image:'/images/swiper-img/swiper-1.png'},
				{image:'/images/swiper-img/swiper-2.png'}],
				recommendList:[
					{name:'吮指原味鸡',image:'/images/goods-img/goods-1-1.png',busId:1},
					{name:'新奥尔良烤翅',image:'/images/goods-img/goods-1-2.png',busId:1}
				]
			}
		},
		methods: {
			search(){
				console.log('search');
			},
			input(){
				console.log('input')
			},
			toBusiness(id){
				uni.navigateTo({
					url:'/pages/business/business?busId='+id
				})
			}
				
		},
		onLoad() {
		}
	}
</script>

<style lang="scss" scoped>
	
	.top-banner{
		padding-top: 80rpx;
		margin: 0 20rpx;
		background-color: #39c;
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		height: 450rpx;
	}
	
	.index-container {
		font-size: 14px;
		line-height: 24px;
	}
	.swiper{
		border-radius: 20rpx;
		overflow: hidden;
		margin: 20rpx 50rpx;
		margin-top: -300rpx;
		height: 350rpx;
		.swiper-img{
			width: 100%;
		}
	}
	.outerbox{
		font-size: 30rpx;
		background-color: white;
		display: flex;
		justify-content: space-around;
		margin-top: 10rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
		box-shadow: 0rpx 10rpx 10rpx #e5e5e5;
	}
	.innerbox{
		width: 180rpx;
		height: 200rpx;
		border-radius: 5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon{
		width: 100rpx;
		height: 100rpx;
	}
	
	.recommend-text{
		margin-top: 30rpx;
		margin-left: 30rpx;
		margin-bottom: 30rpx;
		font-size: 35rpx;
	}
	
	.recommend-list{
		margin: 0 30rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.recommend{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 40vw;
		background-color: #39c;
		padding: 10rpx;
		border-radius: 20rpx;
		color: white;
	}
	
	.recommend-image{
		width: 100%;
		height: 250rpx;
		border-radius: 20rpx;
	}
</style>
