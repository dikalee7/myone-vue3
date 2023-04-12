import { createWebHistory, createRouter } from 'vue-router';
import GuideRouter from '@/domains/guide/router/index';
import MainRouter from '@/domains/main/router/index';
import TrafficRouter from '@/domains/traffic/router/index';
import { cmn as $cmn } from '@/util/cmn';

const rt = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/guide',
    },
    {
      path: '/notFound',
      name: 'notFound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // webpackChunkName은 network에서 보일 js 파일 이름
      // 이동하는 순간에 받아와도 될 정도로 사이즈가 작은 페이지는 webpackPrefetch 사용 안 함
      // 사이즈가 크고, 접속할 확률이 높은 페이지는 webpackPrefetch: true
      component: () =>
        import(
          /* webpackChunkName:"NotFoundPage" */ '@/views/NotFoundPage.vue'
        ),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/notFound',
    },
    ...GuideRouter,
    ...MainRouter,
    ...TrafficRouter,
  ],
});

rt.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta.isLoading) $cmn.setLoading(true);
  next();
});

rt.afterEach((to) => {
  $cmn.setLoading(to.meta.continueLoading as boolean);
});

export default rt;
