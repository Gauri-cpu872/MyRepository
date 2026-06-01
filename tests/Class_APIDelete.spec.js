import {test,expect} from '@playwright/test'

test("DELETE API",async({request})=>
{

        const response = await request.delete('https://bookstore.demoqa.com/Account/v1/User/536593d2-13b9-4347-8d62-3f73721b920d')
    
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody);


})