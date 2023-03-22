<template>
  <header>
    <router-link to="/main">메인</router-link>
    <router-link to="/businfo">버스정보</router-link>
  </header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style></style>
