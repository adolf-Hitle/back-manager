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
router.beforeEach ((to, from , next) =>{
 // 去首页判断是否登陆
  if (to.path.indexOf('/index')==0) {
    // 根据地址判断
    if(window.localStorage.getItem('token')!=undefined){

      next()
    }else{

      new Vue().$message.error('欢迎下次再来')
      // 不存在
      router.push('/login')
      }
  } else {
    // 放过去
    next()
  }
})

// 暴露出去
export default router