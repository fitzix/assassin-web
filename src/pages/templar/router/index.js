import Vue from 'vue';
import Router from 'vue-router';

// import HomeRoute from './home';
// import AppRoute from './app';

const Layout = () => import('templar/views/layout');
const App = () => import('templar/views/app');
const AppItem = () => import('templar/views/app/item');

Vue.use(Router);

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'asn-home',
      // redirect: '/',
      // children: HomeRoute,
    },
    {
      path: '/apps',
      component: Layout,
      name: 'asn-apps',
      redirect: '/apps/index',
      children: [
        {
          path: 'index',
          component: App,
          name: 'asn-app-index',
        },
        {
          path: ':id',
          component: AppItem,
          name: 'asn-app-item',
        },
      ],
    },
  ],
});
