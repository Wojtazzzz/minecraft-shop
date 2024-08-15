<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

const { name } = defineProps<{
    name: string;
    type: 'text' | 'password' | 'email';
    label: string;
    placeholder?: string;
    modelValue?: string;
    required: boolean;
    invalid?: boolean;
    autocomplete: HTMLInputElement['autocomplete'];
}>();

const emit = defineEmits(['update:modelValue', 'blur']);

const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
    <label class="space-y-1">
        <span class="text-sm text-gray-600 font-medium uppercase">{{ label }}</span>
        <span v-if="required" class="text-sm text-red-500 font-medium"> *</span>

        <input
            :type="type"
            :name="name"
            :value="modelValue"
            class="w-full rounded bg-[#EFF4F6] p-3 outline-none shadow input-outline"
            :placeholder="placeholder"
            :required="required"
            :aria-invalid="invalid"
            :autocomplete="autocomplete"
            @input="updateValue"
            @blur="$emit('blur')"
        />

        <span v-if="invalid" class="block">
            <ErrorMessage class="text-red-500 font-medium text-sm" :name="name" as="span" />
        </span>
    </label>
</template>
