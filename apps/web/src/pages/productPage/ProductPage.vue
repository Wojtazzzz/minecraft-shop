<script setup lang="ts">
import { useGetProduct } from './useGetProduct';
import { useRoute } from 'vue-router';
import { useBuyProduct } from './useBuyProduct';

const route = useRoute();
const { isSuccess, isPending, isError, product } = useGetProduct(Number(route.params.id));
const { buyProduct } = useBuyProduct(Number(route.params.id));
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

                <form novalidate @submit.prevent="buyProduct" class="flex flex-col gap-y-4 mt-5">
                    <Button type="submit">Kupuję</Button>
                </form>
            </article>
        </section>
    </MainLayout>
</template>
