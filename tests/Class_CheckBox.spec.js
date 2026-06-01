import {test,expect} from '@playwright/test'

test("CheckBox", async({page})=>
{
    await page.goto("https://demoqa.com/checkbox");

    const chkbx= page.getByRole("checkbox");

    await chkbx.check();

    expect(await chkbx).toBeChecked();
})