import { test, expect } from '@playwright/test';

test('check Home page has headers', async ({ page }) => {
  await page.goto('https://serhiiyasenev.github.io/react-trial-project/');
  await expect(page.getByPlaceholder('Search')).toBeVisible();
  await expect(page.locator('.nickname')).toHaveText('Serhii');
  await expect(page.getByText('Serhii Yasenev')).toBeVisible();
});