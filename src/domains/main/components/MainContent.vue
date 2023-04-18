<template>
  <v-card theme="dark" :image="ctImage">
    <template v-slot:image>
      <v-img :gradient="ctInfo.gradient"> </v-img>
    </template>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h6"> {{ ctInfo.title }} </v-card-title>

        <v-card-subtitle> {{ ctInfo.subtitle }} </v-card-subtitle>

        <!-- eslint-disable -->
        <v-card-text v-html="sanitizeText"></v-card-text>
        <!-- eslint-enable -->

        <v-card-actions v-if="ctInfo.actions">
          <v-btn
            class="ms-2"
            variant="outlined"
            size="small"
            @click="fnAction(act.emnm, act.empr)"
            v-for="(act, i) in ctInfo.actions"
            :key="i"
          >
            {{ act.name }}
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import sanitizeHtml from 'sanitize-html';

export interface IFActions {
  name: string;
  emnm: string;
  empr: object;
}

export interface IFCtInfo {
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  gradient?: string;
  actions?: IFActions[];
}

export default defineComponent({
  emits: ['goPage'],
  props: {
    ctInfo: {
      type: Object,
    },
  },
  setup(props, context) {
    const { emit } = context;

    const t = computed(() => {
      return props.ctInfo as IFCtInfo;
    });

    const sanitizeText = sanitizeHtml(t.value.text);
    const ctImage = t.value.image
      ? require(`/src/assets/image/main/${t.value.image}`)
      : '';

    const fnAction = (enm: string, empr: object) => {
      // emit 명에 따라 분기 처리 될 수 있도록(확장성 고려)
      switch (enm) {
        case 'goPage':
          emit('goPage', empr);
          break;
        default:
          break;
      }
    };

    return { fnAction, sanitizeText, ctImage };
  },
});
</script>

<style scoped></style>
