import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
//配置路由
export default new VueRouter({
    routes: [
        {
            path: "/", component: Home
        }
    ]
})