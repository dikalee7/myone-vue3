<template>
  <v-app>
    <v-main>
      <router-view />
      <v-overlay :model-value="overlay" class="align-center justify-center">
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  data() {
    return {
      overlay: false,
    };
  },
});
</script>
