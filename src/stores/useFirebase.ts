import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";
import type { FirebaseApi, FirebaseItem } from "@/types/firebase";

const URL = "https://app-vue-45344-default-rtdb.europe-west1.firebasedatabase.app/"


export const useFirebase = defineStore('useFirebase', () => {
    const data = ref<FirebaseApi>({});
    const enc = (id: string) => encodeURIComponent(id);
    const list = computed(() => {
        return Object.entries(data.value).map(([id, data]) => {
            return { id, data }
        });
    })
    /*для получения даных*/
    const getFirebaseData = async () => {
        try {
            const response = await axios.get(`${URL}/test.json`);
            data.value = response.data
        } catch (error) {
            console.error(error)
        }
    }

    /*для отправки даных*/
    const createFirebaseElement = async (payload: FirebaseItem) => {
        try {
            await axios.post(`${URL}/test.json`, payload);
            await getFirebaseData();
        } catch (error) {
            console.error(error)
        }
    }

    /*для изменения даных*/
    const putFirebaseElement = async (id: string, payload: FirebaseItem) => {
        try {
            await axios.put(`${URL}/test/${enc(id)}.json`, payload);
            await getFirebaseData();
        } catch (error) {
            console.error(error)
        }
    }

    /*для удаления даных*/
    const deleteFirebaseElement = async (id: string) => {
        try {
            await axios.delete(`${URL}/test/${enc(id)}.json`);
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
        deleteFirebaseElement
    }
})