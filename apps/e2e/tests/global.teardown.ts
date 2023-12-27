import { test as setup } from '@playwright/test';

setup('cleanup database', async ({ page }) => {
	await page.request.get('http://localhost:8000/tests/teardown');
});
