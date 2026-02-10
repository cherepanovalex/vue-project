<script setup lang="ts">
import logo from '../../../assets/img/logo-red.svg'
import Menu from "@/components/layouts/Header/Menu.vue";
import Profile from "@/components/Profile.vue";


const listMenu = [
  {
    link: '/about',
    name: 'About'
  },
  {
    link: '/university',
    name: 'University'
  },
  {
    link: '/news',
    name: 'News'
  },
  {
    link: '/firebase',
    name: 'Firebase'
  },
]
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img :src="logo" alt="logo">
        </router-link>
      </div>
      <Menu :menuItems="listMenu"/>
    </div>
    <Profile/>
  </header>
</template>

<style scoped>
header {
  padding: 20px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>