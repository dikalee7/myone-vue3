<template>
  <v-app-bar
    color="teal-darken-4"
    v-if="!hInfo.hideHeader"
    :image="require('/src/assets/image/main/back-header.jpg')"
  >
    <!-- image="https://picsum.photos/1920/1080?random" -->
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <!-- <template v-slot:append>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->
    <v-icon class="ml-5" v-if="hInfo.hideBack">mdi-wallet</v-icon>

    <v-btn icon v-if="!hInfo.hideBack" @click="goBack">
      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>

    <v-app-bar-title>{{ hInfo.title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->

    <v-btn icon v-if="!hInfo.hideHome" @click="goHome">
      <v-icon>mdi-home-circle</v-icon>
    </v-btn>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-app-bar>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      hInfo: computed(() => store.getters['HeaderModule/getHeaderInfo']),
    };
  },
  // computed: {
  //   //mapGetters를 이용할때는 아래와 같이 사용함
  //   ...mapGetters('HeaderModule', { hInfo: 'getHeaderInfo' }),
  // },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.replace('main');
    },
  },
});
</script>

<style scoped></style>
