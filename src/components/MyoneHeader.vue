<template>
  <v-app-bar color="teal-darken-4" v-if="hInfo.isShow">
    <!-- image="https://picsum.photos/1920/1080?random" -->
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <!-- <template v-slot:append>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->
    <v-icon class="ml-5" v-if="!hInfo.isBack">mdi-one-up</v-icon>

    <v-btn icon v-if="hInfo.isBack" @click="goBack">
      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>

    <v-app-bar-title>{{ hInfo.title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->

    <v-btn icon v-if="hInfo.isHome" @click="goHome">
      <v-icon>mdi-home-circle</v-icon>
    </v-btn>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-app-bar>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { IFHeader } from '@/store/modules/headerInfo';

export default defineComponent({
  setup() {
    const store = useStore();
    // const hInfo: IFHeader = store.getters['HeaderModule/getHeaderInfo'];
    const { value } = computed(
      () => store.getters['HeaderModule/getHeaderInfo'] as IFHeader,
    );
    // const isHome = computed(() => hInfo.isHome);
    // const isBack = computed(() => hInfo.isBack);

    return {
      hInfo: value,
    };
  },
  methods: {
    goBack() {
      if (window.history.state.back === null) {
        this.goHome();
      } else {
        this.$router.back();
      }
    },
    goHome() {
      this.$router.push('/');
    },
  },
});
</script>

<style scoped></style>
