<script setup lang="ts">
import Button from '@/components/inc/Button.vue';
import FormInput from '@/components/inc/FormInput.vue';
import { useLogin } from '@/pages/loginPage/useLogin';
import ApiErrorMessage from '@/components/inc/ApiErrorMessage.vue';
import ApiSuccessMessage from '@/components/inc/ApiSuccessMessage.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { useLoginForm } from '@/pages/loginPage/useLoginForm';
import Container from '@/components/inc/Container.vue';

const { login, password, submit, errors } = useLoginForm();
const { isSuccess, isError, isPending, error, mutate } = useLogin();

const handleSubmitForm = submit(mutate);
</script>

<template>
    <AuthLayout>
        <Container>
            <section class="max-w-md w-full rounded-md shadow-md border-[1px] border-gray-100 p-5">
                <div class="w-full">
                    <div class="w-full border-b-[1px] border-gray-100 pb-3">
                        <h2 class="text-xl font-medium text-gray-600">Logowanie</h2>
                    </div>

                    <div role="alert" class="w-full mt-4">
                        <ApiErrorMessage v-if="isError" :error="error?.message" />
                    </div>

                    <div role="status" class="w-full mt-4">
                        <ApiSuccessMessage
                            v-if="isSuccess"
                            message="Podano prawidłowe dane logowania. Za chwilę powinno nastąpić przekierowanie."
                        />
                    </div>

                    <form
                        novalidate
                        @submit.prevent="handleSubmitForm"
                        class="flex flex-col gap-y-4 mt-5"
                    >
                        <span class="text-sm text-red-500 font-medium">* pola wymagane</span>

                        <div>
                            <FormInput
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
                            <FormInput
                                type="password"
                                name="password"
                                label="Hasło"
                                v-bind="password"
                                placeholder="********"
                                autocomplete="current-password"
                                required
                                :invalid="Boolean(errors.password)"
                            />
                        </div>

                        <div class="mt-4">
                            <Button type="submit" :is-loading="isPending">Zaloguj</Button>
                        </div>
                    </form>
                </div>

                <div class="mt-5 text-center text-gray-600">
                    <span>Nie posiadasz konta? </span>
                    <RouterLink
                        to="/"
                        class="underline hover:text-black transition-colors a-outline"
                        >Zarejestruj</RouterLink
                    >
                </div>
            </section>
        </Container>
    </AuthLayout>
</template>
