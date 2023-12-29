import { useQuery } from '@tanstack/vue-query';
import { wretch } from '../../utils/wretch';
import * as yup from 'yup';
import { getProductDetailsQK } from '@/utils/queryKeys';
import { useRoute } from 'vue-router';

const productResponseSchema = yup
    .object({
        id: yup.number().required(),
        name: yup.string().required(),
        description: yup.string().required(),
        image: yup.string().required(),
        price: yup.number().required(),
    })
    .required();

export function useGetProduct() {
    const route = useRoute();
    const productId = Number(route.params.id);

    const { isPending, isSuccess, isError, data, error } = useQuery({
        queryKey: getProductDetailsQK(productId),
        queryFn: async function () {
            return await wretch
                .get(`/products/${productId}`)
                .json()
                .then((json) => {
                    if (productResponseSchema.isValidSync(json)) {
                        return json;
                    }

                    throw Error('Invalid data');
                });
        },
    });

    return {
        isPending,
        isSuccess,
        isError,
        product: data,
        error,
    };
}
