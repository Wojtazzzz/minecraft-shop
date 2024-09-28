<script setup lang="ts">
import {Alert, Button} from "@mcshop/ui/src";

const route = useRoute()

const { data, status } = await useFetch(`http://127.0.0.1:8000/api/products/${route.params.slug}`);
</script>

<template>
    <UiContainer>
        <template v-if="status === 'error' || !data.data">
            <Alert variant="destructive">
                Coś poszło nie tak, proszę spróbować ponownie później.
            </Alert>
        </template>
        <template v-else>
            <section>
                <div class="w-full flex justify-center">
                    <div class="w-[220px] h-[220px]">
                        <img
                            :src="data.data.image"
                            :alt="data.data.name"
                            width="220"
                            height="220"
                        />
                    </div>
                </div>

                <h2
                    class="scroll-m-20 border-b text-center pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0"
                >
                    {{ data.data.name }}
                </h2>

                <div class="w-full mt-8 max-w-4xl mx-auto">
                    <p class="text-base text-center">{{data.data.description}}</p>
                </div>

                <div class="w-full mt-8 max-w-4xl mx-auto">
                    <p class="text-base text-center">
                        <span>Cena: &nbsp;</span>
                        <span class="font-medium">{{ data.data.price }} zł (z vat)</span>
                    </p>
                </div>

                <div class="w-full flex justify-center mt-8">
                    <Button variant="default" size="lg">Kupuję</Button>
                </div>
            </section>
        </template>
    </UiContainer>
</template>