<script setup lang="ts">
import type { newsApi } from "@/types/news";

type NewsArticle = newsApi["articles"][number];

const props = defineProps<{
  article: NewsArticle;
}>();
</script>

<template>
  <article class="news-card">
    <a
      class="news-card__image-wrapper"
      :href="props.article.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        v-if="props.article.urlToImage"
        class="news-card__image"
        :src="props.article.urlToImage"
        :alt="props.article.title"
      />
      <div v-else class="news-card__image--placeholder">
        Нет изображения
      </div>
    </a>

    <div class="news-card__body">
      <a
        class="news-card__title"
        :href="props.article.url"
        target="_blank"
      >
        {{ props.article.title }}
      </a>

      <p class="news-card__description">
        {{ props.article.description }}
      </p>

      <div class="news-card__footer">
        <span v-if="props.article.author" class="news-card__author">
          {{ props.article.author }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-card:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
}

.news-card__image-wrapper {
  display: block;
  position: relative;
  overflow: hidden;
  background: #f2f2f2;
}

.news-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.news-card:hover .news-card__image {
  transform: scale(1.03);
}

.news-card__image--placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 14px;
}

.news-card__body {
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.news-card__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: #1a1a1a;
  text-decoration: none;
}

.news-card__title:hover {
  text-decoration: underline;
}

.news-card__description {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
}

.news-card__footer {
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #777;
}

.news-card__author {
  font-style: italic;
}

@media (max-width: 600px) {
  .news-card__image {
    height: 180px;
  }

  .news-card__title {
    font-size: 16px;
  }
}
</style>