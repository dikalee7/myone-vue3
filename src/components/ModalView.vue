<template>
  <div>
    <component :is="loadedModal" ref="comp_modal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, defineAsyncComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const cpath = ref('');

    const loadedModal = computed(() => {
      if (cpath.value == '') {
        return false;
      } else {
        return defineAsyncComponent(() => {
          return import(`@/domains/${cpath.value}`);
        });
      }
    });

    return { loadedModal, cpath };
  },
  methods: {
    setModal(p: string) {
      this.cpath = p;
    },
  },
});
</script>

<style scoped></style>
