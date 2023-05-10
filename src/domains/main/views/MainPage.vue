<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <MainContent :ctInfo="guideCtInfo" @goPage="fnGoPage" />
        </v-col>
        <v-col cols="12">
          <MainContent :ctInfo="contCtInfo1" @goPage="fnGoPage" />
        </v-col>
        <v-col cols="12">
          <MainContent :ctInfo="contCtInfo2" @goPage="fnGoPage" />
        </v-col>
        <v-col cols="12">
          <MainContent :ctInfo="contCtInfo3" @goPage="fnGoPage" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContent from '@/domains/main/components/MainContent.vue';
import useCtinfo from '@/domains/main/composables/ctinfo';
import useUtils from '@/composables/utils';

export default defineComponent({
  components: { MainContent },
  setup() {
    const { cmn, mo } = useUtils();
    const ctinfos = useCtinfo();
    return { cmn, mo, ...ctinfos };
  },
  methods: {
    fnGoPage(p: any) {
      if (p.name == 'main') {
        this.mo.alert({
          title: '준비중',
          message: '아직 제공되지 않습니다.',
        });
      } else {
        this.$router.push({ name: p.name, params: p.params });
      }
    },
  },
});
</script>

<style scoped></style>
