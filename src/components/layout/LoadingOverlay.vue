<template>
  <div>
    <v-overlay :model-value="overlay" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        color="amber"
        size="48"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      overlay: computed(() => store.getters['LoadingModule/isLoading']),
    };
  },
});
</script>

<style scoped></style>
