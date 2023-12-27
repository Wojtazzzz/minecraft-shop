import { test, expect } from '@playwright/test';

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
	const response = await request.post('http://localhost:8000/auth/login', {
		data: {
			login: 'jan_kowalski',
			password: 'admin',
		},
	});

	expect(response.status()).toEqual(200);
});
