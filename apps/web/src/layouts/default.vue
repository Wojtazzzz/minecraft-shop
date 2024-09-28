<script setup lang="ts">
import {
  NavigationItem,
  NavigationRoot,
  NavigationItemLink,
  Button,
} from "@mcshop/ui/src";
import { NuxtLink } from "#components";

const { user } = useAuth();
</script>

<template>
  <div class="relative">
    <div class="w-full fixed top-0 left-0 z-30 bg-white border-b-2 py-5">
      <UiContainer>
        <div class="flex justify-between items-center">
          <UiInternalLink to="/">
            <h1 class="uppercase font-bold">Minecraft Shop</h1>
          </UiInternalLink>

          <NavigationRoot>
            <NavigationItemLink
              v-for="{ label, name, path } in routes"
              :key="name"
              :link-instance="NuxtLink"
              :to="path"
            >
              {{ label }}
            </NavigationItemLink>

            <NavigationItem>
              <Button variant="default">Zaloguj</Button>
            </NavigationItem>
          </NavigationRoot>
        </div>
      </UiContainer>
    </div>

    <div class="pt-12 mt-16">
      <slot />

      <div class="mt-24">
        <Footer />
      </div>
    </div>
  </div>
</template>
