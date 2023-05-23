<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />

        <ListComp
          :items="listData"
          :titleName="'서비스명'"
          :subTitleName="'서비스목적'"
          @emCallback="fnOpenDetail"
        />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useCmn from '@/domains/sample/composables/sampleCmn';
import { pubApiCall } from '@/api/index';
import { IFPubService, IFPubServiceData } from '@/api/types/pubApi';
import ListComp from '@/components/vueti/ListComp.vue';

export default defineComponent({
  components: {
    ListComp,
  },
  setup() {
    const { cmn, mo } = useCmn();
    const dialog = ref(false);
    const title = ref('리스트 샘플');
    const listData = ref([]);

    return { cmn, mo, title, dialog, listData };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.callPublicService();
    },
    async callPublicService() {
      const response = await pubApiCall<IFPubService>('/gov24/v1/serviceList', {
        page: 1,
        perPage: 10,
      });

      this.listData = response.data;
    },
    fnOpenPop() {
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
    fnOpenDetail(selectedData: IFPubServiceData) {
      const jsonData = JSON.stringify(selectedData, null, 2);
      const msgStr = `<pre>${jsonData}</pre>`;
      this.mo.alert({
        title: '선택DATA',
        message: msgStr,
      });
    },
  },
});
</script>

<style scoped></style>
