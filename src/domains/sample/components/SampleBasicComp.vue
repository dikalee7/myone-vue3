<template>
  <v-expansion-panel>
    <v-expansion-panel-title class="ma-0">
      디렉토리 구조
    </v-expansion-panel-title>
    <v-expansion-panel-text class="text-small-left">
      <v-card class="mt-3" variant="tonal" color="white">
        <v-card-item class="pa-0">
          <v-chip color="teal-darken-3" class="ma-0" label>
            <v-icon start icon="mdi-arrow-down-drop-circle-outline"></v-icon>
            src/domains 아래 각 업무별로 구성함
          </v-chip>
        </v-card-item>

        <v-card-item class="pa-0">
          <v-img
            :width="300"
            aspect-ratio="1/1"
            cover
            src="@/assets/image/guide/directory.jpg"
          ></v-img>
        </v-card-item>
      </v-card>
      <v-card class="mt-3" variant="tonal" color="white">
        <v-card-item class="pa-0">
          <v-chip color="teal-darken-3" class="ma-0" label>
            <v-icon start icon="mdi-arrow-down-drop-circle-outline"></v-icon>
            각 업무별 하위 디렉토리 구조
          </v-chip>
        </v-card-item>
        <v-card-item class="pa-0">
          <TableView :tbData="tbData" />
        </v-card-item>
      </v-card>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts">
import TableView, { TB_THEME, IFTbData } from '@/components/ui/TableView.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TableView },
  setup() {
    // const props = defineProps({
    //   cardInfo: {
    //     type: Object,
    //   },
    // });

    const tbData: IFTbData = {
      tbCls: 'text-caption',
      tbTheme: TB_THEME.DARK,
      hdInfo: [
        { key: 'item', name: '항목', width: '20%' },
        { key: 'desc', name: '설명', width: '80%' },
      ],
      tdInfo: [
        {
          item: 'component',
          desc: ` 공통 컴포넌트
        <br /> * 업무에서 사용하는 공통컴포넌트
        `,
        },
        {
          item: 'composables',
          desc: `공통 기능
        <br /> * 업무에서 사용하는 공통 기능으로 VUE3의 컴포지션 API를 활용한 재사용 함수
        `,
        },
        {
          item: 'router',
          desc: `업무 페이지 router 설정
        `,
        },
        {
          item: 'views',
          desc: `업무 페이지
        `,
        },
      ],
    };
    return {
      tbData,
    };
  },
});
</script>

<style scoped></style>
