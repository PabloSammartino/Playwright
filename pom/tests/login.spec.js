import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page');
import dotenv from 'dotenv'
import { URLS, CREDENTIALS } from '../data/Constantes';
dotenv.config()

test('Login successfully', async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER, CREDENTIALS.SAUCEDEMOPASSWORD);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
