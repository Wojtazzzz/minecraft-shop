import { test as setup } from '@playwright/test';

setup('seed database', async ({ page }) => {
	await page.request.get('http://localhost:8000/e2e/setup');
});
