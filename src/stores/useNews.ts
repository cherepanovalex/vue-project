import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";
import type {newsApi} from "@/types/news";

export const useNews = defineStore('useNews', () => {
    const data = ref<newsApi>();

    const fetchNewsData = async () => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7eb7d540082648889635783ae5fe514a"
        return await axios.get(url)
    }
    const getNewsData = async () => {
        try {
            const response = await fetchNewsData();
            data.value = response.data
        } catch (error) {
            console.error(error)
        }
    }
    return{
        data,
        getNewsData
    }
})