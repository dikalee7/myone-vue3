<template>
  <v-card class="mx-auto h-screen">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <MainContent :ctInfo="guideCtInfo" @goPage="fnGoPage" />
        </v-col>
        <v-col cols="12">
          <MainContent :ctInfo="contCtInfo1" @goPage="fnGoPage" />
        </v-col>
        <v-col cols="12">
          <MainContent :ctInfo="contCtInfo2" @goPage="fnGoPage" />
        </v-col>
        <v-col cols="12">
          <MainContent :ctInfo="contCtInfo3" @goPage="fnGoPage" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContent, {
  IFActions,
  IFCtInfo,
} from '../components/MainContent.vue';

export default defineComponent({
  components: { MainContent },
  setup() {
    // -- 가이드 컨텐츠 정의 Start --
    const guideActData: IFActions[] = [
      {
        name: '가이드',
        emnm: 'goPage',
        empr: { name: 'guide', params: {} },
      },
      {
        name: '배포',
        emnm: 'goPage',
        empr: { name: 'distGuide', params: {} },
      },
      {
        name: 'API',
        emnm: 'goPage',
        empr: { name: 'apiGuide', params: {} },
      },
    ];

    const guideCtInfo: IFCtInfo = {
      title: '개발환경구축',
      subtitle: 'VUE3+TYPESCRIPT',
      text: '개발 환경 및 공통작업 진행하며 정리',
      actions: guideActData,
      image: 'back-dev.jpg',
      gradient: 'to top right, rgba(3, 5, 33,.8), rgba(100, 108, 227,.8)',
    };
    // -- 가이드 컨텐츠 정의 End --

    const contCtInfo1: IFCtInfo = {
      title: '',
      subtitle: '개발 예정',
      text: '컨텐츠 구상 중',
      image: 'back-travel.jpg',
      gradient: 'to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)',
      actions: [
        {
          name: '이동',
          emnm: 'goPage',
          empr: { name: 'main', params: {} },
        },
      ],
    };

    const contCtInfo2: IFCtInfo = {
      title: '',
      subtitle: '개발 예정',
      text: '컨텐츠 구상 중',
      image: 'back-traffic.jpg',
      gradient: 'to top right, rgba(125, 46, 9,.8), rgba(250, 115, 52,.8)',
      actions: [
        {
          name: '이동',
          emnm: 'goPage',
          empr: { name: 'main', params: {} },
        },
      ],
    };

    const contCtInfo3: IFCtInfo = {
      title: '',
      subtitle: '개발 예정',
      text: '컨텐츠 구상 중',
      image: 'back-bill.jpg',
      gradient: 'to top right, rgba(51, 61, 64,.8), rgba(182, 199, 204,.8)',
      actions: [
        {
          name: '이동',
          emnm: 'goPage',
          empr: { name: 'main', params: {} },
        },
      ],
    };

    return { guideCtInfo, contCtInfo1, contCtInfo2, contCtInfo3 };
  },
  methods: {
    fnGoPage(p: any) {
      console.log('fnGoPage', p);
      this.$router.push({ name: p.name, params: p.params });
    },
  },
});
</script>

<style scoped></style>
