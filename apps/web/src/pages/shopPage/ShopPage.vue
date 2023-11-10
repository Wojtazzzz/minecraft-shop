<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { useGetProducts } from './useGetProducts';
import { RouterLink } from 'vue-router';

const { isSuccess, isError, isPending, products } = useGetProducts();
</script>

<template>
    <MainLayout>
        <section>
            <h2>Products list</h2>

            <span v-if="isPending">Loading...</span>
            <span v-else-if="isError">Error!</span>
            <span v-else-if="!products">No data</span>

            <ul v-else-if="isSuccess" role="list" class="flex flex-wrap gap-5">
                <li v-for="{ id, name, image, price } in products" :key="id" class="w-64 border">
                    <RouterLink :to="`/product/${id}`">
                        <article>
                            <h3>{{ name }}</h3>

                            <div>
                                <img :src="image" alt="" width="150" height="150" />
                            </div>

                            <div>Price: {{ price.toFixed(2) }}</div>
                        </article>
                    </RouterLink>
                </li>
            </ul>
        </section>
    </MainLayout>
</template>
