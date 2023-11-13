<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
import Hero from '../components/hero/Hero.vue';
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
    </div>
</template>
