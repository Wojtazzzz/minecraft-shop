<script setup lang="ts">
import Button from '@/components/inc/Button.vue';
import Input from '@/components/inc/Input.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Container from '@/components/inc/Container.vue';

const schema = yup.object({
    login: yup.string().required(),
    password: yup.string().required(),
});

const { defineComponentBinds, handleSubmit } = useForm({
    validationSchema: schema,
});

const login = defineComponentBinds('login');
const password = defineComponentBinds('password');

const submit = handleSubmit((values) => console.log(values));
</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <Container>
            <section class="max-w-md w-full rounded-md shadow-md border-[1px] border-gray-100 p-5">
                <div class="w-full">
                    <div class="w-full border-b-[1px] border-gray-100 pb-5">
                        <h2 class="text-xl font-medium text-gray-600">Login</h2>
                    </div>

                    <form novalidate @submit="submit" class="flex flex-col gap-y-4 mt-5">
                        <div>
                            <label class="space-y-1">
                                <small class="text-gray-600 font-medium">NICKNAME</small>
                                <Input
                                    type="text"
                                    name="login"
                                    v-bind="login"
                                    placeholder="CrazyJohny123"
                                />
                            </label>
                        </div>

                        <div>
                            <label class="space-y-1">
                                <small class="text-gray-600 font-medium">PASSWORD</small>
                                <Input
                                    type="password"
                                    name="password"
                                    v-bind="password"
                                    placeholder="********"
                                />
                            </label>
                        </div>

                        <div class="mt-6">
                            <Button type="submit">LOGIN</Button>
                        </div>
                    </form>
                </div>

                <div class="mt-8 text-gray-600">
                    <span>Don't have an account? </span>
                    <RouterLink :to="{ name: 'login' }" class="underline">Register now</RouterLink>
                </div>
            </section>
        </Container>
    </div>
</template>
