export default [
  {
    path: '/pubService',
    name: 'pubService',
    component: () =>
      import(
        /* webpackChunkName: "benf" */ '@/domains/benf/views/PubService.vue'
      ),
    meta: {
      isLoading: true,
      continueLoading: false,
      title: '공공서비스',
    },
  },
];
