import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import UserPage from "@/views/UserPage.vue";
import EditItemPage from "@/views/EditItemPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: HomePage,
        name: "home"
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login"
    },
    {
        path: "/user",
        component: UserPage,
        name: "user"
    },
    {
        path: "/item/:id",
        component: EditItemPage,
        name: "edit-item"
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage,
        name: "not-found",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.VUE_APP_BASE_URL,
    routes
});

export default router;
