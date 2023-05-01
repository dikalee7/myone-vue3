<template>
  <v-table
    :theme="theme"
    fixed-header
    :height="tbData.height"
    :class="tbData.tbCls ?? 'ma-2 text-caption'"
  >
    <colgroup>
      <col
        v-for="(hd, index) in tbData.hdInfo"
        :width="hd.width"
        :key="index"
      />
    </colgroup>
    <thead>
      <tr>
        <th
          class="text-center"
          v-for="(hd, index) in tbData.hdInfo"
          :key="index"
        >
          {{ hd.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(td, i) in tbData.tdInfo" :key="i">
        <td v-for="(hd, j) in tbData.hdInfo" :key="j" v-html="td[hd.key]"></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export enum TB_THEME {
  LIGHT = 0,
  DARK,
}
export interface IFHdInfo {
  key: string;
  name: string;
  width: string;
}

export interface IFTdInfo {
  item: string;
  desc: string;
}

export interface IFTbData {
  tbCls?: string;
  tbTheme?: TB_THEME;
  hdInfo: IFHdInfo[];
  tdInfo: IFTdInfo[];
}

export default defineComponent({
  props: {
    tbData: {
      type: Object,
    },
  },
  setup(props) {
    const themeArr = ['light', 'dark'];
    const theme = computed(() => {
      return themeArr[(props.tbData as IFTbData).tbTheme ?? TB_THEME.DARK];
    });

    return { themeArr, theme };
  },
});
</script>

<style scoped></style>
