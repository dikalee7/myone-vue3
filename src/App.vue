<template>
  <v-layout>
    <MyoneHeader />
    <v-main>
      <router-view />
      <LoadingOverlay />
      <ConfirmView />
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingOverlay from './components/layout/LoadingOverlay.vue';
import MyoneHeader from './components/layout/MyoneHeader.vue';
import ConfirmView from './components/modal/ConfirmView.vue';

export default defineComponent({
  components: { LoadingOverlay, MyoneHeader, ConfirmView },
  name: 'App',
});
</script>

<style>
@import '/src/assets/css/common.css';
@import '/src/assets/css/vcustom.css';
</style>
