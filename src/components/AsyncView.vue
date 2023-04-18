<template>
  <div><component :is="loadedComp" /></div>
</template>

<script lang="ts">
import { defineComponent, computed, defineAsyncComponent } from 'vue';

export default defineComponent({
  props: {
    comp: {
      type: String,
    },
  },
  setup(props) {
    const loadedComp = computed(() => {
      return defineAsyncComponent(() => import(`${props.comp}`));
    });
    return { loadedComp };
  },
});
</script>

<style scoped></style>
