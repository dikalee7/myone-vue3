<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />

        <v-card-item class="pa-2" height="100">
          <v-sheet width="95%" class="mx-auto">
            <v-form class="justify-center">
              <SelectComp
                :selectCompData="selectCompData1"
                @changeValue="(v) => (selectedValue1 = v)"
              />

              <v-text-field
                v-model="selectedValue1"
                label="첫번째 선택값"
                readonly
              ></v-text-field>

              <v-divider></v-divider>
              <v-spacer class="pa-2"></v-spacer>

              <SelectComp
                :selectCompData="selectCompData2"
                @changeValue="(v) => (selectedValue2 = v)"
              />
              <v-text-field
                v-model="selectedValue2"
                label="두번째 선택값"
                readonly
              ></v-text-field>
            </v-form>
          </v-sheet>
        </v-card-item>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dialog = ref(false);
    const title = ref('셀렉트박스 샘플');

    const selectCompData1 = ref({
      id: 'sul1',
      label: '첫번째 주류 선택',
      items: [
        { name: '전체', value: 'all' },
        { name: '맥주', value: 'beer' },
        { name: '소주', value: 'soju' },
        { name: '막걸리', value: 'makgeolli' },
        { name: '와인', value: 'wine' },
      ],
      defaultValue: 'beer',
    });

    const selectedValue1 = ref(selectCompData1.value.defaultValue);

    const selectCompData2 = ref({
      id: 'sul2',
      label: '두번째 주류 선택',
      items: [
        { name: '전체', value: 'all' },
        { name: '맥주', value: 'beer' },
        { name: '소주', value: 'soju' },
        { name: '막걸리', value: 'makgeolli' },
        { name: '와인', value: 'wine' },
      ],
      defaultValue: 'soju',
    });

    const selectedValue2 = ref(selectCompData2.value.defaultValue);

    return {
      title,
      dialog,
      selectCompData1,
      selectedValue1,
      selectCompData2,
      selectedValue2,
    };
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
