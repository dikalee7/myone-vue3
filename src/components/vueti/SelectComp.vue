<template>
  <v-sheet width="90%" class="mx-auto">
    <v-select
      v-model="selectedValue"
      :items="selectCompData.items"
      item-title="name"
      item-value="value"
      :label="selectCompData.label"
      @update:modelValue="changeValue"
    ></v-select>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface IFSelectCompData {
  label: string;
  items: { name: string; value: string }[];
  defaultValue: string;
}
export default defineComponent({
  emits: ['changeValue'],
  props: {
    selectCompData: {
      type: Object,
    },
  },
  setup(props) {
    const selectedValue = ref(
      (props.selectCompData as IFSelectCompData).defaultValue ?? '',
    );
    return { selectedValue };
  },
  mounted() {
    console.log(this.selectedValue);
  },
  methods: {
    changeValue() {
      this.$emit('changeValue', this.selectedValue);
    },
  },
});
</script>

<style scoped></style>
