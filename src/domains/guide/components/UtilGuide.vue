<template>
  <div class="mb-6">
    <v-card
      :theme="theme"
      :color="cardColor"
      title="this.$utils.cmn"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'UtilsCmn'"
    >
      <v-card-text>공통 함수</v-card-text>
      <v-divider></v-divider>
      <SampleButton @goSample="fnOpenSample('sample_utils_cmn')" />
    </v-card>
    <v-card
      :theme="theme"
      :color="cardColor"
      title="this.$utils.cmn.alert"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'AlertUtil'"
    >
      <v-card-text>알림(alert, confirm) 공통 가이드</v-card-text>
      <v-divider></v-divider>
      <SampleButton @goSample="fnOpenSample('sample_alert')" />
    </v-card>

    <SampleAlert ref="sample_alert" />
    <SampleUtilsCmn ref="sample_utils_cmn" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import SampleAlert from '@/domains/sample/views/SampleAlert.vue';
import SampleUtilsCmn from '@/domains/sample/views/SampleUtilsCmn.vue';
import SampleButton from './SampleButton.vue';

export default defineComponent({
  components: { SampleButton, SampleAlert, SampleUtilsCmn },
  props: {
    selectedGuid: {
      type: String,
      default: 'A',
    },
  },
  setup(props) {
    const cardColor = ref('blue-grey-darken-2');
    const theme = ref('light');
    const sGuid = computed(() => {
      return props.selectedGuid;
    });

    return { cardColor, theme, sGuid };
  },
  methods: {
    fnOpenSample(compRef: string) {
      (this.$refs[compRef] as InstanceType<any>).fnOpenPop();
    },
  },
});
</script>

<style scoped></style>
