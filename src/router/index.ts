import {createRouter, createWebHistory} from 'vue-router'
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import University from "@/views/University.vue";
import News from "@/views/News.vue";

const routes = [

    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'University',
        path: '/university',
        component: University
    },
    {
        name: 'News',
        path: '/news',
        component: News
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
