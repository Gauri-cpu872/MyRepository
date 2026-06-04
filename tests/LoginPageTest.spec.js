import{test,expect}from'@playwright/test';
import{LoginPage}from'../Pages/LoginPage';
import{DashBoardPage}from'../Pages/DashBoardPage';

test.describe('Login Functionality Tests',()=>
{
    let loginPage;
    let dashboardPage;

    test.beforeEach(async({page})=>
    {    
        loginPage=new LoginPage(page);
        dashboardPage=new DashBoardPage(page);

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    test('Successful Login with Valid Credentials',async({page})=>
    {
    
        await loginPage.login('Admin','admin123');
        await page.waitForTimeout(2000);
        // expect(await dashboardPage.isDashboardHeaderVisible()).toEqual(true);
        // expect(await dashboardPage.isUserProfileIconVisible()).toEqual(true);
    })
    test('Unsuccessful Login with Invalid Credentials',async()=>
    {
        await loginPage.login('Admin','wrongpassword');
        const errorMessage=await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Invalid credentials');
    })
    test('Forgot Password Link Functionality',async()=>{
        await loginPage.clickForgotPassword();
    })
    test('Logout Functionality',async()=>
    {
        await loginPage.login('Admin','admin123');
        await dashboardPage.logout();
    })
    test('Company Logo Visibility on Login Page',async({page})=>
    {
        await page.waitForLoadState('networkidle');
        const isLogoVisible=await loginPage.isLogoVisible();
        expect(isLogoVisible).toEqual(true);
    })
})