import { test, expect } from '@playwright/test';

test('contact-pass', async ({ page }) => {
  const email = `Test${Date.now()}@test.com`;
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('Test');
  await page.getByPlaceholder('Your Email Address').fill(email);
  await page.getByPlaceholder('Please Describe Your Message').fill('Hello my first test from Playwright');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('text=We receved your message, we will reach you on your email address')).toContainText(email);
});

test('contact-fail', async ({ page }) => {
  const email = `Test2@test.com`;
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('Test');
  await page.getByPlaceholder('Your Email Address').fill(email);
  await page.getByPlaceholder('Please Describe Your Message').fill('Hello my first test from Playwright');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('.notification-message')).toHaveText('A request already existed for same email address');
});