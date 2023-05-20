<template>
  <v-list v-model="selection" :items="listData" item-props lines="two">
    <template v-slot:subtitle="item">
      <div v-html="item.subtitle"></div>
    </template>
    <template v-slot:append="{ item }">
      <v-btn
        class="listbtn"
        color="grey-lighten-1"
        :icon="item.icon || 'mdi-chevron-right'"
        variant="text"
        @click="emCallback(item.data)"
      ></v-btn>
    </template>
  </v-list>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

interface IFListData {
  data?: object;
  title?: string;
  subtitle?: string;
  type?: string;
  inset?: boolean;
  icon?: string;
}
export default defineComponent({
  emits: ['emCallback'],
  props: {
    items: {
      type: Object,
    },
    titleName: {
      type: String,
    },
    subTitleName: {
      type: String,
    },
    iconName: {
      type: String,
    },
  },
  setup(props) {
    const selection = ref({});
    const listData = computed(() => {
      return props.items.reduce((r: IFListData[], o: any) => {
        r.push(
          {
            data: o,
            title: o[props.titleName],
            subtitle: o[props.subTitleName],
            icon: props.iconName,
          },
          { type: 'divider', inset: false },
        );
        return r;
      }, []);
    });
    return { listData, selection };
  },
  methods: {
    emCallback(selectedData: any) {
      this.$emit('emCallback', selectedData);
    },
  },
});
</script>

<style scoped>
.listbtn {
  height: 72px;
  width: 36px;
}
</style>
