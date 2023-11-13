<script setup lang="ts">
import Spinner from '../icons/Spinner.vue';

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
        class="w-full text-center p-4 text-gray-100 hover:bg-accent/80 active:bg-accent outline-none transition-colors uppercase bg-accent rounded shadow-sm font-medium tracking-wide button-outline"
        :class="{
            'bg-accent/80 cursor-wait': isLoading,
        }"
        @click="onClick"
    >
        <template v-if="isLoading">
            <Spinner size="sm" color="grey" />
        </template>

        <template v-else>
            <slot></slot>
        </template>
    </RouterLink>
</template>
