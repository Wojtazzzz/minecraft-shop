// import { test, expect } from '@playwright/test';
// import { PrismaClient } from '@prisma/client';
// import { resetDatabase } from '../../../prisma/resetDatabase';

// const prisma = new PrismaClient();

// test.beforeEach(async () => {
// 	await resetDatabase();
// });

// test('return only active products', async ({ request }) => {
// 	await prisma.product.createMany({
// 		data: [
// 			{
// 				id: 1,
// 				name: 'Product 1',
// 				price: 1.99,
// 				active: true,
// 			},
// 			{
// 				id: 2,
// 				name: 'Product 2',
// 				price: 3.99,
// 				active: false,
// 			},
// 		],
// 	});

// 	const response = await request.get('http://localhost:8000/products');
// 	const json = await response.json();

// 	expect(json).toHaveLength(1);
// 	expect(json).toEqual([
// 		{
// 			id: 1,
// 			name: 'Product 1',
// 			price: 1.99,
// 			image: null,
// 		},
// 	]);
// });
