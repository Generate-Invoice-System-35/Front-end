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

]

const router = new VueRouter({
  routes
})

export default router
