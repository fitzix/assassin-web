import Vue from 'vue';
import App from './index.vue';
import router from './router';
// import store from './store';
import * as filters from './filters';
import ElementUI from 'element-ui';
import 'src/assets/css/templar.scss';

Vue.use(ElementUI, { size: 'small' });

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
