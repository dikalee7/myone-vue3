<template>
  <div>
    <v-container fluid>
      <v-card
        title="API 호출"
        subtitle="Axios 이용하여 API 호출"
        prepend-icon="mdi-cube"
        class="mb-5"
      >
        <v-card-text class="text-small-left">
          <v-chip color="teal-darken-3" class="ma-0" label>
            <v-icon start icon="mdi-label"></v-icon>
            공공데이터포털(https://www.data.go.kr/) API 이용
          </v-chip>
        </v-card-text>
        <TableView :tbData="tbData" />
      </v-card>
      <v-card>
        <v-card-item>
          <v-chip color="teal-darken-3" class="ma-0" label>
            <v-icon start icon="mdi-arrow-down-drop-circle-outline"></v-icon>
            호출 샘플
          </v-chip>
          <v-card-text class="bg-grey-darken-4 mt-1 vSpace">
            <pre>
async callBillInfo() {
      const response: AxiosResponse &lt;IFBillInfoDetail[]&gt;  = await publicApiCall(
        '/9710000/BillInfoService2/getBillInfoList',
        { numOfRows: 2 },
      );
}
            </pre>
          </v-card-text>

          <v-card-actions>
            <v-btn size="x-small" variant="elevated" @click="callBillInfo">
              호출 확인
            </v-btn>
          </v-card-actions>

          <v-card-text :class="cmdCls" v-if="rsltJson">
            <pre><code v-html="rsltJson"></code></pre>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { publicApiCall } from '@/api/index';
import { IFBillInfoDetail } from '@/api/types/publicApi';
import { AxiosResponse } from 'axios';
import TableView, { TB_THEME, IFTbData } from '@/components/ui/TableView.vue';

export default defineComponent({
  components: { TableView },
  setup() {
    // const $utils = (getCurrentInstance() as ComponentInternalInstance)
    //   .appContext.config.globalProperties.$utils;

    const reveal = ref(false);
    const rsltJson = ref('');
    const cmdCls = ref('bg-grey-darken-4 mt-1 vSpace vJson');
    const hdInfo = [
      { key: 'item', name: '항목', width: '20%' },
      { key: 'desc', name: '설명', width: '80%' },
    ];
    const tdInfo = [
      {
        item: 'instance',
        desc: ` pubApiInst 
          <br /> - 공공데이터 포털 호출 용 Axios 인스턴스
          <br /> - 테스트용으로 클라이언트에서 직접 호출함
          <br /> - <span class="text-decoration-underline">자체 서버 구축 후 변경 예정</span>
        `,
      },
      {
        item: 'function',
        desc: `publicApiCall(url, param) 
          <br /> - API 호출을 위한 공통 함수
        `,
      },
      {
        item: 'response type',
        desc: `AxiosResponse<T> 
          <br /> - AxiosResponse의 Generic값으로 전달
        `,
      },
    ];
    const tbData: IFTbData = {
      tbTheme: TB_THEME.DARK,
      hdInfo,
      tdInfo,
    };

    return { reveal, rsltJson, cmdCls, tbData };
  },
  methods: {
    async callBillInfo() {
      const response: AxiosResponse<IFBillInfoDetail[]> = await publicApiCall(
        '/9710000/BillInfoService2/getBillInfoList',
        { numOfRows: 2 },
      );

      this.rsltJson = JSON.stringify(response, null, 2);
    },
  },
});
</script>
<style scoped>
.vJson {
  height: 300px;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
