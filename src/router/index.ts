import { createWebHistory, createRouter } from 'vue-router';
import MainRouter from '@/domains/main/router/index';
import TrafficRouter from '@/domains/traffic/router/index';
import NotFound from '@/views/NotFoundPage.vue';

const rt = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/notFound',
    },
    ...MainRouter,
    ...TrafficRouter,
  ],
});

export default rt;
