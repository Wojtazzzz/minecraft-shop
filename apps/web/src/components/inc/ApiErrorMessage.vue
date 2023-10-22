<script setup lang="ts">
import { getApiErrorMessage } from '@/utils/getApiErrorMessage';

defineProps<{
    error: unknown;
}>();
</script>

<template>
    <div class="px-5 py-3 text-sm font-medium rounded bg-red-100 text-red-500">
        {{ getApiErrorMessage(error) }}
    </div>
</template>
