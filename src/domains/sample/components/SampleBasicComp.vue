<template>
  <v-expansion-panel>
    <v-expansion-panel-title class="ma-0">
      {{ cardInfo.title }}
    </v-expansion-panel-title>
    <v-expansion-panel-text class="text-small-left">
      <v-card
        class="mt-3"
        variant="tonal"
        color="white"
        v-for="(card, i) in cardInfo.cards"
        :key="i"
      >
        <v-card-item class="pa-0" v-for="(item, j) in card.items" :key="j">
          <v-chip
            color="teal-darken-3"
            class="ma-0"
            label
            v-if="item.gbn == 'chip'"
          >
            <v-icon start icon="mdi-arrow-down-drop-circle-outline"></v-icon>
            {{ item.vtg }}
          </v-chip>

          <v-img
            :width="item.width"
            aspect-ratio="1/1"
            cover
            :src="require(`/src/assets/image/guide/${item.vtg}`)"
            v-if="item.gbn == 'img'"
          ></v-img>

          <v-card-text
            class="bg-black text-small-left ma-0 pa-1"
            v-if="item.gbn == 'txt'"
          >
            {{ item.vtg }}
          </v-card-text>

          <TableView :tbData="item.vtg" v-if="item.gbn == 'table'" />
        </v-card-item>
      </v-card>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts">
import TableView from '@/components/ui/TableView.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TableView },
  props: {
    cardInfo: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
