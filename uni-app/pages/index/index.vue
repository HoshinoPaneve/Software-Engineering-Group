<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular class="swiper">
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/logo.png" alt="" />
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
				<text>收闲置</text>
			</view>
			
			<navigator url="/pages/takeaway/takeaway" class="innerbox">
				<text>点外卖</text>
			</navigator>
			
			<view class="innerbox">
				<text>取快递</text>
			</view>
		</view>
		<view class="recommand-text">
			<text>猜你喜欢</text>
		</view>
		<view class="recommand-list">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[]
			}
		},
		methods: {
			//调用util/api.js中封装的链接方法，请求轮播图数据
			// async getSwiper(){
			// 	const res=await this.$myRequest({
			// 		url:''
			// 	})
			// 	this.swiper=res;
			// }
		},
		onLoad() {
			// this.getSwiper()
		}
	}
</script>

<style lang="scss">
	.container {
		font-size: 14px;
		line-height: 24px;
	}
	.innerbox{
		width: 150rpx;
		height: 200rpx;
		border-radius: 5%;
		background-color: bisque;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.outerbox{
		background-color: white;
		display: flex;
		justify-content: space-evenly;
		margin-top: 10rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
	.swiper{
		border-radius: 5%;
		overflow: hidden;
		height: 400rpx;
	}
</style>
