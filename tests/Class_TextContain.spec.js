import {test,expect} from '@playwright/test'

test("CaptureText",async({page})=>
{
    await page.goto("https://www.google.com/");

    let value=await page.locator('body').textContent();

    console.log(value);
})