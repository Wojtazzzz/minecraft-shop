<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import Container from '@/components/inc/Container.vue';
</script>

<template>
    <MainLayout>
        <Container>
            <section class="flex flex-col items-center gap-3 min-h-[50vh]">
                <h2 class="text-center text-3xl font-medium">
                    Błąd 404, strona nie została znaleziona :(
                </h2>

                <RouterLink :to="{ name: 'home' }" class="text-lg underline"
                    >Powrót na stronę główną</RouterLink
                >
            </section>
        </Container>
    </MainLayout>
</template>
