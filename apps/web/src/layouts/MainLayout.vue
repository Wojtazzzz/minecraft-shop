<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
</script>
<template>
    <div>
        <Nav />

        <main>
            <slot></slot>
        </main>
    </div>
</template>
