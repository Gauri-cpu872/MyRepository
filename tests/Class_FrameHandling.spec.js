import {test,expect} from '@playwright/test'

test("Simple Frame Handling",async({page})=>
{

        await page.goto("https://demo.automationtesting.in/Frames.html");

        const parent=page.frameLocator('//iframe[@id="singleframe"]');

        const txt1=parent.locator('(//input[@type="text"])[1]');

        await txt1.fill("GAURI");
})

test("Nested Frame Handling",async({page})=>
{

        await page.goto("https://demo.automationtesting.in/Frames.html");

        const btn=page.locator('//a[text()="Iframe with in an Iframe"]');

        btn.click();

        const parent=page.frameLocator('//iframe[@src="MultipleFrames.html"]');

        const child=parent.frameLocator('(//iframe[@src="SingleFrame.html"])[1]');

        child.locator('(//input[@type="text"])').fill("Nachiket");

})











