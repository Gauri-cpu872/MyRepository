import {test,expect} from '@playwright/test'

test("GetToken",async({request})=>
{

    const response=await request.post("https://bookstore.demoqa.com/Account/v1/GenerateToken",
        {
            data:
            {
                    "userName": "YashVardhan",
                    "password": "YashVArdhan@123456*"
            }
        }

    )
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody);  
})
