<script setup lang="ts">
import { useGetProduct } from './useGetProduct';
import { useRoute } from 'vue-router';
import { useBuyProduct } from './useBuyProduct';
import Container from '@/components/inc/Container.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import Spinner from '@/components/icons/Spinner.vue';
import ApiErrorMessage from '@/components/inc/ApiErrorMessage.vue';
import Button from '@/components/inc/Button.vue';

const route = useRoute();
const { isSuccess, isPending, isError, product } = useGetProduct(Number(route.params.id));
const {
    buyProduct,
    isPending: isBuyProductPending,
    isError: isBuyProductError,
    error: buyProductError,
} = useBuyProduct(Number(route.params.id));
</script>

<template>
    <MainLayout>
        <Container>
            <section aria-live="polite" :aria-busy="isPending" class="max-w-4xl mx-auto">
                <div v-if="isPending" class="w-full flex justify-center">
                    <Spinner size="lg" color="accent" />
                </div>

                <div v-else-if="isError || !product" role="alert">
                    <ApiErrorMessage
                        error="Coś poszło nie tak, proszę spróbować ponownie później"
                    />
                </div>

                <article
                    v-else-if="isSuccess"
                    class="text-center w-full flex flex-col gap-y-8 items-center"
                >
                    <div v-if="isBuyProductError" role="alert" class="w-full">
                        <ApiErrorMessage :error="buyProductError?.message" />
                    </div>

                    <header class="w-full space-y-2 border-b pb-5">
                        <h2 class="text-3xl lg:text-4xl font-medium">{{ product.name }}</h2>
                        <p class="text-gray-70">{{ product.description }}</p>
                    </header>

                    <div>
                        <img :src="product.image" alt="" class="w-56 h-56 lg:w-80 lg:h-80" />
                    </div>

                    <div>Price: {{ (product.price / 100).toFixed(2) }}</div>

                    <p class="text-gray-700 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos iure nesciunt
                        nulla veniam, eos laborum voluptates enim placeat! Vel eaque recusandae esse
                        repudiandae ad odio sunt sint quis nobis. Commodi.
                    </p>

                    <div class="w-[300px]">
                        <Button type="button" @click="buyProduct" :isLoading="isBuyProductPending"
                            >Buy</Button
                        >
                    </div>
                </article>
            </section>
        </Container>
    </MainLayout>
</template>
