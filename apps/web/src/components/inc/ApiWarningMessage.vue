<script setup lang="ts">
defineProps<{
    message: string;
}>();
</script>

<template>
    <div class="w-full px-5 py-3 text-sm font-medium rounded bg-yellow-100 text-yellow-700">
        {{ message }}
    </div>
</template>
