<template>
  <div>
    <v-container fluid>
      <v-card
        title="공통 컴포넌트 및 Util"
        subtitle="개발 가이드"
        prepend-icon="mdi-cube"
        class="mb-5"
      >
        <v-card-actions class="">
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <v-btn
                border
                class="text-none"
                append-icon="mdi-arrow-right-bold"
                variant="text"
                @click="fnOpenGuidePop('comp_pop')"
              >
                컴포넌트
              </v-btn>
              <v-btn
                border
                class="text-none"
                append-icon="mdi-arrow-right-bold"
                variant="text"
                @click="fnOpenGuidePop('util_pop')"
              >
                유틸
              </v-btn>
              <v-btn
                border
                class="text-none"
                append-icon="mdi-arrow-right-bold"
                variant="text"
                @click="fnGoPage('sampleBasic')"
              >
                코딩샘플
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-sheet width="90%" class="mx-auto">
          <SelectComp
            :selectCompData="selectCompData"
            @changeValue="(v) => (selectedValue = v)"
          />
        </v-sheet>
      </v-card>

      <ComponentGuide :selectedGuid="selectedValue" />
      <UtilGuide :selectedGuid="selectedValue" />
    </v-container>
    <MyoneCompPop ref="comp_pop" />
    <MyoneUtilPop ref="util_pop" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useCmn from '@/domains/guide/composables/guideCmn';
import ComponentGuide from '@/domains/guide/components/ComponentGuide.vue';
import UtilGuide from '@/domains/guide/components/UtilGuide.vue';
import MyoneCompPop from '@/domains/guide/views/MyoneCompPop.vue';
import MyoneUtilPop from '@/domains/guide/views/MyoneUtilPop.vue';

export default defineComponent({
  components: {
    ComponentGuide,
    UtilGuide,
    MyoneCompPop,
    MyoneUtilPop,
  },
  setup() {
    const { cmn, mo, guideList } = useCmn();
    const selectCompData = ref({
      label: '구분 선택',
      items: guideList.value.map((it) => {
        return { name: it.name, value: it.value };
      }),
      defaultValue: 'ListComp',
    });
    //AlertUtil

    const selectedValue = ref(selectCompData.value.defaultValue);

    return {
      cmn,
      mo,
      selectCompData,
      selectedValue,
    };
  },
  methods: {
    fnOpenGuidePop(compRef: string) {
      (this.$refs[compRef] as InstanceType<any>).fnOpenPop();
    },
    fnGoPage(page: string) {
      this.$router.push({ name: page, params: {} });
    },
  },
});
</script>

<style scoped></style>
