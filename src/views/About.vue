<script setup lang="ts">
  import { ref, computed } from 'vue'

  const checkedNames = ref([])


  const sortType = ref('popular')

  const sortOptions = [
    { value: 'popular', text: 'По популярности' },
    { value: 'price-asc', text: 'По возрастанию цены' },
    { value: 'price-desc', text: 'По убыванию цены' }
  ]

  const products = ref([
    { id: 1, name: 'Телефон', price: 500, popularity: 90 },
    { id: 2, name: 'Ноутбук', price: 1200, popularity: 70 },
    { id: 3, name: 'Наушники', price: 150, popularity: 95 }
  ])

  const sortedProducts = computed(() => {
    const list = [...products.value]

    if (sortType.value === 'price-asc') {
      return list.sort((a, b) => a.price - b.price)
    }

    if (sortType.value === 'price-desc') {
      return list.sort((a, b) => b.price - a.price)
    }

    return list.sort((a, b) => b.popularity - a.popularity)
  })


</script>

<template>
  <div class="container">
    About me

    <div class="checkboxes">
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>

    <div class="select-sort">
      <select v-model="sortType">
        <option
            v-for="option in sortOptions"
            :key="option.value"
            :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>

      <ul>
        <li v-for="product in sortedProducts" :key="product.id">
          {{ product.name }} — {{ product.price }} $
        </li>
      </ul>
    </div>
  </div>



</template>

<style scoped>
  .select-sort{
    padding: 20px 0;
  }
</style>