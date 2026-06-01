import {test,expect} from '@playwright/test'

test.beforeAll("BeforeALL",async()=>
{
    console.log("This will execute before all test cases");
})

test.beforeEach("BeforEach",async()=>
{
    console.log("This will execute before each test case");
})
test("Test_1",async()=>
{
    console.log("Test Case-1 will execute");
})

test("Test_2",async()=>
{
    console.log("Test Case-2 will execute");
})
test.afterEach("AfterEach",async()=>
{
    console.log("This will execute after each test case execution");
})

test.afterAll("AfterAll",async()=>
{
    console.log("This will execute after all test cases execution")
})