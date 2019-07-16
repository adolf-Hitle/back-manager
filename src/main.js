import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入全局样式
import './assets/base.scss'

// 导入组件
import index from './views/index.vue'
import login from './views/login.vue'

const router =[
{path:'/login',component:login},
{path:'/index',component:index},
]

const routes=new VueRouter({
  router
})

new Vue({
  render: h => h(App),
  // 挂在到vue实例上
  routes
}).$mount('#app')
