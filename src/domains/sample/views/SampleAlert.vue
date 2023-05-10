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
        <v-card-text class="text-center">{{ callRslt }}</v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import SampleButton from '@/domains/guide/components/SampleButton.vue';
import { defineComponent, ref } from 'vue';
import useCmn from '@/domains/sample/composables/sampleCmn';

export default defineComponent({
  components: { SampleButton },
  setup() {
    const { cmn, mo } = useCmn();
    const dialog = ref(false);
    const callRslt = ref('');
    const title = ref('알림(alert, confirm) 샘플');

    return { cmn, mo, title, dialog, callRslt };
  },
  methods: {
    fnOpenPop() {
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
    async fnCall(gbn: string) {
      let rslt = false;
      switch (gbn) {
        case 'alert':
          rslt = await this.mo.alert({
            title: '알럿 경고',
            message: 'alert 메시지 테스트 중',
          });
          this.callRslt = `alert 결과 : ${rslt}`;
          break;

        case 'confirm':
          rslt = await this.mo.confirm({
            title: '컨펌 확인',
            message: 'confirm 메시지 테스트 중',
          });
          this.callRslt = `confirm 결과 : ${rslt}`;
          break;
      }
    },
  },
});
</script>

<style scoped></style>
