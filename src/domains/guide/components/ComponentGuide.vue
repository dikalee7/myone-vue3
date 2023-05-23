<template>
  <div class="mb-6">
    <v-card
      :theme="theme"
      :color="cardColor"
      title="MyoneHeader"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'MyoneHeader'"
    >
      <v-card-subtitle>
        <v-chip class="ma-0" variant="elevated">
          <v-icon start icon="mdi-alert-circle-check-outline"></v-icon>
          전역 컴포넌트
        </v-chip>
      </v-card-subtitle>
      <v-card-text>
        헤더 영역은 App에 이미 포함되어 있으며, 페이지 제작 후 router meta
        정보에 설정하거나, 제공되는 함수를 이용하여 설정할 수 있다.
      </v-card-text>
      <v-divider></v-divider>

      <v-tabs v-model="tab" color="indigo-lighten-4" align-tabs="center">
        <v-tab value="tab1">Router 설정</v-tab>
        <v-tab value="tab2">함수 호출</v-tab>
      </v-tabs>

      <v-window v-model="tab" disabled class="pa-1">
        <v-window-item value="tab1">
          <v-card>
            <v-card-text class="bg-grey-darken-4 mt-0 vSpace">
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
          <v-card>
            <v-card-text class="bg-grey-darken-4 mt-0 vSpace">
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
      :color="cardColor"
      title="PopupHeader"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'PopupHeader'"
    >
      <v-card-subtitle>
        <v-chip class="ma-0" variant="elevated">
          <v-icon start icon="mdi-alert-circle-check-outline"></v-icon>
          전역 컴포넌트
        </v-chip>
      </v-card-subtitle>
      <v-card-text> 팝업 페이지 헤더 컴포넌트 </v-card-text>
      <v-divider></v-divider>

      <v-card :color="cardColor" class="pa-1">
        <v-card-text class="bg-grey-darken-4 vSpace">
          <pre>
  {{ popupHeaderGuide }}
          </pre>
        </v-card-text>
      </v-card>
    </v-card>

    <v-card
      :theme="theme"
      :color="cardColor"
      title="SelectComp"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'SelectComp'"
    >
      <v-card-subtitle>
        <v-chip class="ma-0" variant="elevated">
          <v-icon start icon="mdi-alert-circle-check-outline"></v-icon>
          전역 컴포넌트
        </v-chip>
      </v-card-subtitle>
      <v-card-text>셀렉트박스</v-card-text>
      <v-divider></v-divider>
      <GuideButton @actionClick="fnOpenSample('sample_select')" />
      <v-card :color="cardColor" class="pa-1">
        <v-card-text class="bg-grey-darken-4 vSpace">
          <pre>
  {{ selectCompGuide }}
          </pre>
        </v-card-text>
      </v-card>
    </v-card>

    <v-card
      :theme="theme"
      :color="cardColor"
      title="ListComp"
      class="mb-3"
      v-if="sGuid == 'A' || sGuid == 'ListComp'"
    >
      <v-card-text>리스트 공통 가이드</v-card-text>
      <v-divider></v-divider>
      <GuideButton @actionClick="fnOpenSample('sample_list')" />
    </v-card>
    <SampleSelect ref="sample_select" />
    <SampleList ref="sample_list" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import SampleSelect from '@/domains/sample/views/SampleSelect.vue';
import GuideButton from '../../../components/vueti/GuideButton.vue';
import SampleList from '@/domains/sample/views/SampleList.vue';
export default defineComponent({
  components: { SampleSelect, GuideButton, SampleList },
  props: {
    selectedGuid: {
      type: String,
      default: 'A',
    },
  },
  setup(props) {
    const cardColor = ref('blue-grey-darken-2');
    const theme = ref('light');
    const tab = ref('tab1');
    const sGuid = computed(() => {
      return props.selectedGuid;
    });

    const popupHeaderGuide = ref(`
- 예시
<template>
  <div>
    <PopupHeader :title="title" :closeFlg="true" @closePopup="fnClosePop" />
    (...중략...)
  </div>
</template>

- 옵션
title : 헤더 제목
closeFlg : 헤더 우측 X 버튼 표시 여부 (생략가능 기본 true)
closePopup : 헤더 우측 X 버튼 클릭시 동작 연결

- 샘플 
/src/domains/sample/views/SamplePop.vue
    `);

    const selectCompGuide = ref(`
- 예시
<template>
  <div>
  (...중략...)
    <SelectComp
        :selectCompData="selectCompData"
        @changeValue="(v) => (selectedValue = v)"
      />
  (...중략...)
  </div>
</template>

- 옵션
selectCompData : 셀렉트 박스를 구성할 DATA
changeValue : 선택 변경시 값 변경

- 샘플 
/src/domains/sample/views/SampleSelect.vue
    `);

    return { cardColor, theme, tab, sGuid, popupHeaderGuide, selectCompGuide };
  },
  methods: {
    fnOpenSample(compRef: string) {
      (this.$refs[compRef] as InstanceType<any>).fnOpenPop();
    },
  },
});
</script>

<style scoped></style>
