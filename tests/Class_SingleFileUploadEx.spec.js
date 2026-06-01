import {test,expect} from '@playwright/test'

test("Single Upload", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const chsingle=page.locator('//input[@id="singleFileInput"]');

    chsingle.setInputFiles("C:\\Users\\D A T A\\Desktop\\PostmanData.txt");

    const uploadfile=page.locator('//button[text()="Upload Single File"]');

    await uploadfile.click();
})