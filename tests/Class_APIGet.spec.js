import {test,expect} from '@playwright/test'

test("GET API", async({request})=>
{

    const response=await request.get("https://bookstore.demoqa.com/Account/v1/User/536593d2-13b9-4347-8d62-3f73721b920d",
        {
            headers:
            {
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Illhc2hWYXJkaGFuIiwicGFzc3dvcmQiOiJZYXNoVkFyZGhhbkAxMjM0NTYqIiwiaWF0IjoxNzgwMjg0NzU0fQ.8zSbLnmKgS9IFy6hRq7-Y5_zwZM7hvWLwoWQwbnegbo'
            }
     })
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        console.log(responseBody);  
        expect(responseBody.username).toBe("YashVardhan");

});