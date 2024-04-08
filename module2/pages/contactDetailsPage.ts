import { Page, Locator } from "playwright";

export class ContactDetailsPage {
    readonly page: Page;
    readonly editButton: Locator;
    readonly deleteButton: Locator;
    readonly returnButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.editButton = page.getByRole('button', { name: 'Edit Contact' });
        this.deleteButton = page.getByRole('button', { name: 'Delete Contact' });
        this.returnButton = page.getByRole('button', { name: 'Return to Contact List' });
    }

    async clickDeleteContact(){
        await this.deleteButton.click();
    }
    
    async clickEditContact(){
        await this.editButton.click();
    }

}