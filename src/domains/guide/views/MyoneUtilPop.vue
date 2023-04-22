<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <v-card-title>유틸 가이드</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-2"> <UtilGuide /> </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-0">
          <v-row align="center" justify="center" no-gutters>
            <!-- <v-col cols="6">
              <v-btn
                color="grey-lighten-3"
                variant="flat"
                width="100%"
                rounded="0"
                height="50"
                @click="dialog = false"
              >
                취소
              </v-btn>
            </v-col> -->
            <v-col cols="12">
              <v-btn
                color="indigo-darken-3"
                variant="flat"
                width="100%"
                rounded="0"
                height="50"
                @click="dialog = false"
              >
                확인
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UtilGuide from '../components/UtilGuide.vue';

export default defineComponent({
  components: { UtilGuide },
  setup() {
    const dialog = ref(false);

    return { dialog };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.dialog = true;
    },
  },
});
</script>

<style scoped></style>
