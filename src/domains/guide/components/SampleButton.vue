<template>
  <div :class="dCls">
    <v-btn
      class="ma-2 pa-2"
      color="orange-lighten-5"
      size="small"
      variant="elevated"
      prepend-icon="mdi-lightbulb-outline"
      @click="fnClickButton"
    >
      <!-- append-icon="mdi-arrow-right-bold" -->
      {{ btxt }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['goSample'],
  props: {
    dCls: {
      type: String,
      default: 'd-flex justify-end',
    },
    btxt: {
      type: String,
      default: 'sample',
    },
  },
  setup() {
    return {};
  },
  methods: {
    fnClickButton() {
      this.$emit('goSample');
    },
  },
});
</script>

<style scoped></style>
