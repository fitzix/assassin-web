import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

const Layout = () => import('templar/views/layout');
const Login = () => import('templar/views/login');
const App = () => import('templar/views/app');
const AppItem = () => import('templar/views/app/item');

Vue.use(Router);

const router = new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'asn-home',
    },
    {
      path: '/login',
      component: Login,
      name: 'asn-login',
      meta: {
        free: true,
      },
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

router.beforeEach((to, from, next) => {
  // 不需要登录的页面
  if (to.matched.some(record => record.meta.free)) {
    next();
    return;
  }
  if (!store.getters.token) {
    next({ name: 'asn-login' });
    return;
  }
  next();
});

export default router;
