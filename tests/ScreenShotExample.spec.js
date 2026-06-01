import{test,expect} from '@playwright/test'

test('ScreenShot',async({page})=>
{

    await page.goto("https://www.saucedemo.com/");

    const dt=Date.now();
    const folder="./ScreenShot";
    //page.screenshot({path : 'C:\\Users\\D A T A\\Desktop\\PlayWright\\PlayExample\\ScreenShot'+"ScrShot"+dt+".png",fullPage :true});

    page.screenshot({path :"./ScreenShot/ScrSho"+dt+".png" , fullPage : true})

});