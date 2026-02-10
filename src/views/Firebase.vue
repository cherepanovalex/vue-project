<script setup lang="ts">
  import {useFirebase} from "@/stores/useFirebase";
  import {onMounted, ref, reactive} from "vue";
  import {storeToRefs} from "pinia";
  import type {FirebaseItem} from "@/types/firebase";

  const firebaseStore = useFirebase();
  const {list} = storeToRefs(firebaseStore);

  const isModalOpen = ref(false);
  const isEditing = ref(false);
  const currentId = ref<string | null>(null);

  const formData = reactive<FirebaseItem>({
    name: '',
    surname: ''
  });

  const openModal = () => {
    isModalOpen.value = true;
    resetForm();
  };

  const closeModal = () => {
    isModalOpen.value = false;
    resetForm();
  };

  const resetForm = () => {
    formData.name = '';
    formData.surname = '';
    isEditing.value = false;
    currentId.value = null;
  };

  const handleCreate = async () => {
    if (!formData.name || !formData.surname) return;
    await firebaseStore.createFirebaseElement({...formData});
    resetForm();
  };

  const handleEdit = (id: string, item: FirebaseItem) => {
    currentId.value = id;
    formData.name = item.name;
    formData.surname = item.surname;
    isEditing.value = true;
  };

  const handleUpdate = async () => {
    if (!currentId.value || !formData.name || !formData.surname) return;
    await firebaseStore.putFirebaseElement(currentId.value, {...formData});
    resetForm();
  };

  const handleDelete = async (id: string) => {
    await firebaseStore.deleteFirebaseElement(id);
  };

  onMounted(() => {
    firebaseStore.getFirebaseData();
  })
</script>

<template>
  <div class="container">
    <button @click="openModal" class="btn-primary">Пользователи</button>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Пользователи</h2>
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>

        <div class="user-list">
          <div v-for="item in list" :key="item.id" class="user-item">
            <div class="user-info">
              <strong>{{ item.data.name }} {{ item.data.surname }}</strong>
            </div>
            <div class="user-actions">
              <button @click="handleEdit(item.id, item.data)" class="btn-edit">Edit</button>
              <button @click="handleDelete(item.id)" class="btn-delete">Delete</button>
            </div>
          </div>
          <div v-if="list.length === 0" class="empty-state">Не найдено</div>
        </div>

        <div class="form-section">
          <h3>{{ isEditing ? 'Редактировать' : 'Создать нового' }}</h3>
          <input v-model="formData.name" placeholder="Имя" />
          <input v-model="formData.surname" placeholder="Фамилия" />
          <div class="form-actions">
             <button v-if="isEditing" @click="handleUpdate" class="btn-save">Обновить</button>
             <button v-else @click="handleCreate" class="btn-create">Создать</button>
             <button v-if="isEditing" @click="resetForm" class="btn-cancel">Отменить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.btn-primary {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  color: #333;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.user-actions gap {
  display: flex;
  gap: 8px;
}

.btn-edit, .btn-delete, .btn-save, .btn-create, .btn-cancel {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
}

.btn-edit { background-color: #3498db; color: white; }
.btn-delete { background-color: #e74c3c; color: white; }
.btn-save, .btn-create { background-color: #42b883; color: white; }
.btn-cancel { background-color: #95a5a6; color: white; }

.form-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
}

input {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.empty-state {
  text-align: center;
  color: #666;
  padding: 20px;
}
</style>