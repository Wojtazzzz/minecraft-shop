import { useGLTF } from "@tresjs/cientos";
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";
import { shallowRef } from "vue";
import { useRenderLoop, type TresObject } from "@tresjs/core";

const config = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: false,
};

export async function useRender() {
  const renderRef = shallowRef<TresObject | null>(null);
  const { onLoop } = useRenderLoop();
  const { scene: model } = await useGLTF(
    "http://localhost:3000/render/scene.gltf",
  );

  // onLoop(({ delta, elapsed }) => {
  //   if (renderRef.value) {
  //     renderRef.value.rotation.y += delta / 5;
  //     renderRef.value.position.y = Math.cos(elapsed) * 0.1 - 0.8;
  //   }
  // });

  return {
    renderRef,
    config,
    model,
  };
}
