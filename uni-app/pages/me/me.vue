<template>
	<view style="padding: 20rpx;">
		<mylogin v-if="!haveLogined"></mylogin>
		
		<view v-else>
			
			<view style="text-align: center;" class="userinfo">
				<image :src="$hostURL+avatar" style="width: 200rpx; height: 200rpx; border-radius: 50%;"></image>
				<view style="margin: 10rpx 0;">{{ name }}</view>
			</view>
			
			<view style="margin: 20rpx 0; " class="box">
				<view class="title">用户服务</view>
				<view style="display: flex;">
					<view class="cartegory-item" @click="goPage('/pages/address/address')">
						<image src="../../static/icons/address_book.png" style="width: 50%;" mode="widthFix"></image>
						<view style="flex: 1;">我的地址</view>
					</view>
					<view class="cartegory-item" @click="goPage('/pages/records/records')">
						<image src="../../static/icons/refund.png" style="width: 50%;" mode="widthFix"></image>
						<view style="flex: 1;">收支明细</view>
					</view>
					<view class="cartegory-item" @click="goPage('/pages/myComment/myComment')">
						<image src="../../static/icons/comment.png" style="width: 50%;" mode="widthFix"></image>
						<view style="flex: 1;">评价中心</view>
					</view>
					<view class="cartegory-item" @click="goPage('/pages/wallet/wallet')">
						<image src="../../static/icons/pay.png" style="width: 50%;" mode="widthFix"></image>
						<view style="flex: 1;">我的钱包</view>
					</view>
				</view>
			</view>
			
			<view style="margin: 20rpx 0;" class="box">
				<view class="info-item" @click="goPage('/pages/person/person')">
					<uni-icons type="person" size="18"></uni-icons>
					<text style="margin-left: 10rpx;">个人信息</text>
				</view>
				<view class="info-item" @click="goPage('/pages/introduce/introduce')">
					<uni-icons type="medal" size="18"></uni-icons>
					<text style="margin-left: 10rpx;">平台介绍</text>
				</view>
				<view class="info-item" @click="goPage('/pages/agreement/agreement')">
					<uni-icons type="paperclip" size="18"></uni-icons>
					<text style="margin-left: 10rpx;">用户协议</text>
				</view>
				<view class="info-item" @click="logout">
					<uni-icons type="undo" size="18"></uni-icons>
					<text style="margin-left: 10rpx;">退出登录</text>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import mylogin from '@/wxcomponents/my-login/my-login.vue'
	
	export default {
		components:{
			mylogin
		},
		data() {
			return {
				haveLogined:false,
				avatar:uni.getStorageSync('avatar'),//头像
				name: uni.getStorageSync('name')//用户名
			}
		},
		methods: {
			//从本地缓存获取用户信息，如果获取不到说明没有登录，切换到登陆页面
			getUserInfo(){
				const id=uni.getStorageSync('userId')
				if(id!=''){
					this.haveLogined=true
				}
				this.name=uni.getStorageSync('name')
				this.avatar=uni.getStorageSync('avatar')
			},
			
			//退出登录，清空缓存
			logout() {
				this.haveLogined=false;
				uni.clearStorage()
			},
			
			//传入url，跳转到对应的页面
			goPage(url) {
				uni.navigateTo({
					url: url
				})
			}
		},
		
		onShow() {
			this.getUserInfo()
		}
	}
</script>

<style scoped>
	
.title {
	font-weight: bold;
	font-size: 36rpx;
	margin-bottom: 30rpx;
}
.cartegory-item {
	flex: 1; 
	display: flex; 
	justify-content: space-between; 
	align-items: center; 
	flex-direction: column; 
	grid-gap: 10rpx;
}
.info-item {
	padding: 15rpx; 
	border-bottom: 2rpx solid #eee;
}
.info-item .uni-icons {
	position: relative;
	top: 2rpx;
}
</style>
