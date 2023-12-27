import { test, expect } from '@playwright/test';

test.describe(() => {
	test.use({ storageState: 'guestState.json' });

	test('throw 401 when not logged in', async ({ request }) => {
		const response = await request.get('http://localhost:8000/auth/me');

		expect(response.status()).toEqual(401);
	});
});

test('return 200 when logged in', async ({ request }) => {
	const response = await request.get('http://localhost:8000/auth/me');

	expect(response.status()).toEqual(200);

	expect(await response.json()).toMatchObject({
		id: 1,
		login: 'jan_kowalski',
		email: 'jan.kowalski@mc_shop_fake.pl',
	});
});
