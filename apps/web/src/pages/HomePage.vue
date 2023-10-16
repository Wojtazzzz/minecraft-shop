<script setup lang="ts">
import '../styles/tailwind.css';
</script>

<template>
    <main>
        Hello World
        <RouterLink :to="{ name: 'login' }">Logowanie</RouterLink>
    </main>
</template>
