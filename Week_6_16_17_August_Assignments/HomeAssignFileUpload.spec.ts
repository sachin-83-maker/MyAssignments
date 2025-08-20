import { expect,test } from "@playwright/test";
test ("File Upload Home Assignment",async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.fill("#username","mca.sk11842@agentforce.com");
await page .fill("#password","Sachin@123");
await page .click("#Login");
await page.waitForTimeout(3000);
const toggleButton= await page.waitForSelector(".slds-icon-waffle", { state: "visible" });
await toggleButton.click();
await page.locator("[aria-label='View All Applications']").click();
await page.getByPlaceholder("Search apps or items...").fill("Accounts ");
//await page.waitForTimeout(3000)
//await page.waitForSelector('text=Accounts');
//await page.getByText("Accounts", { exact: true }).click();//Click Accounts 
//await page.getByRole("link", { name: "Accounts" }).click();
await page.locator("p.slds-truncate >> text=Accounts").click();
 await page.waitForLoadState('domcontentloaded');
 
await page.getByRole(`button`, { name: `New` }).click();//Click New 
    await page.waitForSelector(`text='New Account'`, { state: 'visible' });
    await page.locator(`//input[@name='Name']`).fill("income");//Enter Account Name 
    await page.getByRole(`combobox`, { name: `Rating` }).click();
    await page.click(`text=Warm`);//Select Warm from the Rating dropdown 
    await page.getByRole(`combobox`, { name: `Type` }).click();
    await page.click(`text=Prospect`);//Select Prospect from the Type dropdown 
    await page.getByRole(`combobox`, { name: `Industry` }).click();
    await page.click(`text=Banking`);//Select Banking from the Industry dropdown 
    await page.getByRole(`combobox`, { name: `Ownership` }).click();
    await page.click(`text=Public`);//Select Public from the Ownership dropdown 
    await page.click(`//button[@name='SaveEdit']`);//Click Save 
    const messageLocator = page.locator('//div[contains(@class,\'forceVisualMessageQueue\')]');
    await expect(messageLocator).toBeVisible();// Verify the toast message displayed 
    const toastText = await messageLocator.innerText();
    console.log("Toast message:", toastText);
      // Upload file to the account
 await page.getByLabel("Upload Files").setInputFiles("C:\\Users\\mcask\\Downloads\\PW-W4-Alert-Frame (2).pdf");

  // Click Done
  await expect(page.getByRole("button", { name: "Done" })).toBeVisible();
await page.getByRole("button", { name: "Done" }).click();
  // Assert uploaded file appears
// await expect(page.getByText("PW-W4-Alert-Frame (2).pdf")).toBeVisible();
//await expect(page.locator("[title='PW-W4-Alert-Frame (2).pdf']")).toBeVisible();
await expect(page.getByText("PW-W4-Alert-Frame")).toBeVisible();
});

