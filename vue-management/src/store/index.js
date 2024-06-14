import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  //定义数据，相当于data
  state: {  
    token:''
  },
  //相当于vuex的计算属性
  getters: {
  },
  //里面定义方法，操作state方发（同步）
  mutations: {
    setToken(state,value){
      state.token=value.value
    }
  },
  // 操作异步操作mutation（异步）
  actions: {
  },
  //模块化
  modules: {
  },
})
