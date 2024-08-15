<script setup lang="ts">
import { useMobileNav } from '@/components/nav/useMobileNav';
import { links } from '@/components/nav/navLinks';
import Times from '@/components/icons/Times.vue';
import Bars from '@/components/icons/Bars.vue';
import { APP_NAME } from '@/utils/env';
import { useMe } from '@/composables/useMe';
import { useLogout } from './useLogout';

const { isNavOpen, open, close } = useMobileNav();
const { user } = useMe();
const { logout } = useLogout();
</script>

<template>
    <div class="lg:hidden">
        <button
            aria-label="Open Navigation"
            class="p-2 relative z-40 transition duration-200 rounded"
            @click="isNavOpen ? close() : open()"
        >
            <Times v-if="isNavOpen" />
            <Bars v-else />
        </button>

        <div v-if="isNavOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <RouterLink to="/" class="inline-flex items-center">
                            <span
                                class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                            >
                                {{ APP_NAME }}
                            </span>
                        </RouterLink>
                    </div>
                </div>

                <div>
                    <ul role="list" class="space-y-4 mt-5">
                        <li v-for="({ name, href }, index) in [...links]" :key="index">
                            <RouterLink
                                :to="href"
                                class="font-medium tracking-wide text-gray-800"
                                @click="close"
                                >{{ name }}</RouterLink
                            >
                        </li>

                        <li v-if="user">
                            <RouterLink
                                to="/"
                                class="font-medium tracking-wide text-gray-800"
                                @click="logout"
                                >Wyloguj</RouterLink
                            >
                        </li>

                        <li v-else>
                            <RouterLink
                                to="/login"
                                class="font-medium tracking-wide text-gray-800"
                                @click="close"
                                >Zaloguj</RouterLink
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
