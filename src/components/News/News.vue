<script setup lang="ts">
interface NewsProps {
  img: string,
  link: string,
  category: string,
  desc: string
}

defineProps<{
  newsItems: NewsProps[],
}>()



</script>

<template>
  <div class="container">
    <div class="news-section">
      <ul class="news">
        <li v-for="news in newsItems" class="news__item">
          <a :href="news.link">
            <img :src="news.img" alt="news">
          </a>
          <div class="news__category">{{ news.category }}</div>
          <p>
            <a :href="news.link">
              {{ news.desc }}
            </a>
          </p>
<!--кнопка вызова попапа редактирования новости    -->
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.news-section {
  padding: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: space-between;
}
.news {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.news__item {
  flex: 1;
  min-width: 0;
  a {
    display: block;
    max-height: 210px;
    overflow: hidden;
  }
  img {
    max-width: 100%;
  }
  .news__category{
    font-weight: bold;
    padding: 10px 0;
    text-transform: uppercase;
  }
}

</style>