import { test, expect } from '@playwright/test';

test('Handle confirm alert and verify text', async ({ page }) => {

  // 1. Load the W3Schools confirm alert page
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  // 2. Attach alert handler before clicking button
  page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message()); // Get the alert message
    expect(dialog.type()).toBe('confirm'); // Verify it's a confirm alert
    await dialog.accept(); // Accept the alert
  });

  // 3. Locate iframe and click "Try it" button
  const frame = page.frameLocator('#iframeResult');
  await frame.locator('button:has-text("Try it")').click();

  // 4. Retrieve and verify the resulting text
  const resultText = await frame.locator('#demo').textContent();
  expect(resultText?.trim()).toBe('You pressed OK!');
});
