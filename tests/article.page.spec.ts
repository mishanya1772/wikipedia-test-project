import { test, expect } from '@playwright/test';
import { BasePage, ArticlePage } from 'pageObjects'
import { ContextHelper } from '../helpers/context.helper';

const mainPage = new BasePage(),
  articlePage = new ArticlePage()

test.describe('On the Article page', () => {
  test.beforeEach(async ({ page }) => {
    ContextHelper.page = page;
  })

  test('new selected language should be saved after opening another page', async ({ page }) => {
    await articlePage.open('/wiki/Horned_sungem');
    await expect(page).toHaveTitle(/Horned sungem - Wikipedia/);

    await articlePage.languageDropdownIcon.click();
    await articlePage.languageDropdownSearch.setText('Українська');
    await articlePage.languageDropdownList.option('Українська').click()
    await expect(page).toHaveTitle(/Колібрі рогатий/);

    await articlePage.mainLogo.click()
    await expect(articlePage.pageHeader.element).toHaveText('Головна сторінка');
    await expect(page).toHaveURL('https://uk.wikipedia.org/wiki/Головна_сторінка')
  });

  test('the incoming user should be able to edit the article', async ({ page }) => {
    await articlePage.open('/wiki/Gymnastics_at_the_Pan_American_Games_-_Men%27s_pommel_horse');
    await articlePage.editArticleBtn.click()
    await expect(page).toHaveURL(mainPage.url + '/w/index.php?title=Gymnastics_at_the_Pan_American_Games_%E2%80%93_Men%27s_pommel_horse&action=edit')
    await expect(articlePage.windowContentElements).toHaveText(['Welcome to Wikipedia',
      'Anyone can edit, and every improvement helps.Thank you for helping the world discover more!',
      'Switch to the visual editor', 'Start editing'])

    await articlePage.windowContent.clickByName('Start editing')
    await expect(articlePage.windowContent.element).toBeHidden()
    await expect(articlePage.wikiEditorField.element).toBeEnabled()
  });
})
