import { test, expect } from '@playwright/test';

test('logout process unset cookie-session', async ({ request }) => {
	const loginResponse = await request.post('http://localhost:8000/auth/login', {
		data: {
			login: 'jan_kowalski',
			password: 'admin',
		},
	});

	expect(loginResponse.status()).toEqual(200);

	const loggedMeResponse = await request.get('http://localhost:8000/auth/me');
	expect(loggedMeResponse.status()).toEqual(200);

	const logoutResponse = await request.post('http://localhost:8000/auth/logout');

	expect(logoutResponse.status()).toEqual(200);

	const loggedOutMeResponse = await request.get('http://localhost:8000/auth/me');
	expect(loggedOutMeResponse.status()).toEqual(401);
});
