<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
</script>
<template>
    <div>
        <Nav />

        <div class="mt-32">
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>
