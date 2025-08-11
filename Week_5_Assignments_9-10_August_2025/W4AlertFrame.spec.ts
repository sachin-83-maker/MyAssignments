import { test, expect } from "@playwright/test";
import { log } from "console";

test(`Test to Handle Alert Frame`, async ({ page }) => {
  await page.goto(
  "https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm",
  { waitUntil: 'domcontentloaded' }
);
  // Listen for dialog BEFORE clicking
  page.on('dialog', async (alert) => {
    console.log(`The message says: ${alert.message()}`);
    console.log(`The type of the alert is: ${alert.type()}`);
    await alert.accept(); // Accepting the alert
  });

  // Click the button inside the iframe
  const frame = page.frameLocator('#iframeResult');
  await frame.locator("//button[text()='Try it']").click();

  // Validate the result after accepting the alert
  //retrive the text
  
  await expect(frame.locator('#demo')).toHaveText('You pressed OK!');
  const textmessage=await (frame.locator('#demo')).textContent();
  console.log(`Retrived text is ${textmessage}`);
});