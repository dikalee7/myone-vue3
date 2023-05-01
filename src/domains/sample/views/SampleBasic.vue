<template>
  <v-container fluid>
    <v-card
      title="Coding Conventions"
      subtitle="개발시 권고하는 기본 규칙"
      prepend-icon="mdi-cube"
    >
      <v-expansion-panels variant="default" class="pa-0" v-model="panel">
        <SampleBasicComp />
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SampleBasicComp from '../components/SampleBasicComp.vue';

export default defineComponent({
  components: { SampleBasicComp },
  setup() {
    //1. props, data, computed는 vue3에서 새로 제공되는 composition api setup을 이용하는 것으로 함
    const panel = ref([0]);
    return { panel };
  },
});
</script>

<style scoped></style>
