<template>
  <div>{{ data1 }} / {{ data2 }} / {{ computed1 }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

/* 공통(cmn), 알럿컨펌(mo)제공
composition api setup과 option api 에서 모두 사용 가능하도록 composable 함수로 제공 */
import useCmn from '@/domains/sample/composables/sampleCmn';

export default defineComponent({
  props: {
    prop1: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { cmn, mo } = useCmn();
    const data1 = ref('data1');
    const data2 = ref('data2');
    const computed1 = computed(() => {
      return props.prop1 + 1;
    });
    return { cmn, mo, data1, data2, computed1 };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.fnChangeHeader();
    },
    async fnChangeHeader() {
      const rslt = await this.mo.confirm({
        title: '헤더변경',
        message: '타이틀을 변경하시겠습니까?',
      });

      if (rslt) {
        this.cmn.setHeader({ title: '타이틀 변경' });
      }
    },
  },
});
</script>

<style scoped></style>
