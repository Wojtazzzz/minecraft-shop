<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '../components/lib/alert'

type AlertVariant = 'default' | 'destructive';

const { variant = 'default' } = defineProps<{
    variant?: AlertVariant
}>()
</script>

<template>
        <Alert :variant="variant">
            <AlertCircle class="w-4 h-4" />
            <AlertTitle>
                <template v-if="variant==='destructive'">Error</template>
                <template v-else>Info</template>
            </AlertTitle>
            <AlertDescription>
                <slot/>
            </AlertDescription>
        </Alert>
</template>