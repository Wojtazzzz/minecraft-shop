import { useQuery } from '@tanstack/vue-query';
import { wretch } from '../utils/wretch';
import { getAccountQK } from '@/utils/queryKeys';
import { useRouter } from 'vue-router';

export function useGuestGuard() {
    const router = useRouter();

    const { isPending, isError, data } = useQuery({
        queryKey: getAccountQK(),
        queryFn: async function () {
            return await wretch
                .get('/auth/me')
                .json()
                .then(() => {
                    router.push({
                        name: 'home',
                    });

                    throw new Error('Already authorized');
                });
        },
    });

    if (!isPending.value && !isError.value && data.value) {
        router.push({
            name: 'home',
        });
    }
}
