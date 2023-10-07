<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    name: string;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
}>();
</script>

<template>
    <input
        :type="type"
        :name="name"
        class="w-full rounded bg-[#EFF4F6] p-3 outline-none shadow"
        :placeholder="placeholder"
    />
</template>
