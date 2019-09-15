const asnAppItem = () => import('src/views/app/item');
const asnAppList = () => import('src/views/app/index');

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
