<script setup lang="ts">
import { links } from './navLinks';
import ButtonAsLink from '@/components/inc/ButtonAsLink.vue';
import Button from '@/components/inc/Button.vue';
import { useMe } from '../../composables/useMe';
import { useLogout } from './useLogout';

const { user } = useMe();
const { logout } = useLogout();
</script>

<template>
    <ul role="list" class="items-center hidden space-x-8 lg:flex">
        <li v-for="({ href, name }, index) in links" :key="index">
            <RouterLink :to="href" class="font-medium tracking-wide text-gray-800">
                {{ name }}
            </RouterLink>
        </li>

        <li v-if="user">
            <Button type="button" @click="logout">Logout</Button>
        </li>

        <li v-else>
            <ButtonAsLink href="/login">Login</ButtonAsLink>
        </li>
    </ul>
</template>
