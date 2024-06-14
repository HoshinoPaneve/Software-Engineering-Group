<template>
  <div>
    <div class="alert"></div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <el-button type='primary' @click="login">登录</el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.username == '') {
        this.showAlert(false, '用户名为空')
        return
      }
      if (this.password == '') {
        this.showAlert(false, '密码为空')
        return
      }
      axios({
        url: 'http://localhost:9090/login',
        method: 'post',
        data: {
          username: this.username,
          password: this.password,
          role: 'ADMIN'
        }
      }).then(result => {
        console.log(result)
        let token = result.data.data.token
        this.$emit('login', token)
      }).catch(error => {
        this.showAlert(false, error.response.data.message)
      })
    },

    showAlert(isSuccess, msg) {
      const alert = document.querySelector('.alert')
      alert.classList.add('show')
      alert.innerHTML = msg
      const bgstyle = isSuccess ? 'alert-success' : 'alert-fail'
      alert.classList.add(bgstyle)
      setTimeout(() => {
        alert.classList.remove('show')
        alert.classList.remove(bgstyle)
      }, 2000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.alert {
  opacity: 0;
  width: 50%;
  height: 50px;
  margin: 0 auto;
  border-radius: 10px;
  transition: 0.5s;
  line-height: 50px
}

.alert-success {
  background: limegreen;
}

.alert-fail {
  background: pink;
}

.show {
  opacity: 1;
}
</style>
