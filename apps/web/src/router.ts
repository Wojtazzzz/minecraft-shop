import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/loginPage/LoginPage.vue';
import ProductsPage from './pages/productsPage/ProductsPage.vue';
import ProductPage from './pages/productPage/ProductPage.vue';
import NotFoundPage from './pages/404.vue';
import { useQueryClient } from '@tanstack/vue-query';
import { getAccountQK } from './utils/queryKeys';
import { wretch } from './utils/wretch';
import { meResponseSchema } from './utils/schemas/meResponseSchema';

export const router = createRouter({
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
            name: 'products',
            component: ProductsPage,
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: NotFoundPage,
        },
    ],
});

router.beforeEach(async () => {
    const queryClient = useQueryClient();

    await queryClient.prefetchQuery({
        queryKey: getAccountQK(),
        queryFn: async function () {
            return await wretch
                .get('/auth/me')
                .unauthorized(() => {
                    return null;
                })
                .json((data) => {
                    if (!meResponseSchema.isValidSync(data)) {
                        return null;
                    }

                    return data;
                });
        },
    });
});
