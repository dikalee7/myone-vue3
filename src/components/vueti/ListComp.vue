<template>
  <v-list :items="items" item-props lines="three">
    <template v-slot:subtitle="{ subtitle }">
      <div v-html="subtitle"></div>
    </template>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
