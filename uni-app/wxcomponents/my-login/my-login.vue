<template>
  <view class="container">
    <view class="login-box">
      <h2>用户登录</h2>
      <input class="input" type="text" placeholder="请输入账号" v-model="username" />
      <input class="input" type="password" placeholder="请输入密码" v-model="password" />
      <button class="btn" @click = "login">登录</button>
	  <button class="register_btn" @click = "register">没有账号?去注册 </button>
    </view>
  </view>
</template>

<script>
	export default {
		name:'my-login',
		data() {
			return {
				username: '',
				password: ''
		};
  },
  
  methods: {
	  async login(){
		  if (!this.username || !this.password) {
		    uni.showToast({
		      title: '账号或密码不能为空',
		      icon: 'none'
		    });
		    return;
		  }
		  
	  	const res=await this.$myRequest({
	  		url:'/login',
	  		method:'POST',
	  		data:{
	  			username:this.username,
	  			password:this.password,
	  			role:'USER'
	  		}
	  	}).then(res =>{
			console.log(res)
			if (res.data.code==200) {
			  //缓存用户数据
			  uni.setStorageSync('userId',res.data.data.id)
			  uni.setStorageSync('name',res.data.data.name)
			  uni.setStorageSync('token',res.data.data.token)
			  uni.setStorageSync('avatar',res.data.data.avatar)
			  // 跳转到首页或其他页面
			  uni.switchTab({
			    url: '/pages/index/index'
			  });
			  uni.showToast({
			    title: '登录成功',
			    icon: 'success'
			  });
			} else {
			  uni.showToast({
			    title: '登录失败',
			    icon: 'none'
			  });
			}
	  		
	  	})
	  	
	  },
	register() {
		  uni.navigateTo({
		  	url: '/pages/register/register'
		  })
	}
}
};
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f5f5f5;
	}

	.login-box {
		width: 80%;
		max-width: 300px;
		padding: 20px;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	
	.login-box h2 {
		margin-bottom: 10%;
		text-align: center;
		color: blueviolet;
	}

	.input {
		width: 100%;
		padding: 10px;
		margin-bottom: 15px;
		margin-right: 30px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

    .btn {
		width: 100%;
		padding: 10px;
		background-color: coral;
		color: #fff;
		border: none;
		border-radius: 25px;
		text-align: center;
	}
	
	.register_btn {
		width: 60%;
		background-color: aqua;
		height: 40px;
		margin-top: 5%;
		color: gray;
		border-radius: 15px;
		text-align: center;
	}
</style>
