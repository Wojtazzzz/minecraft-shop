import { test, expect } from '@playwright/test';

test('return correct product data', async ({ request }) => {
	const response = await request.get('http://localhost:8000/products/1');
	const json = await response.json();

	expect(json).toEqual({
		id: 1,
		name: 'Ranga VIP 30d',
		description: null,
		price: 11.99,
		image: null,
	});
});

test('throw 404 when product is not active', async ({ request }) => {
	const response = await request.get('http://localhost:8000/products/2');

	expect(response.status()).toEqual(404);
});

test('throw 404 when product not found', async ({ request }) => {
	const response = await request.get('http://localhost:8000/products/3');

	expect(response.status()).toEqual(404);
});
