<script setup lang="ts">
import Button from '@/components/inc/Button.vue';
import Input from '@/components/inc/FormInput.vue';
import Container from '@/components/inc/Container.vue';
import { useLogin } from '@/pages/LoginPage/useLogin';
import ApiErrorMessage from '@/components/inc/ApiErrorMessage.vue';
import ApiSuccessMessage from '@/components/inc/ApiSuccessMessage.vue';

const { login, password, submit, isSuccess, isError, isPending, error, errors } = useLogin();
</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <Container>
            <div class="flex justify-center">
                <section
                    class="max-w-md w-full rounded-md shadow-md border-[1px] border-gray-100 p-5"
                >
                    <div class="w-full">
                        <div class="w-full border-b-[1px] border-gray-100 pb-3">
                            <h2 class="text-xl font-medium text-gray-600">Login</h2>
                        </div>

                        <div role="alert" class="w-full mt-4">
                            <ApiErrorMessage v-if="isError" :error="error" />
                        </div>

                        <div role="status" class="w-full mt-4">
                            <ApiSuccessMessage
                                v-if="isSuccess"
                                message="Podano prawidłowe dane logowania. Za chwilę powinno nastąpić przekierowanie."
                            />
                        </div>

                        <form
                            novalidate
                            @submit.prevent="submit"
                            class="flex flex-col gap-y-4 mt-5"
                        >
                            <span class="text-sm text-red-500 font-medium">* mandatory fields</span>

                            <div>
                                <Input
                                    type="text"
                                    name="login"
                                    label="Login"
                                    v-bind="login"
                                    placeholder="CrazyJohny123"
                                    autocomplete="username"
                                    required
                                    :invalid="Boolean(errors.login)"
                                />
                            </div>

                            <div>
                                <Input
                                    type="password"
                                    name="password"
                                    label="Password"
                                    v-bind="password"
                                    placeholder="********"
                                    autocomplete="current-password"
                                    required
                                    :invalid="Boolean(errors.password)"
                                />
                            </div>

                            <div class="mt-4">
                                <Button type="submit" :is-loading="isPending">LOGIN</Button>
                            </div>
                        </form>
                    </div>

                    <div class="mt-5 text-center text-gray-600">
                        <span>Don't have an account? </span>
                        <RouterLink
                            :to="{ name: 'login' }"
                            class="underline hover:text-black transition-colors a-outline"
                            >Register now</RouterLink
                        >
                    </div>
                </section>
            </div>
        </Container>
    </div>
</template>
