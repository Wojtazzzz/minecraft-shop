<script setup lang="ts">
import { links, buttons } from './navLinks';
import ButtonAsLink from '@/components/inc/ButtonAsLink.vue';
</script>

<template>
    <ul role="list" class="items-center hidden space-x-8 lg:flex">
        <li v-for="({ href, name }, index) in links" :key="index">
            <RouterLink :to="href" class="font-medium tracking-wide text-gray-800">
                {{ name }}
            </RouterLink>
        </li>

        <li v-for="({ href, name }, index) in buttons" :key="index">
            <ButtonAsLink :href="href">{{ name }}</ButtonAsLink>
        </li>
    </ul>
</template>
