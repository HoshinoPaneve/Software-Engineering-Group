import Vue from 'vue'
import VueRouter from 'vue-router'

import empView from '@/views/empView'
import foodView from '@/views/foodView'
import orderView from '@/views/orderView'
import bookManage from '@/components/bookManage'
import bookAdd from '@/components/bookAdd'
import bookDelete from '@/components/bookDelete'

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
  {
    path: '/book',
    name: 'bookManage',
    component: bookManage,
    children: [
      {path: 'bookAdd', component: bookAdd},
      {path: 'bookDelete', component: bookDelete}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
