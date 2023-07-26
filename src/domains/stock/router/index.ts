export default [
  {
    path: '/stockInfo',
    name: 'stockInfo',
    component: () =>
      import(
        /* webpackChunkName: "stock" */ '@/domains/stock/views/StockInfo.vue'
      ),
    meta: {
      isLoading: true,
      continueLoading: false,
      title: '기업 정보',
    },
  },
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
