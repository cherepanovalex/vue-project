<script setup lang="ts">

const socialItems = [
  {
    img:  '/src/assets/img/facebook.png',
    link: 'https://www.facebook.com/',
  },
  {
    img: '/src/assets/img/instagram.png',
    link: 'https://www.instagram.com',
  },
  {
    img: '/src/assets/img/twitter.png',
    link: 'https://www.twitter.com',
  },
]
</script>

<template>
  <footer>
    <div class="container">
      <div class="social-links">
        <div class="title">
          Мы в социальных сетях
        </div>
        <ul class="social-icons">
          <li v-for="item in socialItems">
            <a :href="item.link">
              <img :src="item.img" alt="news">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 20px 0;
  background-color: #f5f5f5;
}

.title {
  font-weight: bold;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  gap: 15px;

  img {
    width: 30px;
    height: 30px;
  }
}
</style>