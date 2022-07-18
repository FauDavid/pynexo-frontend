import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '../components/LoginComponent.vue';
import Dashboard from '../components/DashboardComponent.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
