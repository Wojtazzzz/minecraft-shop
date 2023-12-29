import { useQuery } from '@tanstack/vue-query';
import { wretch } from '../utils/wretch';
import { getAccountQK } from '@/utils/queryKeys';

export function useMe() {
    const { data } = useQuery({
        queryKey: getAccountQK(),
        queryFn: async function () {
            return await wretch
                .get('/auth/me')
                .unauthorized(() => {
                    return null;
                })
                .json();
        },
    });

    return {
        user: data,
    };
}
