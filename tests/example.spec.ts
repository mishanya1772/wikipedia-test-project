import { test, expect } from '@playwright/test';

test('New selected language should be saved after opening another page', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Horned_sungem');
  await expect(page).toHaveTitle(/Horned sungem - Wikipedia/);

  await page.locator('.vector-page-titlebar .mw-interlanguage-selector').click();
  await page.locator('.languagefilter').fill('Українська')
  await page.locator('[data-region="all"] [data-code="uk"]').click()
  await expect(page).toHaveTitle(/Колібрі рогатий/);

  await page.locator('.mw-wiki-logo').click()
  await expect(page.locator('[id="main-head"] .mw-headline')).toHaveText('Ласкаво просимо до Вікіпедії,');
  await expect(page).toHaveURL('https://uk.wikipedia.org/wiki/Головна_сторінка')
});

test('The incoming user should be able to edit the article', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Gymnastics_at_the_Pan_American_Games_-_Men%27s_pommel_horse');
  await page.locator('[id="ca-edit"]').click()
  await expect(page).toHaveURL('https://en.wikipedia.org/w/index.php?title=Gymnastics_at_the_Pan_American_Games_%E2%80%93_Men%27s_pommel_horse&action=edit')
  await expect(page.locator('.oo-ui-window-content-ready .oo-ui-labelElement-label')).toHaveText(['Welcome to Wikipedia',
    'Anyone can edit, and every improvement helps.Thank you for helping the world discover more!',
    'Switch to the visual editor', 'Start editing'])

  await page.getByRole('button', { name: /Start editing/i }).click();
  await expect(page.locator('.wikiEditor-ui-text')).toBeEnabled()
});

test('The user should be able to find desired info via Search Wikipedia dropdown', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
  await page.locator('.vector-typeahead-search-container [name="search"]').fill('Ukraine')
  await page.locator('[aria-label="Search results"] [title="Ukraine"]').click()
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Ukraine')
  await expect(page).toHaveTitle(/Ukraine/)
  await expect(page.locator('.vector-typeahead-search-container [name="search"]')).toHaveAttribute('placeholder', 'Search Wikipedia')
})

test('The user should be able to log in to his profile', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
  await page.locator('#pt-login-2 span').click()
  await expect(page.locator('[id="firstHeading"]')).toHaveText('Log in')

  await page.locator('[id="wpName1"]').fill('TestAur')
  await page.locator('[id="wpPassword1"]').fill('')
  await page.locator('[id="wpLoginAttempt"]').click()
  await expect(page.locator('[id="vector-user-links-dropdown-checkbox"]')).toBeVisible()
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page')
})

test('Check that burger menu contains all mandatory links', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
  await page.locator('[id="vector-main-menu-dropdown-checkbox"]').click()
  await expect(page.locator('[id="vector-main-menu"] .mw-list-item')).toHaveText(['Main page', 'Contents', 'Current events',
    'Random article', 'About Wikipedia', 'Contact us', 'Donate', 'Help', 'Learn to edit', 'Community portal', 'Recent changes', 'Upload file'])
})
