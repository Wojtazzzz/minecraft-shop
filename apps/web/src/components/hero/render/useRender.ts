import { useGLTF } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';
import { shallowRef } from 'vue';
import { useRenderLoop, type TresObject } from '@tresjs/core';

const config = {
    shadows: true,
    alpha: true,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
    windowSize: false,
};

type Direction = 'UP' | 'DOWN';

export async function useRender() {
    const renderRef = shallowRef<TresObject | null>(null);
    const { onLoop } = useRenderLoop();
    const { scene: model } = await useGLTF('/render/scene.gltf');

    model.position.y = -0.8;

    let direction: Direction = 'DOWN';

    onLoop(({ delta }) => {
        if (!renderRef.value) {
            return;
        }

        const positionSpeed = delta / 6;
        const rotationSpeed = delta / 5;

        renderRef.value.rotation.y += rotationSpeed;

        if (direction === 'UP') {
            renderRef.value.position.y += positionSpeed;
        } else {
            renderRef.value.position.y -= positionSpeed;
        }

        if (renderRef.value.position.y > -0.4) {
            direction = 'DOWN';
        } else if (renderRef.value.position.y < -0.9) {
            direction = 'UP';
        }
    });

    return {
        renderRef,
        config,
        model,
    };
}
