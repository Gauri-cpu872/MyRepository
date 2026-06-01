import {test,expect} from '@playwright/test'

test('Radio Test',async({page})=>
{

    await page.goto("https://demoqa.com/radio-button");

    const radiobtn=await page.locator('//input[@id="yesRadio"]');

    await radiobtn.click();

})