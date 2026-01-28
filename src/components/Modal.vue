<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps<{
  firstName: string;
  lastName: string;
  value: boolean;
  age?: number;
}>()

const first = ref(props.firstName);
const last = ref(props.lastName);
const valueModal = ref(props.value);


const emit = defineEmits<{
  (e: 'update:firstName', text: string): void
  (e: 'update:lastName', text: string): void
  (e: 'update:value', value: boolean): void
}>();

function editForm() {
  emit('update:firstName', first.value);
  emit('update:lastName', last.value);
}
function close() {
  valueModal.value = false
  emit('update:value', valueModal.value);
}

watch(first, (value: string) => {
  first.value = value;
})

watch(last, (value: string) => {
  last.value = value;
})

watch(valueModal, (value: boolean) => {
  valueModal.value = value;
})

</script>

<template>
  <div class="modal" :class="{'modal_visible': props.value}">
    <form @submit.prevent="editForm">
      <input v-model="first"/>
      <input v-model="last"/>
      <button>click</button>
      <button @click="close" class="close-btn">x</button>
    </form>
  </div>
</template>

<style scoped>
.modal {
  display: none;
}
.modal_visible {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
form{
  background: #ffffff;
  padding: 40px;
  display: flex;
  position: relative;
  gap: 10px;
}
.close-btn{
  position: absolute;
  right: 0;
  top:0;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
</style>