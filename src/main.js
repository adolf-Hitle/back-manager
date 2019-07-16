import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入饿了么组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入vue
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入全局样式
import './assets/base.less'

// 导入router
import router from './router/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
