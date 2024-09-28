<script setup lang="ts">
import { Alert } from "@mcshop/ui/src";

const { data, status } = await useFetch("http://127.0.0.1:8000/api/products");
</script>

<template>
  <UiContainer>
    <section class="space-y-6">
      <h2
        class="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        Sklep
      </h2>

      <template v-if="status === 'error' || !data.data">
        <Alert variant="destructive">
          Coś poszło nie tak, proszę spróbować ponownie później.
        </Alert>
      </template>
      <template v-else-if="data.data.length <= 0">
        <Alert> W tej chwili sklep jest pusty. </Alert>
      </template>
      <template v-else>
        <ul
          class="grid gap-10 pt-4 justify-items-center flex-wrap sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3 xl:grid-cols-4"
        >
          <li v-for="product in data.data" class="w-72">
            <ProductCard :product="product" />
          </li>
        </ul>
      </template>
    </section>
  </UiContainer>
</template>
