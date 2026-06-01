import{test,expect} from '@playwright/test'

test.describe('Group of Test Cases',async()=>
{
    test.only("Only TC 1st",async()=>
    {
        console.log("Only this 1st TC will execute");
    })

    test.only("Only TC 2nd",async()=>
    {
        console.log("Only this 2nd TC will execute");
    })

    test.skip("Skip TC",async()=>
    {
        console.log("This Test case will Skip");
    })

    test.fixme("Fixme",async()=>
    {
        console.log("This TC will Skip with Fixme");
    })

    test.fail("Fail TC",async()=>
    {
        console.log("This TC is expecting Failure")
        await expect(10).toBe(20);
    })

    test.slow("Slow TC",async()=>
    {
        console.log("This TC will slow by three times timeout")
    })

})