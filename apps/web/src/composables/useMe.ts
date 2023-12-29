import { useQuery } from '@tanstack/vue-query';
import { wretch } from '../utils/wretch';
import { getAccountQK } from '@/utils/queryKeys';
import { meResponseSchema } from '@/utils/schemas/meResponseSchema';

export function useMe() {
    const { data } = useQuery({
        queryKey: getAccountQK(),
        queryFn: async function () {
            return await wretch
                .get('/auth/me')
                .unauthorized(() => {
                    return null;
                })
                .json((data) => {
                    if (!meResponseSchema.isValidSync(data)) {
                        return null;
                    }

                    return data;
                });
        },
    });

    return {
        user: data,
    };
}
