export default [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    component: () => import('@/domains/main/views/MainPage.vue'),
  },
];
