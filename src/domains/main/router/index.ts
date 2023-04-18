export default [
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(
        /* webpackChunkName: "main" */ '@/domains/main/views/MainPage.vue'
      ),
    meta: {
      isLoading: true,
      continueLoading: false,
      title: 'MY ONE',
      hideBack: true,
      hideHome: true,
    },
  },
];
