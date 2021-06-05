import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Me = () => import('../views/me/Me')

//1. 安装插件
Vue.use(VueRouter)

//2. 创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/me',
    component: Me
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router