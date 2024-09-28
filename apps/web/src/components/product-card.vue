<script setup lang="ts">
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mcshop/ui/src";
import { NuxtLink } from "#components";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

defineProps<{
  product: Product;
}>();
</script>

<template>
  <Card>
    <CardHeader>
      <div class="text-center text-xl min-h-10">
        <CardTitle>{{ prettyTruncate(product.name, 40) }}</CardTitle>
      </div>
    </CardHeader>

    <div class="my-3">
      <CardContent>
        <div class="w-full flex flex-col items-center space-y-6">
            <div class="w-[120px] h-[120px]">
                <img
                    :src="product.image"
                    :alt="product.name"
                    width="120"
                    height="120"
                />
            </div>

          <p>
            <span>Cena: &nbsp;</span>
            <span class="font-medium">{{ product.price }} zł (z vat)</span>
          </p>
        </div>
      </CardContent>
    </div>

    <CardFooter>
      <div class="w-full flex justify-center">
        <Button :as="NuxtLink" :to="`/products/${product.name}`" variant="default" size="lg">Kupuję</Button>
      </div>
    </CardFooter>
  </Card>
</template>
