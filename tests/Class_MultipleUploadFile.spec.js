import {test,expect} from '@playwright/test'

test("UploadMultipleFiles",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const chFile=page.locator('//input[@id="multipleFilesInput"]');
    await chFile.click();

    chFile.setInputFiles(["C:\\Users\\D A T A\\Desktop\\PostmanData.txt","C:\\Users\\D A T A\\Downloads\\playwright_framework.pdf"]);

    const upload=page.locator('//button[text()="Upload Multiple Files"]');
    await upload.click();
})