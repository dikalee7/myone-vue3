<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />

        <v-card-text class="pa-2"> <UtilGuide /> </v-card-text>

        <ActionButton
          @confirm="fnConfirm"
          :cancel="{ hide: true }"
          :confirm="{ name: '닫기', hide: false }"
        />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ActionButton from '@/components/layout/ActionButton.vue';
import PopupHeader from '@/components/layout/PopupHeader.vue';
import UtilGuide from '../components/UtilGuide.vue';

interface IFCparam {
  dFlag: boolean;
  pTit: string;
}
export default defineComponent({
  components: { UtilGuide, PopupHeader, ActionButton },
  props: {
    cparam: {
      type: Object,
    },
  },
  setup() {
    const dialog = ref(false);
    const title = ref('');

    return { dialog, title };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.dialog = true;
      this.title = (this.$props.cparam as IFCparam).pTit;
    },
    fnClosePop() {
      this.$utils.cmn.closeModal();
      this.dialog = false;
    },
    fnConfirm() {
      this.fnClosePop();
      this.$emit('modalConfirm', {
        callgbn: 'MyoneUtilPop',
        msg: 'MyoneUtilPop confirm',
      });
    },
  },
});
</script>

<style scoped></style>
