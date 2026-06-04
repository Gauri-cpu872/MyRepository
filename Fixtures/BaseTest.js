const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashBoardPage } = require('../pages/DashBoardPage');

exports.test = base.test.extend
({
    loginPage: async ({ page }, use) => 
    {
        const loginPage = new LoginPage(page);
        await use(loginPage);           // Make the loginPage object available to tests
    },
    dashboardPage: async ({ page }, use) => 
    {
        const dashboardPage = new DashBoardPage(page);
        await use(dashboardPage);       // Make the dashboardPage object available to tests
    }
});
exports.expect = base.expect;