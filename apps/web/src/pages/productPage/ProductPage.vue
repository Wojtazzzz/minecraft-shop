<script setup lang="ts">
import { useGetProduct } from './useGetProduct';
import { useRoute } from 'vue-router';
import ButtonAsLink from '@/components/inc/ButtonAsLink.vue';

const route = useRoute();
const { isSuccess, isPending, isError, product } = useGetProduct(Number(route.params.id));
</script>

<template>
    <MainLayout>
        <section>
            <span v-if="isPending">Loading...</span>
            <span v-else-if="isError || !product">Error!</span>

            <article v-else-if="isSuccess">
                <h2>Product {{ product.name }}</h2>
                <h3>{{ product.description }}</h3>

                <div>
                    <img :src="product.image" alt="" width="150" height="150" />
                </div>

                <div>Price: {{ product.price.toFixed(2) }}</div>

                <ButtonAsLink href="/">Kupuję</ButtonAsLink>
            </article>
        </section>
    </MainLayout>
</template>
