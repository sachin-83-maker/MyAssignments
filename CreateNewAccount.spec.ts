import {expect,test} from "@playwright/test"
test ("Create New Account", async({page})=>
{
 await page.goto("https://login.salesforce.com/?locale=in");
 await page.getByLabel("username").fill("ravindran.ramdas@testleaf.com"); //fill user name by getByLabel()
 await page.getByLabel("password").fill("RaviSalesTest#1432"); // Fill Password by getByLabel()
 await page.locator("#Login").click();  //click on login button
 await page.waitForTimeout(5000);
 //Assert title
 console.log(await page.url());  // This returns the actual URL string
await expect(page).toHaveURL('https://testleaf22-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
  // Assert URL
  console.log(await page.title()); 
  await expect (page).toHaveTitle("Home | Salesforce");  //verify title
  await page.locator(".slds-icon-waffle").click();
  await page.getByText('View All', { exact: true }).click();  // click on view all
  await page.waitForLoadState(`domcontentloaded`);
  
 await page.getByPlaceholder(/Search apps/).fill("Service");  // enter service
 //await page.locator(`(//mark[text()='Service'])[1]`).click();//Click Service using index based XPath 
 //await page.waitForTimeout(2000);
 
 //await page.locator("(//p[@style='display: inline'])[1]").click();
   await page.locator(`(//mark[text()='Service'])[1]`).click();//Click Service using index based XPath 
    await page.waitForSelector(`(//mark[text()='Service'])[1]`, { state: 'hidden' });

 
 //await page.waitForTimeout(3000);
 await page.locator("[title='Accounts']").first().click({ force: true });
 await page.waitForLoadState(`domcontentloaded`);
 //await page.waitForTimeout(3000);
 await page.getByRole('button', { name: 'New' }).click(); // click on new button
  await page.waitForLoadState(`domcontentloaded`);
     await page.locator(`[name='Name']`).fill("Test Leaf");// Enter Account name using attribute based CSS selector 
  await page.locator(`//button[@name='SaveEdit']`).click();//  Click Save button using XPath 
    await page.waitForSelector(`//button[@name='SaveEdit']`, { state: 'hidden' });
    const messageLocator = page.locator(`//div[contains(@class,'forceToastMessage')]`);
    await expect(messageLocator).toBeVisible();// Verify the toast message displayed 
   
});

