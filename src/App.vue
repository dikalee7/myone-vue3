<template>
  <v-card class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <MyoneHeader />
      <v-main>
        <router-view />
        <LoadingOverlay />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingOverlay from './components/LoadingOverlay.vue';
import MyoneHeader from './components/MyoneHeader.vue';

export default defineComponent({
  components: { LoadingOverlay, MyoneHeader },
  name: 'App',
});
</script>
