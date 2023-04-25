<template>
  <div>
    <PopupHeader :title="title" :closeFlg="true" @closePopup="fnClosePop" />
  </div>
</template>

<script lang="ts">
import PopupHeader from '@/components/layout/PopupHeader.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { PopupHeader },
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
