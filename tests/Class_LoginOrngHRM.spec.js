import {test,expect} from '@playwright/test'

test("Login",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const username= page.getByRole('textbox',{name :'username'});
    await username.fill('Admin');

    const password= page.getByRole('textbox',{name :'password'});
    await password.fill('admin123');

    const login =page.getByRole('button',{type:'submit'});
    await login.click();

    const dash=page.locator('h6:has-text("Dashboard")');
    //await expect(dash).toContainText("Dashboard");

    await expect(dash).toHaveText("Dashboard",{ timeout: 10000 });

    await page.locator('//p[text()="Leon Kennedy"]').click();

    await page.locator('//a[text()="Logout"]').click();
})