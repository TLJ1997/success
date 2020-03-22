import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入lib_flexible  使用rem
import 'amfe-flexible'
//引入全局样式表
import './assets/css/global.css'
import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
// 挂载到vue原型上  以后在项目中可以通过this直接访问到
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
