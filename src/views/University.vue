<script setup lang="ts">
  import {useUniversity} from "@/stores/useUniversity.ts";
  import {storeToRefs} from "pinia";
  import {onMounted} from "vue";

  const universityStore = useUniversity();
  const {data} = storeToRefs(universityStore);
  onMounted(async () => {
    await universityStore.getUniversityData();
  })
</script>

<template>
  <div class="container">
    <div v-for="item in data">
      <div>{{item.name}}</div>
      <a :href="page" v-for="page in item.web_pages" target="_blank">{{page}}</a>
    </div>
  </div>
</template>

<style scoped>

</style>