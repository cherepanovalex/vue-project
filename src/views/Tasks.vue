<script setup lang="ts">
  import {useFirebase} from "@/stores/useTasks.ts";
  import {onMounted, ref, computed} from "vue";
  import {storeToRefs} from "pinia";

  const firebaseStore = useFirebase();
  const {list} = storeToRefs(firebaseStore);

  const newTaskTitle = ref('');

  const todoList = computed(() => list.value.filter(task => task.data.status === 'TODO'));
  const inProgressList = computed(() => list.value.filter(task => task.data.status === 'INPROGRESS'));
  const doneList = computed(() => list.value.filter(task => task.data.status === 'DONE'));

  const addTask = async () => {
    if (newTaskTitle.value.trim()) {
      await firebaseStore.createFirebaseElement({
        title: newTaskTitle.value,
        status: 'TODO'
      });
      newTaskTitle.value = '';
    }
  };

  const updateStatus = async (id: string, status: 'TODO' | 'INPROGRESS' | 'DONE') => {
      await firebaseStore.updateFirebaseElement(id, {
        status
      });
  };

  onMounted(() => {
    firebaseStore.getFirebaseData();
  });

</script>

<template>
  <div class="container">
    <div class="add-task">
      <input type="text" v-model="newTaskTitle" placeholder="Add task" @keyup.enter="addTask">
      <button @click="addTask">Add</button>
    </div>
    <div class="tasks">
      <div class="task-column">
        <div class="task-title">TODO</div>
        <div class="task-list">
          <div v-for="task in todoList" :key="task.id" class="task-item">
            <div>{{ task.data.title }}</div>
            <button @click="updateStatus(task.id, 'INPROGRESS')">Далее</button>
          </div>
        </div>
      </div>
      <div class="task-column">
        <div class="task-title">IN PROGRESS</div>
        <div class="task-list">
          <div v-for="task in inProgressList" :key="task.id" class="task-item">
            <div>{{ task.data.title }}</div>
            <div class="buttons">
              <button @click="updateStatus(task.id, 'TODO')">Назад</button>
               <button @click="updateStatus(task.id, 'DONE')">Далее</button>
            </div>
          </div>
        </div>
      </div>
      <div class="task-column">
        <div class="task-title">DONE</div>
        <div class="task-list">
           <div v-for="task in doneList" :key="task.id" class="task-item">
            <div>{{ task.data.title }}</div>
             <div class="buttons">
               <button @click="updateStatus(task.id, 'INPROGRESS')">Назад</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-task {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;

  input {
    padding: 10px;
    width: 500px;
  }

  button {
    min-width: 100px;
  }
}

.tasks {
  display: flex;
  gap: 15px;
}

.task-column {
  flex: 1;
  text-align: center;
  padding: 15px;
  background-color: #eee;
  border-radius: 8px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.task-item {
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.buttons {
  display: flex;
  gap: 5px;
  justify-content: center;
}
</style>