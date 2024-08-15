<script setup lang="ts">
import DesktopNav from '@/components/nav/DesktopNav.vue';
import MobileNav from '@/components/nav/MobileNav.vue';
import Container from '@/components/inc/Container.vue';
import { APP_NAME } from '@/utils/env';
</script>

<template>
    <div class="w-full shadow fixed top-0 left-0 z-30 bg-white">
        <Container>
            <div class="py-5 mx-auto lg:px-0">
                <nav class="relative flex items-center justify-between">
                    <RouterLink to="/" class="inline-flex items-center">
                        <h1 class="text-xl font-bold tracking-wide text-gray-800 uppercase">
                            {{ APP_NAME }}
                        </h1>
                    </RouterLink>

                    <DesktopNav />
                    <MobileNav />
                </nav>
            </div>
        </Container>
    </div>
</template>
