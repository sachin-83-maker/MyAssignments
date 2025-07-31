import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Username' }).fill('ravindran.ramdas@testleaf.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Password' }).fill('RaviSalesTest#1432');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://testleaf22-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('button', { name: 'View All Applications' }).click({ force: true });
 await expect(page.getByText('Sales')).toBeVisible({ timeout: 10000 });
await page.getByText('Sales').click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.locator('button:has-text("New")').click({ force: true })
  await page.getByRole('combobox', { name: 'Salutation' }).click();
  await page.getByRole('option', { name: 'Mr.' }).locator('span').nth(1).click();
  await page.getByRole('textbox', { name: '*Last Name' }).click();
  await page.getByRole('textbox', { name: '*Last Name' }).fill('surbhi');
  await page.getByRole('textbox', { name: '*Company' }).click();
  await page.getByRole('textbox', { name: '*Company' }).fill('wipro');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByText('Success notification.Lead "Mr. soni" was created.Press Control + F6 to navigate').click();
  });
  