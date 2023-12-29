<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
import { useGuestGuard } from '../composables/useGuestGuard';

useGuestGuard();
</script>

<template>
    <div>
        <Nav />

        <div class="max-w-screen flex flex-col items-center mt-28">
            <div class="flex justify-center">
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>
