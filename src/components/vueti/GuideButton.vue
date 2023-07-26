<template>
  <div :class="dCls">
    <v-btn
      class="ma-2 pa-2"
      :color="bcolor"
      size="small"
      variant="elevated"
      :prepend-icon="pIcon"
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
  emits: ['actionClick'],
  props: {
    dCls: {
      type: String,
      default: 'd-flex justify-end',
    },
    btxt: {
      type: String,
      default: 'sample',
    },
    pIcon: {
      type: String,
      default: 'mdi-lightbulb-outline',
    },
    bcolor: {
      type: String,
      default: 'orange-lighten-5',
    },
  },
  setup() {
    return {};
  },
  methods: {
    fnClickButton() {
      this.$emit('actionClick');
    },
  },
});
</script>

<style scoped></style>
