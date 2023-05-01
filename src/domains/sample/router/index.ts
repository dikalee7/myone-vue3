export default [
  {
    path: '/sampleBasic',
    name: 'sampleBasic',
    component: () =>
      import(
        /* webpackChunkName: "sample" */ '@/domains/sample/views/SampleBasic.vue'
      ),
    meta: {
      isLoading: true,
      continueLoading: false,
      title: '샘플 기본',
    },
  },
];
