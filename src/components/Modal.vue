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
    </form>
    <button @click="close">close</button>
  </div>
</template>

<style scoped>
.modal {
  display: none;
}
.modal_visible {
  display: block;
}
</style>