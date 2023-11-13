<script setup lang="ts">
import { getApiErrorMessage } from '@/utils/getApiErrorMessage';

defineProps<{
    error: unknown | string;
}>();
</script>

<template>
    <div class="w-full px-5 py-3 text-sm font-medium rounded bg-red-100 text-red-500">
        {{ typeof error === 'string' ? error : getApiErrorMessage(error) }}
    </div>
</template>
