export default [
  {
    path: '/qrView',
    name: 'qrView',
    component: () =>
      import(/* webpackChunkName: "mine" */ '@/domains/mine/views/QrView.vue'),
    meta: {
      isLoading: true,
      continueLoading: false,
      title: 'QR Reader',
    },
  },
];
