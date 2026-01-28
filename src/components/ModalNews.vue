<script setup lang="ts">
import { ref, watch } from 'vue';
import type { NewsProps } from '@/types/types.ts';

const props = defineProps<{
  isOpen: boolean;
  newsData: NewsProps | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'save', updatedNews: NewsProps): void;
}>();

const link = ref('');
const category = ref('');
const desc = ref('');

// Следим за изменением newsData, чтобы заполнить поля при открытии
watch(() => props.newsData, (newVal) => {
  if (newVal) {
    link.value = newVal.link;
    category.value = newVal.category;
    desc.value = newVal.desc;
  }
}, { immediate: true });

function handleSave() {
  if (props.newsData) {
    emit('save', {
      ...props.newsData,
      link: link.value,
      category: category.value,
      desc: desc.value,
    });
  }
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <h3>Редактировать новость</h3>
      <form @submit.prevent="handleSave">
        <div class="form-group">
          <label>Ссылка (Link):</label>
          <input v-model="link" type="text" />
        </div>
        <div class="form-group">
          <label>Категория (Category):</label>
          <input v-model="category" type="text" />
        </div>
        <div class="form-group">
          <label>Описание (Description):</label>
          <textarea v-model="desc" rows="4"></textarea>
        </div>
        <div class="modal-actions">
          <button type="submit" class="btn-save">Применить</button>
          <button type="button" @click="emit('close')" class="btn-close">Закрыть</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
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
.modal-content {
  background: white;
  padding: 25px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
input, textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.modal-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
.btn-save {
  background-color:  green;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-close {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>