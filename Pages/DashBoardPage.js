

class DashBoardPage 
 {
    // object repository - page locators (Web elements)
    constructor(page) 
    {
        //super(page);
        
        this.page=page;

        this.userProfileIcon = page.locator('.oxd-userdropdown-img');
        this.logoutDropdown = page.locator('.oxd-userdropdown-icon');
        this.logoutButton = page.locator("//a[text()='Logout']");
        this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb');
    }

   async isDashboardHeaderVisible() 
   {
         return await this.dashboardHeader.isVisible();
   }

    async isUserProfileIconVisible() 
    {
        return await this.userProfileIcon.isVisible();
    }

    async logout() 
    {
        await this.logoutDropdown.click();  // use locator.click
        await this.logoutButton.click();    // use locator.click
    }
}

module.exports = { DashBoardPage };