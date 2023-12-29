import { useQuery } from '@tanstack/vue-query';
import { wretch } from '../utils/wretch';
import { getAccountQK } from '@/utils/queryKeys';
import { useRouter } from 'vue-router';

export function useGuestGuard() {
    const router = useRouter();

    useQuery({
        queryKey: getAccountQK(),
        queryFn: async function () {
            return await wretch.get('/auth/me').json(() => {
                router.push({
                    name: 'home',
                });

                throw new Error('Already authorized');
            });
        },
        retry: 0,
    });
}
