import { test, expect } from '@playwright/test';

test('return only active products', async ({ request }) => {
	const response = await request.get('http://localhost:8000/products');
	const json = await response.json();

	expect(json).toHaveLength(1);
	expect(json).toEqual([
		{
			id: 1,
			name: 'Ranga VIP 30d',
			price: 11.99,
			image: null,
		},
	]);
});
