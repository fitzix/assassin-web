import 'src/assets/css/index.scss';
import Vue from 'vue';
import App from './index.vue';
import router from './router';
import store from './store';
import * as filters from './filters';

import { Menu, MenuItem, Input, Icon, Row, Col, Card, Carousel, CarouselItem, Container, Header, Aside, Main, Footer } from 'element-ui';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.config.productionTip = false;

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
