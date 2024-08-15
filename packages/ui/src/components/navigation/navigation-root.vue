<script setup lang="ts">
import { NavigationMenu, NavigationMenuList } from '../lib/navigation-menu'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <slot />
    </NavigationMenuList>
  </NavigationMenu>
</template>
