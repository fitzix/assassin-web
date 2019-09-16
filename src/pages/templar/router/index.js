import Vue from 'vue';
import Router from 'vue-router';

// import HomeRoute from './home';
// import AppRoute from './app';

const Layout = () => import('templar/views/layout');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'asn-home',
      // redirect: '/',
      // children: HomeRoute,
    },
    // {
    // path: '/apps',
    // component: Layout,
    // redirect: '',
    // children: AppRoute,
    // },
  ],
});
