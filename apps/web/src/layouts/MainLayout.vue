<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
import Hero from '../components/hero/Hero.vue';
import Footer from '@/components/footer/Footer.vue';
</script>

<template>
    <div>
        <Nav />

        <div class="mt-16">
            <Hero />

            <div class="mt-12">
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>

        <div class="mt-12">
            <Footer />
        </div>
    </div>
</template>
