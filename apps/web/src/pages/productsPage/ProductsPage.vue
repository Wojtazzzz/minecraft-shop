<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { useGetProducts } from './useGetProducts';
import { RouterLink } from 'vue-router';
import Container from '@/components/inc/Container.vue';
import Spinner from '@/components/icons/Spinner.vue';
import ApiErrorMessage from '@/components/inc/ApiErrorMessage.vue';
import ApiWarningMessage from '@/components/inc/ApiWarningMessage.vue';
import ButtonAsLink from '@/components/inc/ButtonAsLink.vue';

const { isSuccess, isError, isPending, products } = useGetProducts();
</script>

<template>
    <MainLayout>
        <Container>
            <section class="flex flex-col gap-6">
                <header class="w-full border-b pb-3">
                    <h2 class="font-medium text-3xl">Products list</h2>
                </header>

                <div class="w-full flex justify-center" aria-live="polite" :aria-busy="isPending">
                    <div v-if="isPending" class="mt-10">
                        <Spinner size="lg" color="accent" />
                    </div>

                    <div v-else-if="isError" class="w-full" role="alert">
                        <ApiErrorMessage
                            error="Coś poszło nie tak, proszę spróbować ponownie później"
                        />
                    </div>

                    <div v-else-if="!products" class="w-full" role="alert">
                        <ApiWarningMessage message="Brak produktów do wyświetlenia" />
                    </div>

                    <ul
                        v-else-if="isSuccess"
                        role="list"
                        class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        <li
                            v-for="{ id, name, image, price } in products"
                            :key="id"
                            class="w-64 border rounded"
                        >
                            <RouterLink :to="`/product/${id}`">
                                <article class="p-3 flex flex-col gap-4">
                                    <header class="border-b pb-2">
                                        <h3 class="font-medium">{{ name }}</h3>
                                    </header>

                                    <div class="w-full">
                                        <img
                                            :src="image"
                                            alt=""
                                            class="w-52 h-52 object-center mx-auto"
                                        />
                                    </div>

                                    <div class="text-sm">Price: {{ (price / 100).toFixed(2) }}</div>

                                    <ButtonAsLink :href="`/product/${id}`">Buy</ButtonAsLink>
                                </article>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    </MainLayout>
</template>
