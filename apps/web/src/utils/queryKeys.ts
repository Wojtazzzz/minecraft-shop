export function getProductsListQueryKey() {
    return ['products'];
}

export function getProductDetailsQueryKey(productId: number) {
    return ['product', productId];
}
