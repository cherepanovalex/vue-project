<script setup lang="ts">
import {ref} from "vue";
import Modal from "@/components/Modal.vue";

const firstName = ref("abdrashdi");
const lastName = ref("raziyev");
const isOpen = ref(false);

const open = () => {
  isOpen.value = true;
}
</script>

<template>
  <div class="container">
    <h2>{{firstName}} {{lastName}}</h2>
    <button @click="open">Open Modal</button>
    <Modal
        v-model:firstName="firstName"
        v-model:lastName="lastName"
        v-model:value="isOpen"
    />
  </div>
</template>

<style scoped>
</style>