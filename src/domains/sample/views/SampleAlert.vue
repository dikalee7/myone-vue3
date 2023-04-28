<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />

        <v-card-actions class="">
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <SampleButton
                :btxt="'alert'"
                :dCls="'d-inline'"
                @goSample="fnCall('alert')"
              />
              <SampleButton
                :btxt="'confirm'"
                :dCls="'d-inline'"
                @goSample="fnCall('confirm')"
              />
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import SampleButton from '@/domains/guide/components/SampleButton.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { SampleButton },
  setup() {
    const dialog = ref(false);
    const title = ref('알림(alert, confirm) 샘플');

    return { title, dialog };
  },
  methods: {
    fnOpenPop() {
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
    fnCall(gbn: string) {
      console.log(gbn);
    },
  },
});
</script>

<style scoped></style>
