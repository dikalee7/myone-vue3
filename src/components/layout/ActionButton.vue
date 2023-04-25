<template>
  <div>
    <v-divider></v-divider>
    <v-card-actions class="pa-0">
      <v-row align="center" justify="center" no-gutters>
        <v-col :cols="colcnt" v-if="!cancel.hide">
          <v-btn
            color="grey-lighten-3"
            variant="flat"
            width="100%"
            rounded="0"
            height="50"
            @click="fnCancel"
          >
            {{ cancel.name }}
          </v-btn>
        </v-col>
        <v-col :cols="colcnt" v-if="!confirm.hide">
          <v-btn
            color="indigo-darken-3"
            variant="flat"
            width="100%"
            rounded="0"
            height="50"
            @click="fnConfirm"
          >
            {{ confirm.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface IFButton {
  name?: string;
  show?: boolean;
}

export default defineComponent({
  emits: ['confirm', 'cancel'],
  props: {
    confirm: {
      type: Object,
      default: () => {
        return {
          name: '확인',
          hide: false,
        } as IFButton;
      },
    },
    cancel: {
      type: Object,
      default: () => {
        return {
          name: '취소',
          hide: false,
        } as IFButton;
      },
    },
  },
  setup() {
    const colcnt = ref(6);

    return { colcnt };
  },
  mounted() {
    if (this.confirm.hide) this.colcnt = this.colcnt * 2;
    if (this.cancel.hide) this.colcnt = this.colcnt * 2;
  },
  methods: {
    fnConfirm() {
      this.$emit('confirm');
    },
    fnCancel() {
      this.$emit('cancel');
    },
  },
});
</script>

<style scoped></style>
