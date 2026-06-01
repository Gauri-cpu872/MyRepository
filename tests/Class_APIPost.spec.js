import {test,expect} from '@playwright/test'

test("API POST",async({request})=>
{
            const response=await request.post("https://bookstore.demoqa.com/Account/v1/User",
            {
                data:
                {
                    "userName": "YashVardhan",
                    "password": "YashVArdhan@123456*"
                }
            }
            )

            const responseBody = await response.json();
            console.log(responseBody);  
});