export default [
  {
    path: '/businfo',
    component: () =>
      import(
        /* webpackChunkName: "traffic" */ '@/domains/traffic/views/BusInfo.vue'
      ),
  },
  {
    path: '/subwayinfo',
    component: () =>
      import(
        /* webpackChunkName: "traffic" */ '@/domains/traffic/views/SubwayInfo.vue'
      ),
  },
];
