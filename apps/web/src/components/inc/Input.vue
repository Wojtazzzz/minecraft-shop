<script setup lang="ts">
defineProps<{
    name: string;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
    modelValue: string;
}>();

const emit = defineEmits(['update:modelValue', 'blur']);

const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
    <input
        :type="type"
        :name="name"
        :value="modelValue"
        class="w-full rounded bg-[#EFF4F6] p-3 outline-none shadow"
        :placeholder="placeholder"
        @input="updateValue"
        @blur="$emit('blur')"
    />
</template>
