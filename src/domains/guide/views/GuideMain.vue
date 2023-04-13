<template>
  <v-card color="basil">
    <!-- <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h4 text-basil">학습 가이드</h1>
    </v-card-title> -->

    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item.id" :value="item.id">
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="tab1">
        <v-card color="basil" flat>
          <DistGuide />
        </v-card>
      </v-window-item>
      <v-window-item value="tab2">
        <v-card color="basil" flat> <ApiGuide /> </v-card>
      </v-window-item>
      <v-window-item value="tab3">
        <v-card color="basil" flat> 가이드 작성중 </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import ApiGuide from './ApiGuide.vue';
import DistGuide from './DistGuide.vue';

interface IFItem {
  id: string;
  name: string;
}
export default defineComponent({
  components: { DistGuide, ApiGuide },
  setup() {
    const tab = ref('tab1');
    const items: Ref<IFItem[]> = ref([
      { id: 'tab1', name: '배포' },
      { id: 'tab2', name: 'Api' },
      { id: 'tab3', name: '공통유틸' },
    ]);

    const text = ref(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    );
    return { tab, items, text };
  },
});
</script>

<style scoped>
/* Helper classes */
.bg-basil {
  background-color: #fffbe6 !important;
}
.text-basil {
  color: #356859 !important;
}
</style>
