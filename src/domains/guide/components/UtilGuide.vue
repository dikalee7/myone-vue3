<template>
  <div>
    <v-card
      :theme="theme"
      title="this.$utils.cmn.alert"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'AlertUtil'"
    >
      <v-card-text>알림(alert, confirm) 공통 가이드</v-card-text>
    </v-card>
    <v-card
      :theme="theme"
      title="this.$utils.cmn.setModal"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'ModalUtil'"
    >
      <v-card-text>동적 팝업 가이드</v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: {
    selectedGuid: {
      type: String,
      default: 'A',
    },
  },
  setup(props) {
    const theme = ref('light');
    const sGuid = computed(() => {
      return props.selectedGuid;
    });
    return { theme, sGuid };
  },
});
</script>

<style scoped></style>
