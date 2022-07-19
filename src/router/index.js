import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadsView from '../views/UploadsView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

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
    path: '/login',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'registerpage',
    component: RegisterPage
  },
  {
    path: '/dashboard',
    name: 'dashboardPage',
    component: DashboardPage
  },

]

const router = new VueRouter({
  routes
})

export default router
