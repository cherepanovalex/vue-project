<script setup lang="ts">

import Header from "@/components/layouts/Header/Header.vue";
import Footer from "@/components/layouts/Footer/Footer.vue";
</script>

<template>
  <Header/>
  <router-view v-slot="{ Component }">
    <component :is="Component"/>
  </router-view>
  <Footer/>
</template>

<style scoped></style>
