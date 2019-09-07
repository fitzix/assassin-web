import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Layout = () => import('@/views/layout');
const AppList = () => import('@/components/AppList');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'asn-layout',
      redirect: '/',
      children: [{ path: '/', component: AppList }],
    },
  ],
});
