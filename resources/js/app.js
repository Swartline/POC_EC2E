// require('./bootstrap');
// window.Vue = require('vue');

import './bootstrap';

import {createApp} from "vue";
import router from "./router";
import PostIndex from "./components/PostIndex.vue";

import VueAxios from 'vue-axios'
import axios from 'axios'

createApp({
    components: {
        PostIndex
    }
})
.use(router, VueAxios, axios)
.mount('#app');

// import App from './App.vue';
// import VueRouter from 'vue-router';
// import {
//     routes
// } from './routes';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);

// const vueRouter = new VueRouter({
//     mode: 'history',
//     routes: routes
// });

// const app = new Vue({
//     el: '#app',
//     router: vueRouter,
//     render: h => h(App),
// });
