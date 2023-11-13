import { wretch } from '@/utils/wretch';
import { useMutation } from '@tanstack/vue-query';
import * as yup from 'yup';

const buyProductResponseSchema = yup
    .object({
        checkoutUrl: yup.string().required(),
    })
    .required();

export function useBuyProduct(productId: number) {
    const { mutate, isError, isPending, error } = useMutation({
        mutationFn: async function () {
            return await wretch
                .url(`/products/${productId}/buy`)
                .post()
                .json((json) => {
                    if (buyProductResponseSchema.isValidSync(json)) {
                        return json.checkoutUrl;
                    }

                    throw Error('Response is invalid');
                });
        },
        onSuccess: async (checkoutUrl: string) => {
            window.location.href = checkoutUrl;
        },
    });

    return {
        isError,
        isPending,
        error,
        buyProduct: mutate,
    };
}
