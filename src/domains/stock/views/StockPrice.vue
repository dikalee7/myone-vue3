<template>
  <v-card title="주식 시세">
    <v-text-field label="종목" v-model="itmsNm"></v-text-field>
    <GuideButton
      @actionClick="fnGetPriceList"
      :btxt="'시세조회'"
      :pIcon="'mdi-search-web'"
    />
    <v-card-text>
      <pre>{{ listData }}</pre>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useCmn from '@/domains/stock/composables/stockCmn';
import { IFStockService } from '@/api/types/stockApi';
import GuideButton from '@/components/vueti/GuideButton.vue';

export default defineComponent({
  components: {
    GuideButton,
  },
  setup() {
    const { cmn, mo, stockApi, stockApiCall } = useCmn();
    const listData = ref('');
    const itmsNm = ref('삼성전자');
    return { cmn, mo, stockApi, stockApiCall, listData, itmsNm };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.fnGetPriceList();
    },
    async fnGetPriceList() {
      const response = await this.stockApiCall<IFStockService>(
        this.stockApi.priceList.uri,
        {
          itmsNm: this.itmsNm,
        },
      );

      this.listData = JSON.stringify(response.items, null, 2);
    },
  },
});
</script>

<style scoped></style>
