import { createRouter, createWebHistory } from "vue-router";
import PostIndex from "../components/PostIndex.vue";
import ProductList from '../components/ProductList.vue';
import CreateProduct from '../components/CreateProduct.vue';
import EditProduct from '../components/EditProduct.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PostIndex
    },
    {
        name: 'List',
        path: '/list',
        component: ProductList
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})