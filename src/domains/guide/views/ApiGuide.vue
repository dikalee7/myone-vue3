<template>
  <div>
    <v-container fluid>
      <v-card
        title="API 호출"
        subtitle="Axios 이용하여 API 호출"
        prepend-icon="mdi-cube"
      >
        <v-card-actions>
          <v-btn variant="outlined" @click="callBillInfo"> 호출 확인 </v-btn>
        </v-card-actions>
      </v-card>
      <div :class="cmdCls" v-if="rsltJson">
        <pre><code v-html="rsltJson"></code></pre>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { publicApis } from '@/api/index';
import { IFBillInfoReq, IFBillInfoDetail } from '@/api/type';
import { AxiosResponse } from 'axios';

export default defineComponent({
  setup() {
    const rsltJson = ref('');
    const cmdCls = ref('bg-grey-darken-4 mt-1 vSpace vJson');
    return { rsltJson, cmdCls };
  },
  methods: {
    async callBillInfo() {
      const testV: Pick<IFBillInfoReq, 'numOfRows'> = {
        numOfRows: 2,
      };

      const { data }: AxiosResponse<IFBillInfoDetail[]> = await publicApis(
        '/9710000/BillInfoService2/getBillInfoList',
        this.$strUtil.queryString(testV),
      );

      this.rsltJson = JSON.stringify(data, null, 2);

      console.log(JSON.stringify(data, null, 2));
    },
  },
});
</script>

<style scoped>
.vJson {
  height: 300px;
}
</style>
