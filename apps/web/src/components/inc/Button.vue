<script setup lang="ts">
withDefaults(
    defineProps<{
        onClick?: () => void;
        type?: JSX.IntrinsicElements['button']['type'];
    }>(),
    {
        type: 'button',
    },
);
</script>

<template>
    <button
        class="w-full p-4 text-gray-100 hover:bg-accent/80 active:bg-accent outline-none transition-colors uppercase bg-accent rounded shadow-sm font-medium tracking-wide"
        :type="type"
        @click="onClick"
    >
        <slot></slot>
    </button>
</template>
