import {test,expect} from '@playwright/test'

test('FrameHandling',async({page})=>
{

    await page.goto("https://demo.automationtesting.in/Frames.html");

    const parent=page.frameLocator('//iframe[@id="singleframe"]');

    const txtbox=parent.locator('//input[@type="text"]');

    txtbox.fill("Gauri");

});


test("Nested Frame Handling",async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html");

    const btn=page.locator('//a[text()="Iframe with in an Iframe"]');

    btn.click();

    const parent=page.frameLocator('//iframe[@src="MultipleFrames.html"]');

    const child=parent.frameLocator('//iframe[@src="SingleFrame.html"]');

    child.locator('//input[@type="text"]').fill("Gayatri");
})