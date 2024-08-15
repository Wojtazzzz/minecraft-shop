<script setup lang="ts">
defineProps<{
  to: RoutePath;
}>();
</script>

<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>
