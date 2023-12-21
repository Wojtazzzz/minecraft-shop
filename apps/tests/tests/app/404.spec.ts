import { test, expect } from '@playwright/test';
import { NotFoundPage } from '../../actions/pages/NotFoundPage';
import { resetDatabase } from '../../prisma/resetDatabase';

test.beforeEach(async () => {
	await resetDatabase();
});

test('redirects to the not found page, redirects to the home page by click on the link', async ({
	page,
}) => {
	const notFoundPage = new NotFoundPage(page);

	notFoundPage.go();

	const pageTitle = notFoundPage.getPageTitle();

	await expect(pageTitle).toBeVisible();

	const redirectToHomeLink = notFoundPage.getRedirectToHomePageLink();

	await redirectToHomeLink.click();

	await expect(page).toHaveURL('/');
});
