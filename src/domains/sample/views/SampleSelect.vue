<template>
  <!-- <v-row justify="center"> -->
  <v-dialog v-model="dialog" fullscreen scrollable>
    <v-card>
      <PopupHeader :title="title" @closePopup="fnClosePop" />

      <v-card-text class="pa-2" height="100">
        <SelectComp
          :selectCompData="selectCompData"
          @changeValue="(v) => (selectedValue = v)"
        />
      </v-card-text>
      <v-card-text class="d-flex justify-center align-start pa-2">
        <v-chip> 선택 값 : {{ selectedValue }} </v-chip>
      </v-card-text>
    </v-card>
  </v-dialog>
  <!-- </v-row> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dialog = ref(false);
    const title = ref('셀렉트박스 샘플');

    const selectCompData = ref({
      label: '주류 선택',
      items: [
        { name: '전체', value: 'all' },
        { name: '맥주', value: 'beer' },
        { name: '소주', value: 'soju' },
        { name: '막걸리', value: 'makgeolli' },
        { name: '와인', value: 'wine' },
      ],
      defaultValue: 'beer',
    });

    const selectedValue = ref(selectCompData.value.defaultValue);

    return { title, dialog, selectCompData, selectedValue };
  },
  methods: {
    fnOpenPop() {
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
  },
});
</script>

<style scoped></style>
