<template>
	<view>
		<form bindsubmit="formSubmit">
		  <view class="people">
		    联系人
		  </view>
		  <view class="message">
		    <view>
		      <text>姓名</text><input name="name" placeholder="请填写收货人姓名" v-model="name" placeholder-style="font-size:28rpx;color:#999;"/>
		    </view>
		    <view>
		      <text></text>
		      <view class="choose">
		         <!-- <view class="sir" bindtap="chooseId" data-id="先生">
		          <text class="{{id=='先生'?'quan iconfont icon-true':'quan'}}"></text>先生
		        </view>
		        <view bindtap="chooseId" data-id="女士">
		          <text class="{{id=='女士'?'quan iconfont icon-true':'quan'}}"></text>女士
		        </view>  -->
		        <radio-group name="sex">
		          <label><radio value="先生" color="#ffe400" checked/>先生</label>
		          <label><radio value="女士" color="#ffe400"/>女士</label>
		        </radio-group> 
		      </view>
		    </view>
		    <view>
		      <text>手机</text><input name="phone" placeholder="请填写收货人手机号码" v-model="phone" type="number" placeholder-style="font-size:28rpx;color:#999;"/>
		    </view>
		  </view>
		
		  <view class="people">
		    收货地址
		  </view>
		
		  <view class="message2">
		    <view class="iconfont icon-more" bindtap="getAddress">
		      <text class="width">小区/大厦/学校</text>
		      <view class="map">
		        <text class="iconfont icon-map"></text>
		        <!-- <view class="width2"> {{city}}</view> -->
		        <input name="address" class="width2" v-model="address"/>
		      </view>
		    </view>
		    <view>
		      <text class="width">楼号-门牌号</text>
		      <input class="width2" name="cityDetail" placeholder="例：16号楼427室" v-model="doorNo" placeholder-style="font-size:28rpx;color:#999;"/>
		    </view>
		  </view>
		  <!-- <view class="save" bindtap="saveAddress">
		    保存
		  </view> -->
		  <button class="save" @click="addAddress">保存</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				name:'',
				phone:'',
				address:'',
				doorNo:''
			}
		},
		methods: {
			async addAddress(){
				const res=await this.$myRequest({
					url:'/address/add',
					method:'POST',
					data:{
						id:this.id,
						address:this.address,
						doorNo:this.doorNo,
						userName:this.name,
						phone:this.phone,
						userId:uni.getStorageSync('userId')
					}
				}).then(res =>{
					uni.navigateBack()
					uni.showToast({
					  title: '添加成功',
					  icon: 'success'
					})
				})
			},
			async getAddressDetail(id){
				const res=await this.$myRequest({
					url:'/address/selectById/'+id,
					method:'GET'
				})
				this.name=res.data.data.userName
				this.phone=res.data.data.phone
				this.address=res.data.data.address
				this.doorNo=res.data.data.doorNo
			}
		},
		onLoad: function(option){
			this.id=option.id
			if(this.id!=''){
				this.getAddressDetail(this.id)
			}
		}
	}
	
</script>

<style>
page {
  background: #f2f2f2;
}
.quan {
  display: inline-block;
  width: 42rpx!important;
  height: 42rpx!important;
  border: 2rpx #ddd solid;
  border-radius: 50%;
}
.message .iconfont:before {
  color: #ffe400;
  font-size: 50rpx;
  position: relative;
  top: -8rpx;
  left: -4rpx;
}
.people {
  padding: 30rpx 40rpx;
}
.message,.message2 {
  line-height: 60rpx;
  padding: 20rpx 40rpx;
  background: white;
}
.message>view,.message2>view {
  display: flex; 
  align-items: center;
}
.message2>view {
  padding: 20rpx 0;
}
.message text {
  display: inline-block;
  width: 140rpx;
}
.choose {
  display: flex;
}
.choose>view {
  padding: 20rpx 0;
  display: flex;
  align-items: center;
}
.sir {
  margin-right: 60rpx;
}
.icon-map2 {
  font-size: 40rpx;
}
.map {
  display: flex;
  align-items: center;
  width: 370rpx;
}
.save {
  width: 90%;
  background: #ffe400;
  /* padding: 40rpx 0; */
  margin-left: 5%;
  margin-top: 100rpx;
  text-align: center;
  border-radius: 12rpx;
}

.header{
  display: flex;
  height: 60rpx;
  font-size: 28rpx;
  padding: 15rpx 20rpx;
  line-height: 60rpx;
  border-bottom: 20rpx solid #F4F4F4;
}
.header .search-input{
  height: 60rpx;
  flex: 1;
  padding-left: 30rpx;
  background: white;
  border-radius: 10rpx;
  color: #6D6D6D;
}
.page2 .header .search-btn{
  text-align: center;
  margin-left: 20rpx;
  width: 100rpx;
  background: #AAAAAA;
  border-radius: 10rpx;
  color: #EBEBEB;
}
.page2 .getLocation{
  font-size: 30rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  border-bottom: 20rpx solid #F4F4F4;
}
.page2 .addLocation{
  position: relative;
  font-size: 30rpx;
  height: 80rpx;
  line-height: 80rpx;
  padding-left: 15rpx;
}
.page2 .addLocation-icon{
  width: 30rpx;
  line-height: 27rpx;
  height: 30rpx;
  text-align: center;
  position: absolute;
  right: 15rpx;
  top: 20rpx;
  border-radius: 30rpx; 
  color: #FFD671;
  border:2px solid #FFD671;
}
.page2 .myLocation{
  background: #F4F4F4;
  height: 100rpx;
  padding-left: 15rpx;
  line-height: 130rpx;
  font-size: 25rpx;
  color: #E3E3E3;
}
.page2 .result-container{
  position: fixed;
  top: 90rpx;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: white;
}
.page2 .search-result-list{
  padding: 0 40rpx;
  height: 100%;
}
.page2 .search-result{
  line-height: 50rpx;
  font-size: 28rpx;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #ECECEC;
}
.page2 .search-result-desc{
  line-height: 45rpx;
  font-size: 27rpx;
  color: #AAAAAA;
}
.width {
  width: 280rpx;
}
.width2 {
  font-size:28rpx;
  width: 400rpx;
}
.nothing {
  padding-top: 40rpx;
}
</style>
