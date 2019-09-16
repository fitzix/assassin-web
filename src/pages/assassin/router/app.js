const asnAppItem = () => import('assassin/views/app/item');
const asnAppList = () => import('assassin/views/app/index');

export default [
  {
    name: 'asn-app-info',
    path: ':id',
    component: asnAppItem,
  },
  {
    name: 'asn-app-index',
    path: '',
    component: asnAppList,
  },
];
