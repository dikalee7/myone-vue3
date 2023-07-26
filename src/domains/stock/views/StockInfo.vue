<template>
  <v-card title="기업 정보">
    <v-text-field
      label="기업명 or 종목코드"
      v-model="stckIssuCmpyNm"
    ></v-text-field>
    <GuideButton
      @actionClick="fnGetCorpList"
      :btxt="'조회'"
      :pIcon="'mdi-search-web'"
    />
    <v-card
      theme="dark"
      :title="comp.corp_name"
      color="blue-grey-darken-4"
      class="ma-1"
      v-for="(comp, i) in listData"
      :key="i"
    >
      <v-divider></v-divider>
      <v-card-item class="pa-0">
        <v-card-text> 법인등록번호 : {{ comp.corp_code }} </v-card-text>
      </v-card-item>
      <v-card-item class="pa-0">
        <v-card-text> 종목코드 : {{ comp.stock_code }} </v-card-text>
      </v-card-item>
      <v-divider></v-divider>
      <GuideButton
        @actionClick="fnDetail()"
        :btxt="'재무정보'"
        :pIcon="'mdi-clipboard-text-search-outline'"
        :bcolor="'blue-grey-lighten-5'"
      />
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useCmn from '@/domains/stock/composables/stockCmn';
import { IFCorpCode } from '@/api/types/stockApi';
import GuideButton from '@/components/vueti/GuideButton.vue';

export default defineComponent({
  components: {
    GuideButton,
  },
  setup() {
    const { cmn, mo, stockApi, stockApiCall, xmlToJson } = useCmn();
    const viewData = ref('');
    const listData = ref([]);
    const stckIssuCmpyNm = ref('삼성전자');
    const compList = ref([]);
    return {
      cmn,
      mo,
      stockApi,
      stockApiCall,
      viewData,
      listData,
      stckIssuCmpyNm,
      xmlToJson,
      compList,
    };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      // 기업정보 xml 파일 read
      fetch('CORPCODE.xml')
        .then((response) => response.text())
        .then((str) => new DOMParser().parseFromString(str, 'application/xml'))
        .then((xml) => {
          this.compList = this.xmlToJson(xml).result.list.filter(
            (d: IFCorpCode) => d.stock_code.trim() !== '',
          );
          this.fnGetCorpList();
        });
    },
    async fnGetCorpList() {
      if (!this.stckIssuCmpyNm) {
        this.mo.alert({
          title: '알림',
          message: '기업명 혹은 종목코드를 입력해주세요.',
        });
      } else {
        this.fnSetView(this.compList);
      }
    },
    fnSetView(data: IFCorpCode[]) {
      this.listData = data.filter(
        (d: IFCorpCode) =>
          d.corp_name.indexOf(this.stckIssuCmpyNm) != -1 ||
          d.stock_code.indexOf(this.stckIssuCmpyNm) != -1,
      );
    },
    fnDetail() {
      this.mo.alert({
        title: '알림',
        message: '재무상세조회 구현중',
      });
    },
  },
});
</script>

<style scoped></style>
