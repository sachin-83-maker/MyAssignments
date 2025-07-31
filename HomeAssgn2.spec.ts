import { chromium, firefox, test } from '@playwright/test';

test('Launch two browsers and check titles', async () => {
  // Launch first browser (Chromium)
  const browser1 = await chromium.launch({ headless: false });
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://www.redbus.in');
  const title1 = await page1.title();
  const URL1=page1.url();
  console.log('RedBus Title:', title1);
   console.log('RedBus URL:', URL1);

  // Launch second browser (Firefox)
  const browser2 = await firefox.launch({ headless: false });
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://www.flipkart.com');
  const title2 = await page2.title();
  const URL2=page2.url();
  console.log('Flipkart Title:', title2);
   console.log('Flipkart URL :', URL2);

  
  // Close both browsers
  await browser1.close();
  await browser2.close();
});
