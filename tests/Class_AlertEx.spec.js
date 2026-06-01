import {test,expect} from '@playwright/test'

test("SimpleAlertEx",async({page})=>
{
    page.on('dialog',async(dialog)=>
    {
        dialog.accept();
    })
    await page.goto("https://testautomationcentral.com/demo/alerts.html");
    const salert=page.locator('//button[text()="Show Alert"]');
    await salert.click();
})


test("ConfirmAlert",async({page})=>
{

    page.on('dialog',async(dialog)=>
    {
        dialog.dismiss();
    })
    await page.goto("https://testautomationcentral.com/demo/alerts.html");

    const cbtn=page.locator('//button[text()="Confirm"]');

    await cbtn.click();

    const conf=page.locator('//button[@class="bg-yellow-500 text-white px-4 py-2 rounded"]');

    await conf.click();
})


test("PromptAlertEx",async({page})=>
{
    page.on('dialog',async(dialog)=>
    {
        dialog.accept("Gauri Kawathekar");
    })
    await page.goto("https://testautomationcentral.com/demo/alerts.html");
    
    const palert=page.locator('//button[text()="Prompt"]');

    await palert.click();

    const sprmt=page.locator('//button[@class="bg-green-500 text-white px-4 py-2 rounded"]');

    await sprmt.click();
    
})