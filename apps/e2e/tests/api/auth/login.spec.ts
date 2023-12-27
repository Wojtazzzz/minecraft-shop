import { test, expect } from '@playwright/test';
import { PrismaClient } from '@prisma/client';
import { resetDatabase } from '../../../prisma/resetDatabase';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

test.beforeEach(async () => {
	await resetDatabase();
});

test('pass incorrect credentials', async ({ request }) => {
	const response = await request.post('http://localhost:8000/auth/login', {
		data: {
			login: 'invalid-login',
			password: 'invalid-password',
		},
	});

	expect(response.status()).toEqual(401);
});

test('pass correct credentials', async ({ request }) => {
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

	expect(response.status()).toEqual(200);
});
