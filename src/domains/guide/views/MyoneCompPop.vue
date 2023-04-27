<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />
        <v-card-text class="pa-2"> <ComponentGuide /> </v-card-text>
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
import ComponentGuide from '../components/ComponentGuide.vue';

export default defineComponent({
  components: { ComponentGuide },
  // emits: ['modalConfirm'],
  props: {
    cparam: {
      type: Object,
    },
  },
  setup() {
    const dialog = ref(false);
    const title = ref('컴포넌트 가이드');

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
    //     callgbn: 'MyoneCompPop',
    //     msg: 'MyoneCompPop confirm',
    //   });
    // },
  },
});
</script>

<style scoped></style>
