<template>
  <div>
    <component :is="loadedModal" :cparam="modalInfo.cparam" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  defineAsyncComponent,
  ComputedRef,
} from 'vue';
import { useStore } from 'vuex';
import { IFModal } from '@/store/modules/modalInfo';

export default defineComponent({
  setup() {
    const store = useStore();
    const modalInfo: ComputedRef<IFModal> = computed(
      () => store.getters['ModalModule/getModalInfo'],
    );

    const loadedModal = computed(() => {
      const cp = modalInfo.value.cpath;
      if (cp == '') {
        return false;
      } else {
        return defineAsyncComponent(() => {
          return import(`@/domains/${cp}`);
        });
      }
    });

    return { loadedModal, modalInfo };
  },
});
</script>

<style scoped></style>
