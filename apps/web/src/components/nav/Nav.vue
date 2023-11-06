<script setup lang="ts">
import DesktopNav from '@/components/nav/DesktopNav.vue';
import MobileNav from '@/components/nav/MobileNav.vue';
</script>

<template>
    <div class="w-full shadow">
        <div
            class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
        >
            <nav class="relative flex items-center justify-between">
                <RouterLink to="/" class="inline-flex items-center"
                    ><h1 class="text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Minecraft Shop
                    </h1></RouterLink
                >

                <DesktopNav />
                <MobileNav />
            </nav>
        </div>
    </div>
</template>
