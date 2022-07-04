import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadsView from '../views/UploadsView.vue'
import CreateInvoice from '../views/CreateInvoice.vue'
import PreviewInvoice from '../views/PreviewInvoice.vue'
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
    path: '/previewinvoice',
    name: 'previewinvoice',
    component: PreviewInvoice
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
