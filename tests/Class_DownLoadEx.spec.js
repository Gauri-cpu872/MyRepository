import {test,expect} from '@playwright/test'
const fs = require('fs');


test("DownLoadEx",async({page})=>
{
        await page.goto("https://practice.expandtesting.com/download");

        const downloadPromise=page.waitForEvent('download');

        await page.getByTestId('1780116468779_DNDAgentFile.txt').click();

        const download=await downloadPromise;

        const suggested = await download.suggestedFilename();
        const filePath = `./Downloads/${suggested}`;
        await download.saveAs(filePath);
        console.log(filePath);

        //const fileExists = fs.existsSync(filePath);
        //await expect.soft(fileExists, `File should be saved at ${filePath}`).toBeTruthy();


})