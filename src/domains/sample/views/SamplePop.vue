<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />

        <v-card-text class="pa-2"> 작성중 </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dialog = ref(false);
    const title = ref('샘플팝업');

    return { title, dialog };
  },
  mounted() {
    this.dialog = true;
  },
  methods: {
    fnClosePop() {
      this.dialog = false;
    },
  },
});
</script>

<style scoped></style>
