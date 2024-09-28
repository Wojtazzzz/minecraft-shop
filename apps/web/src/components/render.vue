<script setup lang="ts">
import { TresCanvas, type TresObject, useRenderLoop } from "@tresjs/core";
import { shallowRef } from "vue";
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from "three";

const config = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: false,
};

const renderRef = shallowRef<TresObject | null>(null);
const { onLoop } = useRenderLoop();

const { scene: model } = await useGLTF("/render/scene.gltf");

onLoop(({ delta, elapsed }) => {
  if (renderRef.value) {
    renderRef.value.rotation.y += delta / 5;
    renderRef.value.position.y = Math.cos(elapsed) * 0.1 - 0.8;
  }
});
</script>

<template>
  <TresCanvas v-bind="config">
    <TresPerspectiveCamera :position="[2, 2, 4.4]" :look-at="[0, 0, 0]" />

    <primitive ref="renderRef" :object="model" />

    <TresAmbientLight :intensity="2.7" />
  </TresCanvas>
</template>
