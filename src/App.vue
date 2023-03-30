<template>
  <v-app>
    <v-main>
      <router-view />
      <LoadingOverlay />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingOverlay from './components/LoadingOverlay.vue';

export default defineComponent({
  components: { LoadingOverlay },
  name: 'App',
});
</script>
