import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Layout = () => import('src/views/layout');

import HomeRoute from './home';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'asn-home',
      redirect: '/',
      children: HomeRoute,
    },
  ],
});
