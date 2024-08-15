import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import Tres from '@tresjs/core';

const app = createApp(App);

app.use(Tres);
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                retry: 0,
                staleTime: 1000 * 6,
                refetchInterval: 1000 * 30,
            },
            mutations: {
                retry: 0,
            },
        },
    },
});

app.mount('#app');
