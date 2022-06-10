import './bootstrap';

import { createApp } from "vue";
import router from "./router";
import PostIndex from "./views/PostIndex.vue";

createApp({
    components: {
        PostIndex
    }
})
.use(router)
.mount('#app');