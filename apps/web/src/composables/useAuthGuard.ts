import { useQuery } from '@tanstack/vue-query';
import { wretch } from '../utils/wretch';
import { getAccountQK } from '@/utils/queryKeys';
import { useRouter } from 'vue-router';
import { meResponseSchema } from '@/utils/schemas/meResponseSchema';

export function useAuthGuard() {
    const router = useRouter();

    useQuery({
        queryKey: getAccountQK(),
        queryFn: async function () {
            return await wretch
                .get('/auth/me')
                .unauthorized(() => {
                    router.push({ name: 'login' });

                    throw new Error('Ta akcja wymaga autoryzacji');
                })
                .json((data) => {
                    if (!meResponseSchema.isValidSync(data)) {
                        return null;
                    }

                    return data;
                });
        },
    });
}
