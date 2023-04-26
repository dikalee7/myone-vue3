<template>
  <div>
    <PopupHeader :title="title" :closeFlg="true" @closePopup="fnClosePop" />
  </div>
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
  fnClosePop() {
    this.$utils.cmn.closeModal();
    this.dialog = false;
  },
});
</script>

<style scoped></style>
