<script setup lang="ts">

  interface ListProps {
    link:string,
    name:string
  }

  defineProps<{
    menuItems:ListProps[],
  }>()
</script>

<template>
  <ul class="menu">
    <li v-for="item in menuItems"><a :href="item.link">{{item.name}}</a></li>
  </ul>
</template>

<style scoped>


.menu{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  li{
    list-style: none;
  }
}

</style>