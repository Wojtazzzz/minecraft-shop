<script setup lang="ts">
withDefaults(
    defineProps<{
        href: string;
        isLoading?: boolean;
        onClick?: () => void;
    }>(),
    {
        isLoading: false,
    },
);
</script>
<template>
    <RouterLink
        :to="href"
        class="w-full text-center p-4 block text-gray-100 hover:bg-accent/80 active:bg-accent outline-none transition-colors uppercase bg-accent rounded shadow-sm font-medium tracking-wide button-outline"
        @click="onClick"
    >
        <slot></slot>
    </RouterLink>
</template>
