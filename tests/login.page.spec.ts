import { test, expect } from '@playwright/test';
import { BasePage, LoginPage } from 'pageObjects'
import { ContextHelper } from '../helpers/context.helper';

const mainPage = new BasePage(),
  loginPage = new LoginPage()

test.describe('On the Login page', () => {
  test('user should be able to log in to his profile', async ({ page }) => {
    ContextHelper.page = page;

    await mainPage.open();
    await mainPage.loginLink.click()
    await expect(loginPage.pageHeader.element).toHaveText('Log in')

    await loginPage.userNameField.setText('TestAur')
    await loginPage.passwordField.setText('')
    await loginPage.loginBtn.click()
    await expect(mainPage.userProfileIcon.element).toBeVisible()
    await expect(page).toHaveURL(mainPage.url + '/wiki/Main_Page')
  })
})
