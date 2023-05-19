// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.user = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async submitLoginForm(user, password) {
    await this.user.fill(user);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}