import { test, expect } from '@playwright/test';
import { DesktopNav } from '../actions/elements/DesktopNav';
import { LoginPage } from '../actions/pages/LoginPage';

test('try to login with incorrect credentials', async ({ page }) => {
	const nav = new DesktopNav(page);
	const loginPage = new LoginPage(page);

	await page.goto('/');

	await nav.goToLoginPage();

	await loginPage.fillLoginInput('invalid-login');
	await loginPage.fillPasswordInput('invalid-password');
	await loginPage.submitForm();

	const invalidCredentialsError = loginPage.getInvalidCredentialsError();

	await expect(invalidCredentialsError).toBeVisible();
});

test('successful login', async ({ page }) => {
	const nav = new DesktopNav(page);
	const loginPage = new LoginPage(page);

	await page.goto('/');

	await nav.goToLoginPage();

	await loginPage.fillLoginInput('jan_kowalski');
	await loginPage.fillPasswordInput('admin');
	await loginPage.submitForm();

	await expect(page).toHaveURL('/');
});

test('client side validation', async ({ page }) => {
	const loginPage = new LoginPage(page);

	await loginPage.go();
	await loginPage.submitForm();

	const emptyLoginError = loginPage.getLoginIsRequiredError();
	const emptyPasswordError = loginPage.getPasswordIsRequiredError();

	await expect(emptyLoginError).toBeVisible();
	await expect(emptyPasswordError).toBeVisible();
});
