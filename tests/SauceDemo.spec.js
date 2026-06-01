import {test,expect} from '@playwright/test'

test.beforeEach(" Login Test",async ({page})=>
{
    await page.goto("https://www.saucedemo.com/");
   
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator('#login-button').click();
    
});
test("Select Product",async({page})=>
{
    const seltag= page.locator('//select[@class="product_sort_container"]');

    await seltag.selectOption({index :3});

    await page.locator('//button[text()="Add to cart"]').nth(1).click();
    await page.locator('//button[text()="Add to cart"]').nth(2).click();
    await page.locator('//button[text()="Add to cart"]').nth(3).click();

    await page.locator('//a[@class="shopping_cart_link"]').click();

    await page.locator('//button[text()="Checkout"]').click();

    await page.getByPlaceholder("First Name").fill('Gauri');
    await page.getByPlaceholder('Last Name').fill('Kulkarni');
    await page.getByPlaceholder('Zip/Postal Code').fill('413512');

    await page.locator('//input[@name="continue"]').click();

    await page.locator('//button[text()="Finish"]').click();
})