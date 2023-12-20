<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { useRender } from './useRender';

const { renderRef, config, model } = await useRender();
</script>

<template>
    <TresCanvas v-bind="config">
        <TresPerspectiveCamera :position="[2, 2, 4.4]" :look-at="[0, 0, 0]" />

        <primitive ref="renderRef" :object="model" />

        <TresAmbientLight :intensity="2.7" />
    </TresCanvas>
</template>
