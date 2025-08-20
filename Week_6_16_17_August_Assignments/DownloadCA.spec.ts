import { expect,test } from "@playwright/test";
import path from "path";

test(`FileDownload`,async ({page}) => {
    page.goto(`https://the-internet.herokuapp.com/download`);

    const filePromise = page.waitForEvent("download");

    await page.locator (`//a[text()='example.json']`).click();
   // Capture download object
    const fDown = await filePromise;
    await fDown.saveAs("E:\\example.json")
    // Assert file exists
   expect(fDown.suggestedFilename()).toBe("example.json");
    await page.waitForTimeout(3000);
});
