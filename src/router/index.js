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
            component: () => import("../views/home/home.vue")
        },
        {
            path: "/favor",
            component: () => import("../views/favor/favor.vue")
        },
        {
            path: "/message",
            component: () => import("../views/message/message.vue"),
            meta: {
                hideTabBar:true
            }
        },
        {
            path: "/order",
            component: () => import("../views/order/order.vue")
        },
        {
            path: "/city",
            component: () => import("../views/city/city.vue"),
            // meta: {
            //     hideTabBar:true
            // }
        },
        // 搜索页面
        {
            path: "/search",
            component: () => import("../views/search/search.vue"),
            meta: {
                hideTabBar:true
            }
        },
    ]
})

export default router