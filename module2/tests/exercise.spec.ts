import { test, expect } from '@playwright/test';
import { ContactListPage } from '../pages/contactListPage';
import { AddContactPage } from '../pages/addContactPage';
import { EditContactPage } from '../pages/editContactPage'; 
import { ContactDetailsPage } from '../pages/contactDetailsPage'; 

test.describe('Exercise 1', () => {

  test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('lui.test@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('luitest123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: 'Contact List' })).toBeVisible();
    
  })

  test('Add contact', async ({ page }) => {
    const contactListPage = new ContactListPage(page);
    await contactListPage.clickAddContactButton();


    const addContactPage = new AddContactPage(page);
    await addContactPage.enterDetails();
    await contactListPage.verifyAddedContact('test test');
  });

  test('Edit contact', async ({ page }) => {
    const contactListPage = new ContactListPage(page);
    const contactDetailsPage = new ContactDetailsPage(page);
    const editContactPage = new EditContactPage(page);

    await contactListPage.clickContact('lui.test@gmail.com')
    await contactDetailsPage.clickEditContact();
    await expect(editContactPage.editContactText).toBeVisible();
    await editContactPage.editEmail('update.test@gmail.com');
  });

  test('Delete contact', async ({ page }) => {
    const contactListPage = new ContactListPage(page);
    const contactDetailsPage = new ContactDetailsPage(page);
    //click
    await contactListPage.clickContact('lui.test@gmail.com')

    await contactDetailsPage.clickDeleteContact();

  });
});