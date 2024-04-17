<template>
	<view>
		<view class="res-list">
			<view class="res">
				<image src="/static/logo.png" mode="heightFix" class="res-img"></image>
				<view class="res-brief-info">
					<text class="name">肯德基（信息学部店）</text><br />
					<text class="score">4.9分</text><br />
					<text class="detail">月销：3000+</text><br />
					<text class="detail">起送：20￥ 配送费:8￥</text><br />
					<text class="detail">30分钟 1.4km</text>
				</view>
				
			</view>
			<view class="res">
				<image src="/static/logo.png" mode="heightFix" class="res-img"></image>
				<view class="res-brief-info">
					<text class="name">商家2</text>
					<text class="score"></text>
					<text class="detail"></text>
				</view>
				
			</view>
			<view class="res">
				<image src="/static/logo.png" mode="heightFix" class="res-img"></image>
				<view class="res-brief-info">
					<text class="name">商家3</text>
					<text class="score"></text>
					<text class="detail"></text>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.res{
	height: 250rpx;
	display: flex;
	background-color: antiquewhite;
	margin: 10rpx;
	padding: 20rpx;
}
.res-img{
	
	height: 250rpx;
	width: 250rpx;
}
.res-brief-info{
	margin-left: 20rpx;
}
.name{
	font-weight: bold;
}
.score{
	font-weight: bold;
	color: orange;
}
.detail{
	font-size: 30rpx;
	color: gray;
}
</style>
