<script setup lang="ts">
import Nav from '../components/nav/Nav.vue';
</script>
<template>
    <div>
        <Nav />

        <div class="w-screen h-screen flex flex-col justify-center items-center">
            <Container>
                <div class="flex justify-center">
                    <main>
                        <slot></slot>
                    </main>
                </div>
            </Container>
        </div>
    </div>
</template>
