<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useNews } from "@/stores/useNews.ts";
import NewsElement from "@/components/NewsApi/NewsElement.vue";

const newsStore = useNews();
const { data } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getNewsData();
});
</script>

<template>
  <div class="container">
    <h1 class="news-title">Новости</h1>

    <div v-if="data" class="news-list">
      <NewsElement
        v-for="article in data.articles"
        :key="article.url"
        :article="article"
      />
    </div>

    <div v-else class="news-loading">
      Загрузка новостей...
    </div>
  </div>
</template>

<style scoped>
.news-title {
  margin-bottom: 24px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.news-loading {
  font-size: 16px;
  color: #666;
}
</style>