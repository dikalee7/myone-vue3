<template>
  <div>
    <v-card :theme="theme" title="this.$utils.cmn.alert" class="mb-3">
      <v-card-text>알림(alert, confirm) 공통 가이드</v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const theme = ref('light');
    return { theme };
  },
});
</script>

<style scoped></style>
