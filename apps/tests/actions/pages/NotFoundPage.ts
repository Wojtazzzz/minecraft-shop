import { Page } from '@playwright/test';

export class NotFoundPage {
	constructor(private page: Page) {}

	go() {
		this.page.goto('/not-found-page-qwerty');
	}

	getPageTitle() {
		return this.page.getByRole('heading', {
			name: 'Error 404, page not found :(',
		});
	}

	getRedirectToHomePageLink() {
		return this.page.getByRole('link', {
			name: 'Redirect to home page',
		});
	}
}
