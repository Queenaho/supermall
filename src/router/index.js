import Vue from 'vue'
import VueRouter from 'vue-router'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)
const Home = ()=>import('../views/home/home')
const Category = ()=>import('../views/category/category')
const Cart = ()=>import('../views/cart/cart')
const Profile = ()=>import('../views/profile/profile')

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
