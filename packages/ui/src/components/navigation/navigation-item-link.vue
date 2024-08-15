<script setup lang="ts">
import {
  NavigationMenuLink,
  NavigationMenuItem,
  navigationMenuTriggerStyle
} from '../lib/navigation-menu'

defineProps<{
  linkInstance: object
  to: string
}>()
</script>

<template>
  <NavigationMenuItem>
    <component :is="linkInstance" :to="to">
      <NavigationMenuLink as="span" :class="navigationMenuTriggerStyle()">
        <slot />
      </NavigationMenuLink>
    </component>
  </NavigationMenuItem>
</template>
