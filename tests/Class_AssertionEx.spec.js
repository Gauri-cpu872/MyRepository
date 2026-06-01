import{test,expect} from '@playwright/test'

// test("Hard Assertion",async({page})=>
// {

//     await page.goto("https://www.google.com");

//     await expect(page).toHaveTitle("Google");
    
//     await expect(page).toHaveURL("https://www.google.com/");

// })

test("Soft Assertion",async({page})=>
{

    await page.goto("https://www.google.com");
    
    
    //await expect.soft(page).toHaveTitle("Googleeeee");

    await expect.soft(page).toHaveTitle("Googleeeee");

    await expect(page).toHaveURL("https://www.google.com/");

})