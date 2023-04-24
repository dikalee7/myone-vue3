<template>
  <div>
    <v-card
      :theme="theme"
      title="MyoneHeader"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'MyoneHeader'"
    >
      <v-card-text>
        헤더 영역은 App에 이미 포함되어 있으며, 페이지 제작 후 router meta
        정보에 설정하거나, 제공되는 함수를 이용하여 설정할 수 있다.
      </v-card-text>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab value="tab1">Router 설정</v-tab>
        <v-tab value="tab2">함수 호출</v-tab>
      </v-tabs>

      <v-window v-model="tab" disabled class="pa-1">
        <v-window-item value="tab1">
          <v-card color="basil">
            <v-card-text class="bg-grey-darken-4 mt-1 vSpace">
              <pre>
{
  path: '/guide',
  name: 'guide',
  component: () =>
      import(
        /* webpackChunkName: "guide" */ '@/domains/guide/views/GuideMain.vue'
      ),
  meta: { title: '가이드', hideHeader: true, hideBack: true, hideHome: true }
}

title : 헤더 제목
hideHeader : 헤더 영역 숨김
hideBack : 뒤로가기 버튼 숨김 
hideHome : 홈 버튼 숨김
              </pre>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="tab2">
          <v-card color="basil">
            <v-card-text class="bg-grey-darken-4 mt-1 vSpace">
              <pre>
this.$utils.cmn.setHeader({
  title: '타이틀 변경',
  hideHeader: false,
  hideBack: true,
  hideHome: true,
});

title : 헤더 제목
hideHeader : 헤더 영역 숨김
hideBack : 뒤로가기 버튼 숨김 
hideHome : 홈 버튼 숨김
              </pre>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>

    <v-card
      :theme="theme"
      title="SelectComp"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'SelectComp'"
    >
      <v-card-text>셀렉트박스 공통 가이드</v-card-text>
    </v-card>

    <v-card
      :theme="theme"
      title="ListComp"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'ListComp'"
    >
      <v-card-text>리스트 공통 가이드</v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    selectedGuid: {
      type: String,
      default: 'A',
    },
  },
  setup(props) {
    const theme = ref('light');
    const tab = ref('tab1');
    const sGuid = computed(() => {
      return props.selectedGuid;
    });

    return { theme, tab, sGuid };
  },
});
</script>

<style scoped></style>
