import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadsView from '../views/UploadsView.vue'
import CreateInvoice from '../views/CreateInvoice.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/uploads',
    name: 'UploadsView',
    component: UploadsView
  },
  {
    path: '/createinvoice',
    name: 'createinvoice',
    component: CreateInvoice
  },
  {
    path: '/login',
    name: 'loginpage',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

export default router
