<template>
  <div id="app" style="margin: 0%">
    <login v-if="!haveLogined" @login="Logined"></login>
    <el-container style="height: 500px; border: 1px solid #eee" v-else>
      <el-header style="
          height: 50px;
          background-color: #39c;
          font-size: 30px;
          text-align: left;
        ">后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>管理</template>
              <el-menu-item-group>
                <router-link to="/emp">
                  <el-menu-item index="1-1"> 用户管理 </el-menu-item>
                </router-link>
                <router-link to="/order">
                  <el-menu-item index="1-2"> 订单管理 </el-menu-item>
                </router-link>
                <router-link to="/food">
                  <el-menu-item index="1-3"> 菜品管理 </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import login from './components/login.vue';
import bookManage from './components/bookManage.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    bookManage,
    login,
  },
  data() {
    return {
      haveLogined: false,
    }
  },
  methods: {
    Logined(token) {
      this.haveLogined = true
      this.$store.commit("setToken", { value: token })
    }
  },
  created: function () {
    /*axios({
      url: 'http://localhost:8080/complexPojo',
      method: 'post',
      params: {
        name: 'Pan',
        age: '20'
      }
    }).then((result) => {
      console.log(result)
    })*/
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
