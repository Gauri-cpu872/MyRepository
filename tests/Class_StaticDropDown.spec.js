import{test,expect} from '@playwright/test'

test("DropDownExample",async({page})=>
{
    await page.goto("https://only-testing-blog.blogspot.com/2025/04/playwright-practice-page.html");

    const seldrp=page.locator('//select[@id="dropdown"]');

    //seldrp.selectOption({index : 2});

   // seldrp.selectOption({value :"country3"})

   seldrp.selectOption({label : "India"})
})

test("MultiDropDown",async({page})=>
{
    await page.goto("https://only-testing-blog.blogspot.com/2025/04/playwright-practice-page.html");

    const drpdwn=page.locator('//select[@id="listbox"]');

    drpdwn.selectOption(["Apple","Cherry"]);
})

