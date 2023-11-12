import { wretch } from '@/utils/wretch';

export function useBuyProduct(productId: number) {
    async function buyProduct() {
        const url = await wretch
            .url(`/products/${productId}/buy`)
            .post()
            .json((json) => json.checkoutUrl);

        window.location.href = url;
    }

    return {
        buyProduct,
    };
}
