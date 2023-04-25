<template>
  <v-layout>
    <MyoneHeader />
    <v-main>
      <router-view />
      <LoadingOverlay />
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingOverlay from './components/layout/LoadingOverlay.vue';
import MyoneHeader from './components/layout/MyoneHeader.vue';

export default defineComponent({
  components: { LoadingOverlay, MyoneHeader },
  name: 'App',
});
</script>

<style>
@import '/src/assets/css/common.css';
@import '/src/assets/css/vcustom.css';
</style>
