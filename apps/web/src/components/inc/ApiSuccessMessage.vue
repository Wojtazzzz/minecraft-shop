<script setup lang="ts">
defineProps<{
    message: string;
}>();
</script>

<template>
    <div class="px-5 py-3 text-sm font-medium rounded bg-green-100 text-green-500">
        {{ message }}
    </div>
</template>
