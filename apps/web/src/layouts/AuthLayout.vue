<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
</script>
<template>
    <div>
        <Nav />

        <div class="w-screen h-screen flex flex-col items-center mt-32">
            <div class="flex justify-center">
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>
