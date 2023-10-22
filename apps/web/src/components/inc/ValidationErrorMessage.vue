<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

defineProps<{
    name: string;
}>();
</script>

<template>
    <ErrorMessage class="text-red-400 font-medium text-sm" :name="name" as="p" />
</template>
