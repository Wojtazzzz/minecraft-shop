import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                retry: 1,
                staleTime: 1000 * 6,
                refetchInterval: 1000 * 30,
            },
            mutations: {
                retry: 1,
            },
        },
    },
});

app.mount('#app');
