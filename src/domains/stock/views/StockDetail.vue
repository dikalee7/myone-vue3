<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />
        <v-card-text>퍼블 작업 추후 진행 예정</v-card-text>
        <v-card-text class="pa-2 bg-grey-darken-4 mt-1 vSpace">
          <pre><code v-html="rsltJson"></code></pre>
        </v-card-text>
        <ActionButton
          @confirm="fnClosePop"
          :cancel="{ hide: true }"
          :confirm="{ name: '닫기', hide: false }"
        />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useCmn from '@/domains/stock/composables/stockCmn';
import { IFCompanyReq, IFCompanyRes } from '@/api/types/dartApi';
import ActionButton from '@/components/layout/ActionButton.vue';

export default defineComponent({
  components: { ActionButton },
  setup() {
    const dialog = ref(false);
    const title = ref('재무정보');
    const rsltJson = ref('');
    const { cmn, mo, stockApi, dartApiCall } = useCmn();

    return {
      cmn,
      mo,
      dartApiCall,
      stockApi,
      title,
      dialog,
      rsltJson,
    };
  },
  methods: {
    fnOpenPop(crno: string) {
      this.fnGetDetail(crno);
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
    async fnGetDetail(crno: string) {
      const req: IFCompanyReq = { corp_code: crno };
      const response = await this.dartApiCall<IFCompanyRes>(
        this.stockApi.corpInfo.uri,
        req,
      );

      console.log(response);
      // this.rsltJson = JSON.stringify(response.data[0], null, 2);
    },
  },
});
</script>

<style scoped>
.vJson {
  height: 300px;
}
</style>
