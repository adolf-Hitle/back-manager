// 导入vue  
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import index from '../views/index.vue'
import login from '../views/login.vue'

const routes=[
  {path:'/index',component:index},
  {path:'/login',component:login},
]

const router=new VueRouter({
  routes
})

// 全局前置守卫


// 暴露出去
export default router