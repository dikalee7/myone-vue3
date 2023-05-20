<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />
        <v-card-text>상세화면 퍼블 작업 추후 진행 에정</v-card-text>
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
import { IFPubServiceDetail } from '@/api/types/pubApi';
import useCmn from '@/domains/benf/composables/benfCmn';
import ActionButton from '@/components/layout/ActionButton.vue';

export default defineComponent({
  components: { ActionButton },
  setup() {
    const dialog = ref(false);
    const title = ref('공공서비스 상세');
    const rsltJson = ref('');
    const { cmn, mo, pubApiCall, pubApi } = useCmn();

    return {
      cmn,
      mo,
      pubApiCall,
      pubApi,
      title,
      dialog,
      rsltJson,
    };
  },
  methods: {
    fnOpenPop(svcId: string) {
      this.fnGetServiceDetail(svcId);
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
    async fnGetServiceDetail(svcId: string) {
      const response = await this.pubApiCall<IFPubServiceDetail>(
        this.pubApi.detail.uri,
        {
          'cond[SVC_ID::EQ]': svcId,
        },
      );

      this.rsltJson = JSON.stringify(response.data[0], null, 2);
    },
  },
});
</script>

<style scoped>
.vJson {
  height: 300px;
}
</style>
