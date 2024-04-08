import { test, expect } from '@playwright/test';

const authFile = 'playwright/.auth/session.json';

test('create and delete contact', async ({ browser, request }) => {

    const loggedinContext = await browser.newContext({ storageState: authFile });

    const contextCookies = await loggedinContext.cookies();
    const token = contextCookies.find(cookie => cookie.name === "token");
    console.log(`Bearer ${token.value}`)

    //add
    const postRequest = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {

        data:
        {
            "firstName": "Luidelete",
            "lastName": "Test",
            "birthdate": "1970-01-01",
            "email": "jdoe@fake.com",
            "phone": "8005555555",
            "street1": "1 Main St.",
            "street2": "Apartment A",
            "city": "Anytown",
            "stateProvince": "KS",
            "postalCode": "12345",
            "country": "USA"
        },
        headers: {'Authorization': `Bearer ${token.value}`}
    });
    const statusCode = postRequest.status();
    expect(statusCode).toEqual(201)

    //get id
    const getResponse = await request.get('https://thinking-tester-contact-list.herokuapp.com/contacts/', {
        headers: {'Authorization': `Bearer ${token.value}`}
    });

    let jsonResponseBody = await getResponse.json();
    jsonResponseBody = jsonResponseBody.find(i => i.firstName === "Luidelete");
    const contactId = jsonResponseBody._id;

    //delete
    const res = await request.delete('https://thinking-tester-contact-list.herokuapp.com/contacts/'+contactId, {
        headers: {'Authorization': `Bearer ${token.value}`}
    });
    // console.log(res)

    expect(res.status()).toEqual(200)

})


test('mock', async ({ page }) => {
    await page.route('*/**/contacts', async route => {
        await route.fulfill({});
    });

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/contactList');

    await expect(page.locator('#myTable')).toBeHidden();
});

test('logout', async ({ browser, request }) => {
    const loggedinContext = await browser.newContext({ storageState: authFile });

    const contextCookies = await loggedinContext.cookies();
    const token = contextCookies.find(cookie => cookie.name === "token");
    const res = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/logout', {
        headers: {'Authorization': `Bearer ${token.value}`}
    });

    expect(res.status()).toEqual(200)
})
