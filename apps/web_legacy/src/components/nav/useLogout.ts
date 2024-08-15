import { wretch } from '@/utils/wretch';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { router } from '@/router';

const mutationFn = async () => {
    return await wretch
        .url('/auth/logout')
        .post()
        .unauthorized(() => {
            throw new Error('Coś poszło nie tak, proszę spróbować ponownie później');
        })
        .res();
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['user', 'auth', 'me'] });

            await router.push({ name: 'home' });
        },
    });

    function logout() {
        mutate();
    }

    return {
        logout,
    };
};
