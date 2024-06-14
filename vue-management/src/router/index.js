import Vue from 'vue'
import VueRouter from 'vue-router'

import empView from '@/views/empView'
import foodView from '@/views/foodView'
import orderView from '@/views/orderView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/emp',
    name: 'empView',
    component: empView
  },
  {
    path: '/food',
    name: 'foodView',
    component: foodView
  },
  {
    path: '/order',
    name: 'orderView',
    component: orderView
  },
  
]

const router = new VueRouter({
  routes
})

export default router
