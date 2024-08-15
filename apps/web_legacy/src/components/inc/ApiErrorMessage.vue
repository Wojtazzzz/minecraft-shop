<script setup lang="ts">
defineProps<{
    error: undefined | string;
}>();
</script>

<template>
    <div class="w-full px-5 py-3 text-sm font-medium rounded bg-red-100 text-red-500 text-left">
        {{ error ? error : 'Coś poszło nie tak, proszę spróbować ponownie później' }}
    </div>
</template>
