export default [
  {
    path: '/guide',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/GuideMain.vue'
      ),
    meta: { isLoading: true, continueLoading: false },
  },

  {
    path: '/guidePage',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/GuidePage.vue'
      ),
    meta: { isLoading: true, continueLoading: false },
  },
  {
    path: '/glink',
    name: 'glink',
    component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/GuidePage.vue'
      ),
    beforeEnter(to: { query: { extUrl?: string } }) {
      if (to.query.extUrl) {
        window.open(to.query.extUrl);
      }

      return false;
    },
  },
];
