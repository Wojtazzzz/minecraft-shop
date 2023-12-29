export function getProductsListQK() {
    return ['products'];
}

export function getProductDetailsQK(productId: number) {
    return ['product', productId];
}

export function getAccountQK() {
    return ['user', 'auth', 'me'];
}
