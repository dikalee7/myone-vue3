<template>
  <v-card color="basil">
    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item.id" :value="item.id">
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab" disabled>
      <v-window-item value="tab1">
        <v-card color="basil" flat> <MyoneGuide /> </v-card>
      </v-window-item>
      <v-window-item value="tab2">
        <v-card color="basil" flat> <ApiGuide /> </v-card>
      </v-window-item>
      <v-window-item value="tab3">
        <v-card color="basil" flat>
          <DistGuide />
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useCmn from '@/domains/guide/composables/guideCmn';
import ApiGuide from './ApiGuide.vue';
import DistGuide from './DistGuide.vue';
import MyoneGuide from './MyoneGuide.vue';

export default defineComponent({
  components: { DistGuide, ApiGuide, MyoneGuide },
  setup() {
    const { cmn, mo } = useCmn();
    const tab = ref('tab0');
    const items = ref([
      { id: 'tab1', name: '공통유틸' },
      { id: 'tab2', name: 'Api' },
      { id: 'tab3', name: '배포' },
    ]);

    const text = ref(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    );

    return { cmn, mo, tab, items, text };
  },
});
</script>

<style scoped>
.bg-basil {
  background-color: #fffbe6 !important;
}
</style>
