<script setup lang="ts">
import Button from '@/components/inc/Button.vue';
import Input from '@/components/inc/Input.vue';
import { ErrorMessage } from 'vee-validate';
import Container from '@/components/inc/Container.vue';
import { useLogin } from '@/pages/LoginPage/useLogin';

const { login, password, submit } = useLogin();
</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <Container>
            <div class="flex justify-center">
                <section
                    class="max-w-md w-full rounded-md shadow-md border-[1px] border-gray-100 p-5"
                >
                    <div class="w-full">
                        <div class="w-full border-b-[1px] border-gray-100 pb-5">
                            <h2 class="text-xl font-medium text-gray-600">Login</h2>
                        </div>

                        <form
                            novalidate
                            @submit.prevent="submit"
                            class="flex flex-col gap-y-4 mt-5"
                        >
                            <div>
                                <label class="space-y-1">
                                    <small class="text-gray-600 font-medium">NICKNAME</small>
                                    <Input
                                        type="text"
                                        name="login"
                                        v-bind="login"
                                        placeholder="CrazyJohny123"
                                        autocomplete="username"
                                    />
                                    <ErrorMessage name="login" />
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
                                        autocomplete="current-password"
                                    />
                                    <ErrorMessage name="password" />
                                </label>
                            </div>

                            <div class="mt-6">
                                <Button type="submit">LOGIN</Button>
                            </div>
                        </form>
                    </div>

                    <div class="mt-8 text-gray-600">
                        <span>Don't have an account? </span>
                        <RouterLink :to="{ name: 'login' }" class="underline"
                            >Register now</RouterLink
                        >
                    </div>
                </section>
            </div>
        </Container>
    </div>
</template>
