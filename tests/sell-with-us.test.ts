import { test, expect } from '@playwright/test';

test('test3', async ({ page }) => {
  const email = `Test${Date.now()}@etest.com`;
  const phoneNumber = '1223441242';
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Test Username');
  await page.getByPlaceholder('Your Email Address').fill(email);
  await page.getByPlaceholder('Your Phone Number').fill(phoneNumber);
  await page.getByPlaceholder('Your Business Brand').fill('Nike');
  await page.getByPlaceholder('Please Describe Your Business').fill('Military drones');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('text=We received your request! we will reach you on your phone number')).toContainText(phoneNumber);
});