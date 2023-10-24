<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <MainContent :ctInfo="guideCtInfo" @goPage="tfn.goPage" />
        </v-col>
        <v-col cols="12" v-for="ct in mainCont" :key="ct.id">
          <MainContent :ctInfo="ct" @goPage="tfn.goPage" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import MainContent from '@/domains/main/components/MainContent.vue';
import useCtinfo from '@/domains/main/composables/ctinfo';
import useUtils from '@/composables/utils';

export default defineComponent({
  components: { MainContent },
  setup() {
    const router = useRouter();

    const { mo } = useUtils();
    const { guideCtInfo, mainCont } = useCtinfo();

    const tfn = {
      goPage: (p: any) => {
        if (p.name == 'main') {
          mo.alert({
            title: '준비중',
            message: '아직 제공되지 않습니다.',
          });
        } else {
          router.push({ name: p.name, params: p.params });
        }
      },
    };

    return {
      guideCtInfo,
      mainCont,
      tfn,
    };
  },
});
</script>

<style scoped></style>
