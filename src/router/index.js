import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            component: () => import("../views/home/index.vue")
        },
        {
            path: "/favor",
            component: () => import("../views/favor/index.vue")
        },
        {
            path: "/message",
            component: () => import("../views/message/index.vue")
        },
        {
            path: "/order",
            component: () => import("../views/order/index.vue")
        },
    ]
})

export default router