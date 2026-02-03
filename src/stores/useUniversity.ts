import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";
import type {UniversityApi} from "@/types/university";

export const useUniversity = defineStore('useUniversity', () => {
    const data = ref<UniversityApi[]>();

    const fetchUniversityData = async () => {
        const url = "http://universities.hipolabs.com/search?country=Japan"
        return await axios.get(url)
    }
    const getUniversityData = async () => {
        try {
            const response = await fetchUniversityData();
            data.value = response.data
        } catch (error) {
            console.error(error)
        }
    }
    return{
        data,
        getUniversityData
    }
})