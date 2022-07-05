import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadsView from '../views/UploadsView.vue'
import CreateInvoice from '../views/CreateInvoice.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import PreviewInvoice from '../views/PreviewInvoice.vue'
import dashboardPage from '../views/dashboardPage.vue'

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
  },
  {
    path: '/register',
    name: 'registerpage',
    component: RegisterPage
  },
  {
    path: '/previewinvoice',
    name: 'previewinvoice',
    component: PreviewInvoice
  },
  {
    path: '/dashboard',
    name: 'dashboardPage',
    component: dashboardPage
  },

]

const router = new VueRouter({
  routes
})

export default router
