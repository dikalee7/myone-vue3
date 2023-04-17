export default [
  {
    path: '/guide',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/GuideMain.vue'
      ),
    meta: {
      isLoading: true,
      continueLoading: false,
      title: '개발 가이드',
    },
  },

  {
    path: '/distGuide',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/DistGuide.vue'
      ),
    meta: { isLoading: true, continueLoading: false, title: '배포' },
  },

  {
    path: '/apiGuide',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/ApiGuide.vue'
      ),
    meta: { isLoading: true, continueLoading: false, title: 'API' },
  },

  {
    path: '/glink',
    name: 'glink',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/DistGuide.vue'
      ),
    beforeEnter(to: { query: { extUrl?: string } }) {
      if (to.query.extUrl) {
        window.open(to.query.extUrl);
      }

      return false;
    },
  },
];
