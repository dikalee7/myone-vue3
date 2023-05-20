<template>
  <div>
    <ListComp
      :items="listData"
      :titleName="'서비스명'"
      :subTitleName="'서비스목적'"
      @emCallback="fnOpenDetail"
    />
    <PubServiceDetail ref="pubServiceDetail" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IFPubService, IFPubServiceData } from '@/api/types/pubApi';
import useCmn from '@/domains/benf/composables/benfCmn';
import ListComp from '@/components/vueti/ListComp.vue';
import PubServiceDetail from './PubServiceDetail.vue';

export default defineComponent({
  components: {
    ListComp,
    PubServiceDetail,
  },
  setup() {
    const { cmn, mo, pubApiCall, pubApi } = useCmn();
    const listData = ref([]);
    return { cmn, mo, pubApiCall, pubApi, listData };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.fnGetServiceList();
    },
    async fnGetServiceList() {
      const response = await this.pubApiCall<IFPubService>(
        this.pubApi.list.uri,
        {
          page: 1,
          perPage: 10,
        },
      );

      this.listData = response.data;
    },
    fnOpenDetail(selectedData: IFPubServiceData) {
      (
        this.$refs.pubServiceDetail as InstanceType<typeof PubServiceDetail>
      ).fnOpenPop(selectedData.서비스ID);
    },
  },
});
</script>

<style scoped></style>
