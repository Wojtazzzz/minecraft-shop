<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
import Footer from '@/components/footer/Footer.vue';
</script>

<template>
    <div>
        <Nav />

        <div class="mt-28">
            <main>
                <slot></slot>
            </main>
        </div>

        <div class="mt-12">
            <Footer />
        </div>
    </div>
</template>
