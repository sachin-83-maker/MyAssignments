import {test} from "@playwright/test"
test ("SalesForcelogin", async({page})=>
{
 await page.goto("https://login.salesforce.com/?locale=in");
 await page.locator("#username").fill("ravindran.ramdas@testleaf.com");
 await page.locator("#password").fill("RaviSalesTest#1432");
 await page.locator("#Login").click();
 await page.waitForTimeout(3000);

});