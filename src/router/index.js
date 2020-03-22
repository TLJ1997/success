import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/home',
    name:'Home',
    component:Home
  }
]


const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path === '/login')
  return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr)
  return next('/login');
  next();
})
export default router
