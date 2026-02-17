import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";
import type { FirebaseTaskApi, FirebaseTaskItem } from "@/types/tasks";

const URL = "https://app-vue-45344-default-rtdb.europe-west1.firebasedatabase.app/"


export const useFirebase = defineStore('useFirebase', () => {
    const data = ref<FirebaseTaskApi>({});
    const enc = (id: string) => encodeURIComponent(id);
    const list = computed(() => {
        return Object.entries(data.value).map(([id, data]) => {
            return { id, data }
        });
    })
    /*для получения даных*/
    const getFirebaseData = async () => {
        try {
            const response = await axios.get(`${URL}/tasks.json`);
            data.value = response.data
        } catch (error) {
            console.error(error)
        }
    }

    /*для отправки даных*/
    const createFirebaseElement = async (payload: FirebaseTaskItem) => {
        try {
            await axios.post(`${URL}/tasks.json`, payload);
            await getFirebaseData();
        } catch (error) {
            console.error(error)
        }
    }

    /*для изменения даных (полная замена)*/
    const putFirebaseElement = async (id: string, payload: FirebaseTaskItem) => {
        try {
            await axios.put(`${URL}/tasks/${enc(id)}.json`, payload);
            await getFirebaseData();
        } catch (error) {
            console.error(error)
        }
    }

    /*для изменения статуса (частичное обновление)*/
    const updateFirebaseElement = async (id: string, payload: Partial<FirebaseTaskItem>) => {
        try {
            await axios.patch(`${URL}/tasks/${enc(id)}.json`, payload);
            await getFirebaseData();
        } catch (error) {
            console.error(error)
        }
    }

    /*для удаления даных*/
    const deleteFirebaseElement = async (id: string) => {
        try {
            await axios.delete(`${URL}/tasks/${enc(id)}.json`);
            await getFirebaseData();
        } catch (error) {
            console.error(error)
        }
    }


    return {
        list,
        getFirebaseData,
        createFirebaseElement,
        putFirebaseElement,
        updateFirebaseElement,
        deleteFirebaseElement
    }
})