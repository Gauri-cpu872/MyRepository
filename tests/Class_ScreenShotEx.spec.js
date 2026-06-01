import {test,expect} from '@playwright/test'

// test("ScreenShot",async({page})=>
// {

//     await page.goto("https://www.google.com/");

//     const dt=Date.now();

//     page.screenshot({path :"./ScreenShot"+dt+".png",fullPage:true});

// })

test("WebElement_Screenshot",async({page})=>
{

    await page.goto("https://www.google.com/");

    const btn=page.locator('(//input[@class="RNmpXc"])[2]');

    const dt=Date.now();

    btn.screenshot({path:"./ScreenShot/Src"+dt+".png"});

})