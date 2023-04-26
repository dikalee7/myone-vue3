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
                @click="fnOpenGuidePop('MyoneCompPop')"
              >
                컴포넌트 가이드
              </v-btn>
              <v-btn
                border
                class="text-none"
                append-icon="mdi-arrow-right-bold"
                variant="text"
                @click="fnOpenGuidePop('MyoneUtilPop')"
              >
                유틸 가이드
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
        <SelectComp
          :selectCompData="selectCompData"
          @changeValue="(v) => (selectedValue = v)"
        />
      </v-card>

      <ComponentGuide :selectedGuid="selectedValue" />
      <UtilGuide :selectedGuid="selectedValue" />
    </v-container>
    <ModalView ref="modal_view" @modalConfirm="fnConfirm" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import ComponentGuide from '@/domains/guide/components/ComponentGuide.vue';
import UtilGuide from '@/domains/guide/components/UtilGuide.vue';
import guideCmn from '@/domains/guide/composables/index';

interface IFPopRes {
  callgbn: string;
  msg: string;
}
export default defineComponent({
  components: {
    ComponentGuide,
    UtilGuide,
  },
  setup() {
    const _this = guideCmn();
    const selectCompData = ref({
      label: '구분 선택',
      items: _this.guideList.value.map((it) => {
        return { name: it.name, value: it.value };
      }),
      defaultValue: 'A',
    });

    const selectedValue = ref(selectCompData.value.defaultValue);

    //팝업 컴포넌트
    const popinfo: Ref<any> = ref({});
    popinfo.value.MyoneCompPop = {
      cpath: 'guide/views/MyoneCompPop.vue',
      cparam: { pTit: '컴포넌트 가이드' },
    };

    popinfo.value.MyoneUtilPop = {
      cpath: 'guide/views/MyoneUtilPop.vue',
      cparam: { pTit: '유틸 가이드' },
    };

    return {
      selectCompData,
      selectedValue,
      popinfo,
    };
  },
  methods: {
    fnOpenGuidePop(p: string) {
      this.$utils.cmn.setModal(this.popinfo[p]);
    },
    fnConfirm(emv: IFPopRes) {
      switch (emv.callgbn) {
        case 'MyoneCompPop':
          console.log('MyoneCompPop callback=>', emv);
          break;

        case 'MyoneUtilPop':
          console.log('MyoneUtilPop callback=>', emv);
          break;
      }
    },
  },
});
</script>

<style scoped></style>
