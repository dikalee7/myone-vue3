<template>
  <v-card class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6"> 개발환경구축 </v-card-title>

                <v-card-subtitle> VUE3+TYPESCRIPT </v-card-subtitle>

                <v-card-text> 개발 환경 및 공통작업 진행하며 정리 </v-card-text>

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                    @click="goGuide('guide')"
                  >
                    가이드
                  </v-btn>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                    @click="goGuide('distGuide')"
                  >
                    배포
                  </v-btn>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                    @click="goGuide('apiGuide')"
                  >
                    API
                  </v-btn>
                </v-card-actions>
              </div>

              <!-- <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar> -->
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="#00796B" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6"> 컨텐츠1 </v-card-title>

                <v-card-subtitle> 제공 예정 </v-card-subtitle>

                <v-card-text> 컨텐츠 구상중 </v-card-text>

                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    이동
                  </v-btn>
                </v-card-actions>
              </div>

              <!-- <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar> -->
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="#FFAB40" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6"> 컨텐츠2 </v-card-title>

                <v-card-subtitle> 제공 예정 </v-card-subtitle>

                <v-card-text> 컨텐츠 구상중 </v-card-text>

                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    이동
                  </v-btn>
                </v-card-actions>
              </div>

              <!-- <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar> -->
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  methods: {
    goGuide(path: string) {
      this.$router.push(path);
    },
  },
});
</script>

<style scoped></style>
