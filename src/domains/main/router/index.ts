export default [
  {
    path: '/main',
    component: () =>
      import(
        /* webpackChunkName: "main" */ '@/domains/main/views/MainPage.vue'
      ),
    meta: { isLoading: true, continueLoading: false },
  },
];
