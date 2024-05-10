<template>
	<view>
		<view class="takeaway-nav">
			<uni-search-bar @confirm="search" @input="input" bgColor="#ddd" placeholder="搜索商家" radius="50"/>
		</view>
		
		
		
		<view class="sort-list">
			<view class="sort sort-selected">
				综合排序
			</view>
			<view class="sort">
				评分排序
			</view>
			<view class="sort">
				销量排序
			</view>
		</view>
		<view class="res-list">
			
			<view class="res">
				<image src="/static/logos/logo-KFC.png" mode="heightFix" class="res-img"></image>
				<view class="res-brief-info">
					<text class="name">肯德基（信息学部店）</text><br />
					<text class="score">4.9分</text>
					<text class="detail">月销：3000+</text><br />
					<text class="detail">起送：20￥  配送费:8￥</text><br />
					<text class="detail">30分钟  1.4km</text>
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
			search(){
				console.log('search');
			},
			input(){
				console.log('input')
			}
		}
	}
</script>

<style>
	
.uni-searchbar{
	margin: -10rpx 0;
}	
	
.sort-list{
	display: flex;
	justify-content: space-around;
	margin: 0 10rpx;
	padding: 0;
}
.sort{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 34%;
	height: 60rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	background-color: #eee;
	font-size: 35rpx;
}
.sort-selected{
	background-color: #393;
	color: #ffc;
}
.res{
	height: 200rpx;
	display: flex;
	border-radius: 20rpx;
	background-color: #fff;
	box-shadow: 0rpx 10rpx 10rpx #e5e5e5;
	margin: 10rpx;
	padding: 20rpx;
}
.res-img{
	height: 200rpx;
	width: 200rpx;
	border-radius: 10rpx;
}
.res-brief-info{
	margin-left: 20rpx;
}
.name{
	font-weight: bold;
}
.score{
	margin-right: 20rpx;
	font-weight: bold;
	color: orange;
}
.detail{
	font-size: 30rpx;
	color: gray;
}
</style>
