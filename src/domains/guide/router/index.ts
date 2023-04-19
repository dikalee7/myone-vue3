export default [
  {
    path: '/guide',
    name: 'guide',
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
    name: 'distGuide',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/DistGuide.vue'
      ),
    meta: { isLoading: true, continueLoading: false, title: '배포' },
  },

  {
    path: '/apiGuide',
    name: 'apiGuide',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/ApiGuide.vue'
      ),
    meta: { isLoading: true, continueLoading: false, title: 'API' },
  },

  {
    path: '/utilGuide',
    name: 'utilGuide',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/UtilGuide.vue'
      ),
    meta: { isLoading: true, continueLoading: false, title: '공통 유틸' },
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
