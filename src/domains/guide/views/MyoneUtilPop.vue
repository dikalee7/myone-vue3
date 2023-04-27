<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />

        <v-card-text class="pa-2"> <UtilGuide /> </v-card-text>

        <!-- <ActionButton
          @confirm="fnConfirm"
          :cancel="{ hide: true }"
          :confirm="{ name: '닫기', hide: false }"
        /> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UtilGuide from '../components/UtilGuide.vue';

export default defineComponent({
  components: { UtilGuide },
  // emits: ['modalConfirm'],
  props: {
    cparam: {
      type: Object,
    },
  },
  setup() {
    const dialog = ref(false);
    const title = ref('유틸 가이드');

    return { dialog, title };
  },
  methods: {
    fnOpenPop() {
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
    // fnConfirm() {
    //   this.fnClosePop();
    //   this.$emit('modalConfirm', {
    //     callgbn: 'MyoneUtilPop',
    //     msg: 'MyoneUtilPop confirm',
    //   });
    // },
  },
});
</script>

<style scoped></style>
