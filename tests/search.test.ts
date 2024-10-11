import { test, expect } from '@playwright/test';

test('user can search cucumbers', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByPlaceholder('Search Products').click();
  await page.getByPlaceholder('Search Products').pressSequentially('cucum');
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN STYLE $' }).click();
  await expect(page.getByRole('heading', { name: 'MARINATED CUCUMBERS NEZHIN' })).toBeVisible();
});