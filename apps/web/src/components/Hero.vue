<script setup lang="ts">
import HeroBackground from "@/assets/hero-background.jpeg";
import Render from "./Render.vue";
</script>

<template>
  <div class="relative">
    <img
      :src="HeroBackground"
      class="absolute inset-0 object-cover w-full h-full blur-[3px]"
      alt=""
    />

    <section class="relative bg-opacity-75 bg-green-700/50">
      <svg
        class="hidden sm:block absolute inset-x-0 -bottom-0 sm:w-auto text-white"
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        />
      </svg>

      <div class="w-full h-[15px] absolute -bottom-2 inset-x-0 bg-white"></div>

      <div
        class="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <header class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              The Best Minecraft Server <br class="hidden md:block" />
              in the world
            </h2>
            <p
              class="max-w-xl mb-4 text-base text-gray-200 md:text-lg leading-3"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Learn more
              <svg
                class="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                />
              </svg>
            </a>
          </header>

          <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div class="h-[250px] md:h-[400px]">
              <ClientOnly>
                <Render />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
