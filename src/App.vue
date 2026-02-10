<script setup lang="ts">

import Header from "@/components/layouts/Header/Header.vue";
import Footer from "@/components/layouts/Footer/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Header/>
    <main class="page-content">
      <router-view v-slot="{ Component }">
        <component :is="Component"/>
      </router-view>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
