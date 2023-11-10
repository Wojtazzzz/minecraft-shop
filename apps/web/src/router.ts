import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomePage.vue';
import LoginView from '@/pages/LoginPage/LoginPage.vue';
import ShopPageVue from './pages/shopPage/ShopPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopPageVue,
        },
    ],
});

export default router;
