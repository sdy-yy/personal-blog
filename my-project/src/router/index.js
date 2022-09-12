import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/views/Home.vue";
import Article from "@/views/Article.vue";
import Message from "@/views/Message.vue";
import Project from "@/views/Project.vue";
import Author from "@/views/Author.vue";
Vue.use(VueRouter);
//配置路由
export default new VueRouter({
    routes: [
        {
            path: "/", component: Home, name: "Home"
        },
        { path: "/article", component: Article, name: "Article" },
        { path: '/message', component: Message, name: "Message" },
        { path: "/author", component: Author, name: "Author" },
        { path: "/project", component: Project, name: "Project" }
    ],
    mode: "history"
})