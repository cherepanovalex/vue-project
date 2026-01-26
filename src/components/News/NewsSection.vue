<script setup lang="ts">
import News from "@/components/News/News.vue";


const newsList = [
  {
    img: '/src/assets/img/news1.png',
    link: 'https://www.nur.kz/incident/crime/2334000-hishchenie-sredstv-osms-deputat-predlozhil-nakazat-eks-ministrov-zdravoohraneniya-i-ih-zamov/',
    category: 'Нарушение закона',
    desc: 'Хищение средств ФСМС: депутат предложил наказать экс-министров здравоохранения и их замов'
  },
  {
    img: '/src/assets/img/news2.png',
    link: 'https://www.nur.kz/society/2333994-zhiteley-mnogoetazhnyh-domov-kazahstana-predupredili-o-novoy-norme-chto-nuzhno-znat/',
    category: 'Общество',
    desc: 'Жителей многоэтажных домов Казахстана предупредили о новой норме: что нужно знать'
  },
  {
    img: '/src/assets/img/news3.png',
    link: 'https://www.nur.kz/incident/crime/2333985-draka-posle-dtp-v-shymkente-zakonchilas-ubiystvom-zaderzhany-chetyre-cheloveka/',
    category: 'Мир',
    desc: 'Драка после ДТП в Шымкенте закончилась убийством: задержаны подозреваемые'
  },
]

 //тут будет метод который редактирует данные
</script>

<template>
    <News :newsItems="newsList"/>
</template>

<style scoped>

</style>