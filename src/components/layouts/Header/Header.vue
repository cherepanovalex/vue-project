<script setup lang="ts">
import logo from '../../../assets/img/logo-red.svg'
import Menu from "@/components/layouts/Header/Menu.vue";
import Profile from "@/components/Profile.vue";


const listMenu = [
  {
    link: 'https://39olimp.com/index.php?page=vgames',
    name: 'link1'
  },
  {
    link: 'https://39olimp.com/betgames',
    name: 'link2'
  },
  {
    link: 'https://39olimp.com/index.php?page=line&action=1',
    name: 'link3'
  },
  {
    link: 'https://39olimp.com/live',
    name: 'link4'
  },
]
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <a href="#" class="logo">
          <img :src="logo" alt="logo">
        </a>
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