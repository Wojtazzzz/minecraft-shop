import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/loginPage/LoginPage.vue';
import ShopPage from './pages/shopPage/ShopPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopPage,
        },
    ],
});

export default router;
