import { test, expect } from '@playwright/test';
import { BasePage } from 'pageObjects'
import { ContextHelper } from '../helpers/context.helper';

const mainPage = new BasePage()

test.describe('On the main page', () => {
  test.beforeEach(async ({ page }) => {
    ContextHelper.page = page;
    await mainPage.open();
  })

  test('user should be able to find desired info via Search Wikipedia dropdown', async ({ page }) => {
    await mainPage.searchField.setText('Ukraine')

    await mainPage.searchResultList.option('Ukraine').click()
    await expect(page).toHaveURL(mainPage.url + '/wiki/Ukraine')
    await expect(page).toHaveTitle(/Ukraine/)
    await expect(mainPage.searchField.element).toHaveAttribute('placeholder', 'Search Wikipedia')
  })

  test('check that burger menu contains all mandatory links', async () => {
    await mainPage.burgerIcon.click()
    await expect(mainPage.burgerOptions.list).toHaveText(['Main page', 'Contents', 'Current events',
      'Random article', 'About Wikipedia', 'Contact us', 'Donate', 'Help', 'Learn to edit', 'Community portal', 'Recent changes', 'Upload file'])
  })
})
