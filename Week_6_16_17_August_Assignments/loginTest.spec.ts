import { test } from "@playwright/test";
import credentials from "../../Data/login.json"

test.describe.serial(`Login tests in serial mode`,async () => {

for(let data of credentials){



test(`Learn to read data from JSON ${data.TCaseId}`,async ({page}) => {

await page.goto(`https://login.salesforce.com/?locale=in`);


await page.locator(`#username`).fill(data.Username);
await page.locator(`#password`).fill(data.Password); 
await page .click("#Login");
await page.waitForTimeout(5000); 

})

}
})