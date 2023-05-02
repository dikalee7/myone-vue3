<template>
  <v-container fluid>
    <v-card
      title="Coding Convention"
      subtitle="코딩 규칙"
      prepend-icon="mdi-cube"
    >
      <v-expansion-panels variant="default" class="pa-0 mb-3" v-model="panel">
        <SampleBasicComp :cardInfo="directoryInfo" @viewImg="emViewImg" />
        <SampleBasicComp :cardInfo="codingInfo" @viewImg="emViewImg" />
      </v-expansion-panels>
    </v-card>
  </v-container>
  <v-dialog v-model="reveal" transition="dialog-bottom-transition">
    <v-sheet
      elevation="12"
      rounded="lg"
      height="100%"
      width="100%"
      class="pa-4 text-center mx-auto"
    >
      <v-img
        width="100%"
        height="100%"
        :src="require(`/src/assets/image/guide/${vImg}`)"
      ></v-img>

      <v-divider></v-divider>

      <div class="pa-4 text-end">
        <v-btn
          class="text-none"
          color="medium-emphasis"
          min-width="92"
          rounded
          variant="outlined"
          @click="reveal = false"
        >
          Close
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SampleBasicComp from '../components/SampleBasicComp.vue';
import { TB_THEME } from '@/components/ui/TableView.vue';
import useUtils from '@/composables/utils';

export default defineComponent({
  components: { SampleBasicComp },
  setup() {
    const { cmn, useMo } = useUtils();

    const panel = ref([0]);
    const directoryInfo = ref({
      title: '디렉토리 구조',
      cards: [
        {
          items: [
            { gbn: 'chip', vtg: 'src/domains 아래 각 업무별로 구성함' },
            { gbn: 'img', vtg: 'directory.jpg', width: '300' },
          ],
        },
        {
          items: [
            { gbn: 'chip', vtg: '각 업무별 하위 디렉토리 구조' },
            {
              gbn: 'table',
              vtg: {
                tbCls: 'text-caption',
                tbTheme: TB_THEME.DARK,
                hdInfo: [
                  { key: 'item', name: '항목', width: '20%' },
                  { key: 'desc', name: '설명', width: '80%' },
                ],
                tdInfo: [
                  {
                    item: 'component',
                    desc: `업무에서 사용하는 공통컴포넌트`,
                  },
                  {
                    item: 'composables',
                    desc: `업무에서 사용하는 공통 기능으로 VUE3의 컴포지션 API를 활용한 재사용 함수`,
                  },
                  {
                    item: 'router',
                    desc: `업무 페이지 router 설정`,
                  },
                  {
                    item: 'views',
                    desc: `업무 페이지`,
                  },
                ],
              },
            },
          ],
        },
      ],
    });

    const codingInfo = ref({
      title: '코딩 가이드',
      cards: [
        {
          items: [
            { gbn: 'chip', vtg: '샘플' },
            { gbn: 'img', vtg: 'coding_template.jpg', width: '' },
            { gbn: 'txt', vtg: 'domains/sample/views/SamplePage.vue' },
          ],
        },
        {
          items: [
            { gbn: 'chip', vtg: '참고' },
            {
              gbn: 'table',
              vtg: {
                tbCls: 'text-caption',
                tbTheme: TB_THEME.DARK,
                hdInfo: [
                  { key: 'item', name: '항목', width: '20%' },
                  { key: 'desc', name: '설명', width: '80%' },
                ],
                tdInfo: [
                  {
                    item: 'props',
                    desc: `Vue2 option api 형태로 작성`,
                  },
                  {
                    item: 'data',
                    desc: `Vue3 composition api 형태로 작성`,
                  },
                  {
                    item: 'computed',
                    desc: `Vue3 composition api 형태로 작성`,
                  },
                  {
                    item: 'lifecycle hooks',
                    desc: `Vue2 option api 형태로 작성`,
                  },
                  {
                    item: 'method',
                    desc: `Vue2 option api 형태로 작성`,
                  },
                  {
                    item: 'composable',
                    desc: `Vue3의 컴포지션 API를 활용한 재사용 함수
                    <br /><br />Vue3에서는 mixin을 사용하지 말고 composable 기능을 사용하도록 권고함
                    <br /><br />*공통 utils를 composable방식으로 제공하였음`,
                  },
                ],
              },
            },
            {
              gbn: 'txt',
              vtg: 'data / computed는 vue3의 composition api로 작성하고, 그외 props 및 hook 그리고 method는 vue2의 option api 형태로 작성하도록 함',
            },
          ],
        },
      ],
    });

    const reveal = ref(false);
    const vImg = ref('directory.jpg');
    return { cmn, mo: useMo(), panel, directoryInfo, codingInfo, reveal, vImg };
  },
  methods: {
    emViewImg(img: string) {
      this.vImg = img;
      this.reveal = true;
    },
  },
});
</script>

<style scoped>
.v-card--reveal {
  top: 65px;
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  z-index: 200;
}
</style>
