import 'src/assets/css/index.scss';
import Vue from 'vue';
import App from './index.vue';
import router from './router';
// import store from './store';
// global filters
// import * as filters from './filters';
import { Container, Aside, Main, Menu, MenuItem } from 'element-ui';

Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);

Vue.config.productionTip = false;

// register global utility filters
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key]);
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
