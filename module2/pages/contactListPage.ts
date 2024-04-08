import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class ContactListPage {
    readonly page: Page;
    readonly addContactButton: Locator;
    readonly addContactText: Locator;
    readonly contactTable: Locator;

    constructor(page: Page){
        this.page = page;
        this.addContactButton = page.getByRole('button', { name: 'Add a New Contact' }); 
        this.addContactText = page.getByRole('heading', { name: 'Add Contact' });
        this.contactTable = page.locator('#myTable');
    }
    
    async clickAddContactButton(){
        await this.addContactButton.click();
        await expect(this.addContactText).toBeVisible();
    }

    async verifyAddedContact(contactName){
        await expect(this.contactTable).toContainText(contactName);
    }

    async clickContact(cellName){
        await this.page.getByRole('cell', { name: cellName }).click();
        await expect(this.page.locator('#email')).toContainText(cellName);

    }
}