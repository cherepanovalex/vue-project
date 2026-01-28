<script setup lang="ts">
import News from "@/components/News/News.vue";
import ModalNews from "@/components/ModalNews.vue";
import {ref} from "vue";
import type {NewsProps} from "@/types/types.ts";

const newsList = ref<NewsProps[]>([
  {
    id:1,
    img: '/src/assets/img/news1.png',
    link: 'https://www.nur.kz/incident/crime/2334000-hishchenie-sredstv-osms-deputat-predlozhil-nakazat-eks-ministrov-zdravoohraneniya-i-ih-zamov/',
    category: 'Нарушение закона',
    desc: 'Хищение средств ФСМС: депутат предложил наказать экс-министров здравоохранения и их замов'
  },
  {
    id:2,
    img: '/src/assets/img/news2.png',
    link: 'https://www.nur.kz/society/2333994-zhiteley-mnogoetazhnyh-domov-kazahstana-predupredili-o-novoy-norme-chto-nuzhno-znat/',
    category: 'Общество',
    desc: 'Жителей многоэтажных домов Казахстана предупредили о новой норме: что нужно знать'
  },
  {
    id:3,
    img: '/src/assets/img/news3.png',
    link: 'https://www.nur.kz/incident/crime/2333985-draka-posle-dtp-v-shymkente-zakonchilas-ubiystvom-zaderzhany-chetyre-cheloveka/',
    category: 'Мир',
    desc: 'Драка после ДТП в Шымкенте закончилась убийством: задержаны подозреваемые'
  },
]);

const isModalOpen = ref(false);
const selectedNews = ref<NewsProps | null>(null);

function editNews(id: number) {
  const news = newsList.value.find(item => item.id === id);
  if (news) {
    selectedNews.value = { ...news }; // Создаем копию, чтобы не менять оригинал сразу
    isModalOpen.value = true;
  }
}

function saveNews(updatedNews: NewsProps) {
  const index = newsList.value.findIndex(item => item.id === updatedNews.id);
  if (index !== -1) {
    newsList.value[index] = updatedNews;
  }
  isModalOpen.value = false;
}
</script>

<template>
  <News :newsItems="newsList" @edit-news="editNews"/>
  <ModalNews
      :is-open="isModalOpen"
      :news-data="selectedNews"
      @close="isModalOpen = false"
      @save="saveNews"
  />
</template>

<style scoped>

</style>