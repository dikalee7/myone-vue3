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
      const response = await pubApiCall&lt;IFPubService&gt;(
        '/v1/serviceList',
        { page: 1, perPage: 10, },
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
import { pubApiCall } from '@/api/index';
import { IFPubService } from '@/api/types/pubApi';
import TableView, { TB_THEME, IFTbData } from '@/components/ui/TableView.vue';
import useCmn from '@/domains/guide/composables/guideCmn';

export default defineComponent({
  components: { TableView },
  setup() {
    const { cmn, mo } = useCmn();
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
        desc: `pubApiCall&lt;T&gt;(uri, param, errPage, errDirect) 
          <br /> API 호출을 위한 공통 함수
          <br /> - uri : api uri
          <br /> - param : request param
          <br /> - errPage : 에러 발생시 특정 페이지로 이동되어야 할 경우 page router name (필수값 X) 
          <br /> - errDirect : 에러 발생시 직접 처리 해야할 경우 true (필수값 X) 
        `,
      },
      {
        item: 'response type',
        desc: `pubApiCall&lt;T&gt; 
          <br /> - 호출 시 Generic값으로 전달
          <br /> - type을 지정하지 않아도 무방하나 응답값에대한 타입추론 불가함
        `,
      },
    ];
    const tbData: IFTbData = {
      tbTheme: TB_THEME.DARK,
      hdInfo,
      tdInfo,
    };

    return { cmn, mo, reveal, rsltJson, cmdCls, tbData };
  },
  methods: {
    async callBillInfo() {
      const response = await pubApiCall<IFPubService>('/v1/serviceList', {
        page: 1,
        perPage: 10,
      });
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
