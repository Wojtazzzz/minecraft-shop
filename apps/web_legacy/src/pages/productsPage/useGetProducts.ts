import { useQuery } from '@tanstack/vue-query';
import { wretch } from '../../utils/wretch';
import * as yup from 'yup';
import { getProductsListQK } from '@/utils/queryKeys';

const productsResponseSchema = yup
    .array(
        yup
            .object({
                id: yup.number().required(),
                name: yup.string().required(),
                image: yup.string().required(),
                price: yup.number().required(),
            })
            .required(),
    )
    .required();

export function useGetProducts() {
    const { isPending, isSuccess, isError, data, error } = useQuery({
        queryKey: getProductsListQK(),
        queryFn: async function () {
            return await wretch
                .get('/products')
                .json()
                .then((json) => {
                    if (productsResponseSchema.isValidSync(json)) {
                        return json;
                    }

                    throw Error('Coś poszło nie tak, proszę spróbować ponownie później');
                });
        },
    });

    return {
        isPending,
        isSuccess,
        isError,
        products: data,
        error,
    };
}
