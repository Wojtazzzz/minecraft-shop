import { axios } from '@/utils/axios';
import { useMutation } from '@tanstack/vue-query';
import router from '@/router';

type LoginPayload = {
    login: string;
    password: string;
};

const mutationFn = async (payload: LoginPayload) => {
    await axios.post('/auth/login', payload);
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
