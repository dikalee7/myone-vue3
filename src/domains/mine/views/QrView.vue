<template>
  <div>
    <qrcode-stream @decode="onDecode" />
    <v-card theme="dark" color="blue-grey-darken-2" title="" class="ma-2">
      <v-card-subtitle>
        <v-chip class="mt-2 mb-2" variant="elevated">
          <v-icon start icon="mdi-arrow-down-thin-circle-outline"></v-icon>
          Result
        </v-chip>
      </v-card-subtitle>
      <!-- <v-card-text> 팝업 페이지 헤더 컴포넌트 </v-card-text> -->
      <v-divider></v-divider>
      <v-card color="blue-grey-darken-2" class="pa-1">
        <v-card-text class="bg-grey-darken-4 vSpace">
          <pre>
  {{ qrCodeData }}
          </pre>
        </v-card-text>
      </v-card>
      <SampleButton
        @goSample="fnShare()"
        :btxt="'kakao'"
        :pIcon="'mdi-share-variant-outline'"
      />
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QrcodeStream } from 'vue3-qrcode-reader';
import SampleButton from '@/domains/guide/components/SampleButton.vue';
import useCmn from '@/domains/mine/composables/mineCmn';

export default defineComponent({
  components: {
    QrcodeStream,
    SampleButton,
  },
  setup() {
    const { cmn, mo } = useCmn();
    const qrCodeData = ref(null);
    return { cmn, mo, qrCodeData };
  },
  methods: {
    onDecode(result: any) {
      this.qrCodeData = result;
    },
    fnShare() {
      this.mo.alert({
        title: '알림',
        message: '제공 예정',
      });
    },
  },
});
</script>

<style scoped></style>
