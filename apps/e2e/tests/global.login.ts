import { test as setup, request } from '@playwright/test';

setup('login via request', async () => {
	const context = await request.newContext();

	await context.post('http://localhost:8000/auth/login', {
		data: {
			login: 'jan_kowalski',
			password: 'admin',
		},
	});

	await context.storageState({ path: 'loginState.json' });
});
