import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/dashboardPage.vue';

Vue.use(VueRouter);

const routes = [



    {
        path: '/',
        name: 'dashboardPage',
        component: Dashboard,
    },    



];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router;