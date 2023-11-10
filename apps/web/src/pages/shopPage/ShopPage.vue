<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { useGetProducts } from './useGetProducts';

const { isSuccess, isError, isPending, products } = useGetProducts();
</script>

<template>
    <MainLayout>
        <section>
            <h2>Products list</h2>

            <span v-if="isPending">Loading...</span>
            <span v-else-if="isError">Error!</span>
            <span v-else-if="!products">No data</span>

            <ul v-else-if="isSuccess" role="list">
                <li v-for="product in products" :key="product.id">
                    <article>
                        <h3>{{ product.name }}</h3>
                    </article>
                </li>
            </ul>
        </section>
    </MainLayout>
</template>
