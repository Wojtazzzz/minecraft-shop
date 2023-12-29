import { wretch } from '@/utils/wretch';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
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
            throw new Error('Podano nieprawidłowe dane logowania');
        })
        .res();
};

export const useLogin = () => {
    const queryClient = useQueryClient();

    const { mutate, isError, isSuccess, isPending, error } = useMutation({
        mutationFn,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['user', 'auth', 'me'] });

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
