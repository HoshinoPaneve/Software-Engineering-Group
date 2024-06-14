<template>
	<view v-for="(order, index) in orderList" :key="index" class="container">
	<view class="order-container">
		<view class="order-banner"></view>
			<view class="main">
				<view class="ord-info">
					<view class="ord-detail">
						<view class="restaurant-name">
							{{order.businessName}}
						</view>
					</view>
					<image class="restaurant-image" :src="$hostURL+order.businessImage" alt="restaurant Image"></image>
				</view>
				<view>
					<view class="food-container">
					 <view v-for="(item, index) in order.foodList" :key="index" class="food-item">
					      <image class="food-image" :src="$hostURL+item.image" alt="food Image"></image>
					      <view class="food-name"> {{item.name}} </view>X{{item.number}}
							
						</view>
						
					</view>
					
					<view class="total">
						<view class="total-Price">
							￥{{order.price}}
						</view>
						<view class="quantity">
						   共{{order.foodList.length}}件
						</view>
					</view>
					
				</view>
				
				
	         <view class="operation">
	         	<view class="bus-tab">
	         		<view :class="tab[index]=='order'?'tab tab-active' :'tab'" @click="tabChange('order',index)">
	         		  评价
	         		</view>
	         		<view :class="tab[index]=='info'?'tab tab-active' :'tab'" @click="tabChange('info',index)">
	         		  详情
	         		</view>
	         	</view>
			<view class="order" v-if="tab[index]=='order'">
				    <view class="bottom">
						<view class="sat-rid">
							你对骑手满意吗?
							<view contenteditable="true">
						<view>评分:_____</view></view>						 
						</view>
						<view class="sat-fod">
							你对商品满意吗？                
								<view contenteditable="true">
							<view>评分:_____</view></view>   
						</view>
					</view>          
				</view>
				<view class="info" v-if="tab[index]=='info'">
					<view class="info_top">
							<view>
							<span>打包费:</span>
						<view class="packing-price">￥1</view>
						</view>
						<view><span>配送费:</span>
						<view class="delvery-price">￥{{order.delprice}}</view>
						</view>
						<view>
							<span>优惠:</span>
						<view class="prefernatial">￥33</view>
						</view>
						<span>合计:</span>
						<view class="total-Price">￥{{order.price}}
						</view>
						</view>
						<view class="address">
							配送地址:{{order.address}}
						</view>
						<view class='number'>
							订单号码:{{order.id}}
						</view>
						<view class="x-time">
							下单时间:2024-6/12-13:51
						</view>
						<view class="s-time">
							送达时间:2024-6/12-14:25
						</view>
						<view class="paymentmethod">
							支付方式:在线支付
						</view>
					</view>
					</view>
			</view>
			</view>
			</view>
</template>
<script>
	export default{
		data(){
			return{
				tab:[],
				orderList:[
					{businessName:'香菌波克现烤汉堡(武大校园店)',
					businessImage:'/static/restaurant.png',
					price:24,
					quantity:2,
					packprice:3,
					delprice:2,
					prefer:3,
					address:'武汉大学南二门',
					number:592321,
				    foodList: [
				        { number:1,name: '吮指原味鸡', image: '/static/food.png'},
				        { number:1,name: '吮指原味鸡', image: '/static/food.png'},
						],
					}
				]
			}
		},
		methods:{
			tabChange(data,index){
				if(this.tab[index]===data){
					this.tab[index]=null;
				}else{
					this.tab[index]=data;
				}
			},
			async getOrders(){
				const res=await this.$myRequest({
					url:'/orders/selectAll',
					data:{
						userId:uni.getStorageSync('userId')
					}
				})
				this.orderList=res.data.data
				console.log(this.orderList)
				
				for(var i=0;i<this.orderList.length;i++){
					this.tab.push("null")
					const res=await this.$myRequest({
						url:'/orderDetail/selectAll',
						data:{
							orderId:this.orderList[i].id
						}
					})
					this.orderList[i].foodList=res.data.data;
				}
			}
		},
		onShow() {
			this.getOrders()
		}
	}
</script>

<style scoped>
	
	.order-container{
		margin: 0 20rpx;
		background-color: #fff;
	}
	.order-banner{
		width: 100%;
		height: 40rpx;
		background-color: #f0f0f0;
	}
	.main{
		padding: 20rpx;
		margin-top:-20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-color: #fff;
	}
	.ord-info{
		padding-left: 40rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.ord-detail{
		width: 30%;
	}
	.restaurant-image{
		width: 160rpx;
		height: 160rpx;
		border: 2rpx solid #aaa;
		border-radius: 20rpx;
	}
	.restaurant-name{
		margin-left: -40px;
		white-space: nowrap;
		font-size: 35rpx;
		font-weight: bold;
		text-align: right;
	}
	
	.food-image{
		width: 220rpx;
		height: 220rpx;
		border: 2rpx solid #aaa;
		border-radius: 20rpx;
	}
    .food-name{
		text-align: center;
		margin: 10rpx 0;
		white-space: nowrap;
		overflow: hidden;
		font-size: 30rpx;
		font-weight: bold;
	}
	.total-Price{
		text-align: right;
	}
	.quantity{
		text-align: right;
	}
	.packing-price{
		text-align: right;
	}
	.delvery-price{
		text-align: right;
	}
	.prefernatial{
		text-align: right;
	}
	.bus-tab{
		width: 100;
		display:flex;
		justify-content: space-around;
		border-bottom: 2px solid #eee;
	}
	.tab{
		 padding: 10px 20px;
		  cursor: pointer;
		  border: 1px solid black; /* 添加边框属性 */
		  border-radius: 5px;
	}
	.tab-active{
       background-color: #f7f7f7; /* 设置激活时的背景色 */
       border-color: white; /* 设置白色边框 */
       color: black; /* 设置文本颜色 */
       font-weight: bold;
	}
	.sat-rid{
		margin: 10rpx 0;
		white-space: nowrap;
		overflow: hidden;
		font-size: 30rpx;
		font-weight: bold;
	}
	.sat-fod{
		margin: 10rpx 0;
		white-space: nowrap;
		overflow: hidden;
		font-size: 30rpx;
		font-weight: bold;
	}
	.flex-container {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	.bottom{
	
	}
	.info_top{
		margin-top: 10rpx;
		background: white;
		padding: 20rpx 40rpx;
	}
	.food-container{
		display: flex;
		  flex-direction: row;
		  justify-content: flex-start; /* 可根据需要设置对齐方式 */
	}
</style>
