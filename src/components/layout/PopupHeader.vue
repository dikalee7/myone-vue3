<template>
  <div>
    <v-card-title class="d-flex align-center justify-space-between">
      <span class="font-weight-bold">{{ title }}</span>
      <v-btn
        variant="text"
        icon="mdi-close"
        @click="fnClosePop"
        v-if="closeFlg"
      ></v-btn>
    </v-card-title>
    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    closeFlg: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['closePopup'],
  setup() {
    return {};
  },
  methods: {
    fnClosePop() {
      this.$emit('closePopup');
    },
  },
});
</script>

<style scoped></style>
