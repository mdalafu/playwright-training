import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class AddContactPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly birthDate: Locator;
    readonly email: Locator;
    readonly number: Locator;
    readonly address1: Locator;
    readonly address2: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly postal: Locator;
    readonly country: Locator;
    readonly submitButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.birthDate = page.getByPlaceholder('yyyy-MM-dd');
        this.email = page.getByPlaceholder('example@email.com');
        this.number = page.getByPlaceholder('8005551234');
        this.address1 = page.getByPlaceholder('Address 1');
        this.address2 = page.getByPlaceholder('Address 2');
        this.city = page.getByPlaceholder('City');
        this.postal = page.getByPlaceholder('State or Province');
        this.postal = page.getByPlaceholder('Postal Code');
        this.country = page.getByPlaceholder('Country')
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async enterDetails(){
        await this.firstName.click();
        await this.firstName.fill('test');
        await this.firstName.press('Tab');
        await this.lastName.fill('test');
        await this.birthDate.click();
        await this.birthDate.fill('2000-01-01');
        await this.birthDate.press('Tab');
        await this.email.fill('lui.test@gmail.com');
        await this.email.press('Tab');
        await this.number.fill('12345677999');
        await this.address1.click();
        await this.address1.fill('test add');
        await this.address1.press('Tab');
        await this.address2.fill('test add');
        await this.address2.press('Tab');
        await this.city.fill('test');
        await this.city.press('Tab');
        await this.postal.fill('test');
        await this.postal.press('Tab');
        await this.postal.fill('0000');
        await this.postal.press('Tab');
        await this.country.fill('nz');
        await this.submitButton.click();
        
    }
}