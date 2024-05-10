<template>
	<view class="index-container">
		<uni-search-bar @confirm="search" @input="input" bgColor="rgba(255,255,255,1)" placeholder="搜索"/>
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular class="swiper">
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/entry_swiper_CrazyThursday.jpg" alt="" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/logo.png" alt="" />
				</view>
			</swiper-item>
		</swiper>
		
		<view class="outerbox">
			<view class="innerbox">
				<image src="/static/icons/index-icon-idle.png" class="icon"></image>
				<text>收闲置</text>
			</view>
			
			<navigator url="/pages/takeaway/takeaway" class="innerbox">
				<image src="/static/icons/index-icon-food.png" class="icon"></image>
				<text>点外卖</text>
			</navigator>
			
			<view class="innerbox">
				<image src="/static/icons/index-icon-delivery.png" class="icon"></image>
				<text>取快递</text>
			</view>
		</view>
		<view class="recommand-text">
			<text>兴趣推荐</text>
		</view>
		<view class="recommand-list">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[],
			}
		},
		methods: {
			search(){
				console.log('search');
			},
			input(){
				console.log('input')
			},
				
			//调用util/api.js中封装的链接方法，请求轮播图数据
			async getSwiper(){
				const res=await this.$myRequest({
					url:'/music/select'
				})
				console.log(res);
				this.swiper=res;
			}
		},
		onLoad() {
			this.getSwiper()
		}
	}
</script>

<style lang="scss">
	
	
	.index-container {
		padding-top: 20rpx;
		font-size: 14px;
		line-height: 24px;
	}
	.swiper{
		border-bottom-left-radius: 5%;
		border-bottom-right-radius: 5%;
		overflow: hidden;
		height: 400rpx;
	}
	.outerbox{
		font-size: 30rpx;
		background-color: white;
		display: flex;
		justify-content: space-evenly;
		margin-top: 10rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
		box-shadow: 0rpx 10rpx 10rpx #e5e5e5;
	}
	.innerbox{
		width: 150rpx;
		height: 200rpx;
		border-radius: 5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon{
		width: 50%;
		height: 50%;
	}
	
	.recommand-text{
		margin-top: 10rpx;
		margin-left: 30rpx;
		font-size: 35rpx;
	}
	
</style>
