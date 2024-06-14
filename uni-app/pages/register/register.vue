<template>
  <view class="container">
    <view class="login-box">
      <input class="input" type="text" placeholder="请输入账号" 
	  v-model="username" />
      <input class="input" type="password" placeholder="请输入密码" 
	  v-model="password" />
	  <input class="input" type="password" placeholder="确认密码"
	  v-model="confirmPassword" />
      <button class="btn" @click = "register">注册</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        uni.showToast({
          title: '两次密码输入不一致',
          icon: 'none'
        });
        return;
      }
	  const res=await this.$myRequest({
	  	url:'/register',
	  	method:'POST',
	  	data:{
	  		username:this.username,
	  		password:this.password,
	  		role:'USER'
	  	}
	  }).then(res =>{
	  	if (res.data.code==200) {
	  	  
	  	  // 跳转到首页或其他页面
	  	  uni.switchTab({
	  	    url: '/pages/me/me'
	  	  });
	  	  uni.showToast({
	  	    title: '注册成功',
	  	    icon: 'success'
	  	  });
	  	} else {
	  	  uni.showToast({
	  	    title: res.data.msg,
	  	    icon: 'none'
	  	  });
	  	}
	  	})   
    }
  }
};
</script>

<style scoped>
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

	.input {
		width: 100%;
		padding: 10px;
		margin-bottom: 15px;
		margin-right: 20px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

    .btn {
		width: 100%;
		padding: 10px;
		background-color: #007aff;
		color: #fff;
		border: none;
		border-radius: 25px;
		text-align: center;
	}
	
	.register_btn {
		width: 60%;
		background-color: aqua;
		height: 40px;
		color: gray;
		border: none;
		border-radius: 15px;
		text-align: center;
	}
</style>
