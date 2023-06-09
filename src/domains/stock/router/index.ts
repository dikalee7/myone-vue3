export default [
  {
    path: '/stockPrice',
    name: 'stockPrice',
    component: () =>
      import(
        /* webpackChunkName: "stock" */ '@/domains/stock/views/StockPrice.vue'
      ),
    meta: {
      isLoading: true,
      continueLoading: false,
      title: '주식 시세',
    },
  },
];
