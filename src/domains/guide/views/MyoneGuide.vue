<template>
  <div>
    <v-container fluid>
      <v-card
        title="공통 컴포넌트 및 Util"
        subtitle="개발 가이드"
        prepend-icon="mdi-cube"
        class="mb-5"
      >
        <v-card-actions class="">
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <v-btn
                border
                class="text-none"
                append-icon="mdi-arrow-right-bold"
                variant="text"
                @click="fnOpenCompDialog"
              >
                컴포넌트 가이드
              </v-btn>
              <v-btn
                border
                class="text-none"
                append-icon="mdi-arrow-right-bold"
                variant="text"
                @click="fnOpenUtilDialog"
              >
                유틸 가이드
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>

      <!-- <SelectComp
        :selectCompData="selectCompData"
        @changeValue="emChangeValue"
      /> -->
      <ComponentGuide v-if="showComp" />
      <UtilGuide v-if="showUtil" />
    </v-container>
    <ModalView ref="modal_view" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import ComponentGuide from '@/domains/guide/components/ComponentGuide.vue';
import UtilGuide from '@/domains/guide/components/UtilGuide.vue';

export default defineComponent({
  components: {
    ComponentGuide,
    UtilGuide,
  },
  setup() {
    const showCompGuide = ref(false);
    const selectCompData = ref({
      label: '구분 선택',
      items: [
        { name: '전체', value: 'A' },
        { name: '컴포넌트', value: 'C' },
        { name: 'Utils', value: 'U' },
      ],
      defaultValue: 'A',
    });

    const selectedValue = ref(selectCompData.value.defaultValue);

    const showComp = computed(() => {
      return selectedValue.value == 'C' || selectedValue.value == 'A';
    });

    const showUtil = computed(() => {
      return selectedValue.value == 'U' || selectedValue.value == 'A';
    });

    return { selectCompData, selectedValue, showComp, showUtil, showCompGuide };
  },
  methods: {
    emChangeValue(v: string) {
      this.selectedValue = v;
    },

    fnOpenCompDialog() {
      // (this.$refs.comp_pop as InstanceType<typeof MyoneCompPop>).dialog = true;
      (this.$refs.modal_view as any).setModal('guide/views/MyoneCompPop.vue');
    },

    fnOpenUtilDialog() {
      // (this.$refs.util_pop as InstanceType<typeof MyoneUtilPop>).dialog = true;
      // this.$mo.modal('test');
      (this.$refs.modal_view as any).setModal('guide/views/MyoneUtilPop.vue');
    },
  },
});
</script>

<style scoped></style>
