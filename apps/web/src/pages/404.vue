<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import Container from '@/components/inc/Container.vue';
</script>

<template>
    <MainLayout>
        <Container>
            <section class="flex flex-col items-center gap-3 min-h-[50vh]">
                <h2 class="text-center text-3xl font-medium">Error 404, page not found :(</h2>

                <RouterLink :to="{ name: 'home' }" class="text-lg underline"
                    >Redirect to home page</RouterLink
                >
            </section>
        </Container>
    </MainLayout>
</template>
