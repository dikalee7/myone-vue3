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
import guideCmn from '@/domains/guide/composables/index';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { SampleButton },
  setup() {
    const mo = guideCmn().useMo();
    const dialog = ref(false);
    const title = ref('알림(alert, confirm) 샘플');

    return { title, dialog, mo };
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
      switch (gbn) {
        case 'alert':
          this.mo
            .alert({
              title: '알럿 경고',
              message: 'alert 메시지 테스트 중',
            })
            .then((rslt) => {
              console.log('rslt==>', rslt);
            });
          break;

        case 'confirm':
          this.mo
            .confirm({
              title: '컨펌 확인',
              message: 'confirm 메시지 테스트 중',
            })
            .then((rslt) => {
              console.log('rslt==>', rslt);
            });
          break;
      }
    },
  },
});
</script>

<style scoped></style>
