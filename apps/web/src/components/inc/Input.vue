<script setup lang="ts">
defineProps<{
    name: string;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
    modelValue: string;
}>();

const emit = defineEmits(['update:modelValue', 'blur']);
</script>

<template>
    <input
        :type="type"
        :name="name"
        class="w-full rounded bg-[#EFF4F6] p-3 outline-none shadow"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur')"
    />
</template>
