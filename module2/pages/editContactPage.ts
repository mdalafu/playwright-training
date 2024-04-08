import { Page, Locator } from "playwright";

export class EditContactPage {
    readonly page: Page;
    readonly submitButton: Locator;
    readonly editContactText: Locator;

    constructor(page: Page){
        this.page = page;
        this.editContactText = page.getByRole('heading', { name: 'Edit Contact' });
    }

    async editEmail(email){
        await this.page.getByLabel('Email:').click();
        await this.page.getByLabel('Email:').press('Meta+a');
        await this.page.getByLabel('Email:').fill('');
        await this.page.getByLabel('Email:').fill(email);
    }
}