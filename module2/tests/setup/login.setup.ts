import { test as setup, expect } from '@playwright/test';


const authFile = 'playwright/.auth/session.json';


setup('Session storage state', async ({ request }) => {

    console.log('Setup saving storage state...');

    const postRequest = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {

        data:
        {
            "email": "lui.test@gmail.com",
            "password": "luitest123"
        }
    });
    const statusCode = postRequest.status();
    expect(statusCode).toEqual(200)

    await request.storageState({ path: authFile });

});
