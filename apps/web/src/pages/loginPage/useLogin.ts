import { wretch } from '@/utils/wretch';
import { useMutation } from '@tanstack/vue-query';
import { router } from '@/router';

type LoginPayload = {
    login: string;
    password: string;
};

const mutationFn = async (payload: LoginPayload) => {
    return await wretch
        .url('/auth/login')
        .post(payload)
        .unauthorized(() => {
            throw new Error('Provided incorrect credentials');
        })
        .res();
};

export const useLogin = () => {
    const { mutate, isError, isSuccess, isPending, error } = useMutation({
        mutationFn,
        onSuccess: async () => {
            await router.push({ name: 'home' });
        },
    });

    return {
        isError,
        isSuccess,
        isPending,
        error,
        mutate,
    };
};
