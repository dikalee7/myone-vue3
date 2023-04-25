<template>
  <v-footer class="d-flex flex-column pa-0">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>footer area</strong>

      <v-spacer></v-spacer>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>dikalee</strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
