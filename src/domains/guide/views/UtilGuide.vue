<template>
  <div>
    <v-container fluid>
      <v-card
        title="공통 컴포넌트 및 Util"
        subtitle="컴포넌트 및 Util 사용 가이드"
        prepend-icon="mdi-cube"
        class="mb-5"
      >
        <SelectComp
          :selectCompData="selectCompData"
          @changeValue="emChangeValue"
        />
      </v-card>
      <v-card
        theme="dark"
        title="헤더"
        subtitle="MyoneHeader"
        class="mb-3"
        v-if="showComp"
      >
        <v-card-text>헤더 공통 가이드</v-card-text>
      </v-card>
      <v-card
        theme="dark"
        title="콤보박스"
        subtitle="SelectComp"
        class="mb-3"
        v-if="showComp"
      >
        <v-card-text>콤보박스 공통 가이드</v-card-text>
      </v-card>
      <v-card
        theme="dark"
        title="리스트"
        subtitle="ListComp"
        class="mb-3"
        v-if="showComp"
      >
        <v-card-text>리스트 공통 가이드</v-card-text>
      </v-card>
      <v-card
        theme="dark"
        title="알림"
        subtitle="this.$utils.cmn.alert"
        class="mb-3"
        v-if="showUtil"
      >
        <v-card-text>알림(alert, confirm) 공통 가이드</v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectCompData = ref({
      label: '구분 선택',
      items: [
        { name: '전체', value: 'A' },
        { name: '컴포넌트', value: 'C' },
        { name: 'Utils', value: 'U' },
      ],
      defaultValue: 'A',
    });

    const selectedValue = ref(selectCompData.value.defaultValue);

    const showComp = computed(() => {
      return selectedValue.value == 'C' || selectedValue.value == 'A';
    });

    const showUtil = computed(() => {
      return selectedValue.value == 'U' || selectedValue.value == 'A';
    });

    return { selectCompData, selectedValue, showComp, showUtil };
  },

  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      console.log('초기값 수행');
    },

    emChangeValue(v: string) {
      this.selectedValue = v;
    },
  },
});
</script>

<style scoped></style>
