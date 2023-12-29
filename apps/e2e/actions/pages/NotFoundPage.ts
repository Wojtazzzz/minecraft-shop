import { Page } from '@playwright/test';

export class NotFoundPage {
	constructor(private page: Page) {}

	go() {
		this.page.goto('/not-found-page-qwerty');
	}

	getPageTitle() {
		return this.page.getByRole('heading', {
			name: 'Błąd 404, strona nie została znaleziona :(',
		});
	}

	getRedirectToHomePageLink() {
		return this.page.getByRole('link', {
			name: 'Powrót na stronę główną',
		});
	}
}
