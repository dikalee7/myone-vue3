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
    const { cmn, mo, kakao } = useCmn();
    const qrCodeData = ref(null);

    return { cmn, mo, qrCodeData, kakao };
  },
  methods: {
    onDecode(result: any) {
      this.qrCodeData = result;
    },
    async fnShare() {
      if (this.qrCodeData) {
        this.kakao.Share.sendDefault({
          objectType: 'text',
          text: this.qrCodeData,
          link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'https://myone.info',
            webUrl: 'https://myone.info',
          },
        });
      } else {
        this.mo.alert({
          title: '알림',
          message: 'QR 인식 후 사용 가능합니다.',
        });
      }
    },
  },
});
</script>

<style scoped></style>
