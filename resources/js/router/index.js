import { createRouter, createWebHistory } from "vue-router";
import PostIndex from "../views/PostIndex.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PostIndex
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})