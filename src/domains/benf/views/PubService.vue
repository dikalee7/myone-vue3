<template>
  <div>
    <ListComp :items="listData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IFPubService } from '@/api/types/pubApi';
import useCmn from '@/domains/benf/composables/benfCmn';
import ListComp from '@/components/vueti/ListComp.vue';

export default defineComponent({
  components: {
    ListComp,
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

      this.listData = response.data.reduce((p, c) => {
        p.push(
          {
            title: c['서비스명'],
            subtitle: c['서비스목적'],
          },
          { type: 'divider', inset: false },
        );
        return p;
      }, []);
    },
  },
});
</script>

<style scoped></style>
