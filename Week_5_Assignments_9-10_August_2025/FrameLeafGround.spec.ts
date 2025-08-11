import {expect, test } from "@playwright/test";

test(`Frame Leaf Ground Assignment`,async ({page}) => {
	    await page.goto(`https://leafground.com/frame.xhtml`);
    //Using frame locator
      const firstFrame = page.frameLocator("iframe[src='default.xhtml']");
const clickButton = firstFrame.locator("#Click");
// Verify initial text
await expect(clickButton).toHaveText("Click Me");

// Click the button
await clickButton.click();

// Verify changed text
await expect(clickButton).toHaveText("Hurray! You Clicked Me.");

await page.waitForTimeout(3000);

//count total no of frames in page
const frameCount = page.frames().length;
console.log(`Number of frames in the page: ${frameCount}`);

//Verify text under nested frame
const card = page.locator(".card").filter({hasText:"Inside Nested frame"});

const frame_outerframe = card.frameLocator("iframe");
    const frame_innerframe = frame_outerframe.frameLocator("iframe");
   await frame_innerframe.locator("#Click").click();
    await expect(frame_innerframe.locator("#Click")).toHaveText("Hurray! You Clicked Me.");;


await page.waitForTimeout(3000);

});