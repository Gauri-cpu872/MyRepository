
class LoginPage 
{
    // object repository - page locators (Web elements)
    constructor(page)
    {
        this.page = page;
        //super(page);
        this.usernameInput = page.locator("input[name='username']");
        this.passwordInput = page.locator("input[name='password']")
        this.loginButton = page.locator('.orangehrm-login-button');
        this.forgotPasswordLink = page.locator('.orangehrm-login-forgot-header');
        this.orangeHRMLogo = page.locator("img[alt='company-branding']");
        this.errorMessage = page.locator('.oxd-alert-content--error');
    }

    // page actions (methods)
    async login(username, password)
    {
        await this.usernameInput.fill(username);   // use locator.fill
        await this.passwordInput.fill(password);   // use locator.fill
        await this.loginButton.click(); 
    }
    
    async gotoLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    
  async clickForgotPassword() 
  {
        await this.forgotPasswordLink.click();
  }

  async isLogoVisible() 
  {
    return await this.orangeHRMLogo.isVisible();
  }

  async getErrorMessage() 
  {
    return await this.errorMessage.textContent();
  }
}

module.exports = {LoginPage};