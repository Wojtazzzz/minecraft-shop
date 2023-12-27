import { test, expect } from '@playwright/test';
import { PrismaClient } from '@prisma/client';
import { resetDatabase } from '../../../prisma/resetDatabase';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

test.beforeEach(async () => {
	await resetDatabase();
});

test('throw 401 when not logged in', async ({ request }) => {
	const response = await request.get('http://localhost:8000/auth/me');

	expect(response.status()).toEqual(401);
});

test.describe('logged in', async () => {
	let accessToken = null;

	test.beforeAll(async ({ request }) => {
		await prisma.user.create({
			data: {
				login: 'admin',
				email: 'admin@gmail.com',
				password: await hash('admin', 10),
			},
		});

		const response = await request.post('http://localhost:8000/auth/login', {
			data: {
				login: 'admin',
				password: 'admin',
			},
		});

		const headers = response.headersArray();
		const setCookieHeader = headers.find((xx) => {
			return xx.name === 'Set-Cookie';
		});
		accessToken = setCookieHeader?.value
			.substring(
				setCookieHeader.value.lastIndexOf('access_token=') + 13,
				setCookieHeader.value.indexOf(';'),
			)
			.trim();

		expect(response.status()).toEqual(200);
	});

	test('pass correct credentials', async ({ request }) => {
		const response = await request.get('http://localhost:8000/auth/me', {
			headers: {
				access_token: accessToken,
			},
		});

		console.log(await response.json());

		expect(response.status()).toEqual(200);
	});
});
