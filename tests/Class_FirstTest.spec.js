import {test,expect} from '@playwright/test'

// test("FirstTest",async({page})=>
// {

//     await page.goto("https://www.google.com/");

//     await expect(page).toHaveTitle("Google");

//     await page.locator('//textarea[@name="q"]').fill("PlayWright");

//     const btn=await page.locator('//input[@value="Google Search"]').nth(1);
//     btn.click();
// })

// test("Second Test",async({page})=>
// {
//     await page.goto("https://utkarshaaacademy.com/");

//     await expect(page).toHaveTitle('Software Testing');

//     await expect(page).toHaveURL("https://utkarshaaacademy.com/");
// })

// test("Third Test",async({page})=>
// {
//     await page.goto("https://demoqa.com/login");

//     await page.locator('//input[@id="userName"]').fill('Anuradha');

//     await page.locator('//input[@id="password"]').fill('Anuradha@123456*')

//     await page.locator('//button[@id="login"]').click();
// })

test("Forth Test",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const txtinfo=page.locator('//p[text()="Username : Admin"]');

    await expect(txtinfo).toHaveText("Username : Admin");

    await page.getByRole('textbox',{name:'username'}).fill("Gauri");
})