import { expect,test } from "@playwright/test";
test(`Merge Lead Assignment`,async ({context,page}) => {
 const expectedPageTitleAfterMerge = `View Lead | opentaps CRM`;
await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.waitForLoadState('domcontentloaded');
await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click();
await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator("//a[text()='Leads']").click();
await page.getByRole('link', { name: 'Merge Leads', exact: true }).click();//Click Merge Leads 
await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
let [newPage1] = await Promise.all([context.waitForEvent('page'), page.locator(`//*[text()='From Lead']/../following-sibling::td/a`).click()]);//Click From Lead widget 
    await newPage1.waitForSelector(`text='Find Leads'`, { state: 'visible' });
    await newPage1.locator(`(//table[@class='x-grid3-row-table'])[1]/tbody/tr[1]/td[1]//a`).click();//Select the first resulting lead id 
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
    [newPage1] = await Promise.all([context.waitForEvent('page'), page.locator(`//*[text()='To Lead']/../following-sibling::td/a`).click()]);//Click To Lead widget 
    await newPage1.waitForSelector(`text='Find Leads'`, { state: 'visible' });
    await newPage1.locator(`(//table[@class='x-grid3-row-table'])[2]/tbody/tr[1]/td[1]//a`).click();//Select the second resulting lead id
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
    await Promise.all([page.once(`dialog`, async (alert) => {
        //Get the message, type and accept the alert
        console.log(`**********Alert Message And Type***********`);
        const messageReturned = alert.message();
        console.log(`The message says ${messageReturned}`);
        const typeReturned = alert.type()
        console.log(`The type of the alert is ${typeReturned}`);
        await alert.accept();//Accept the alert 
    }),
    await page.click(`//a[text()='Merge']`)]);//Click on Merge button
    await page.waitForSelector(`text='View Lead'`, { state: 'visible' });
    await expect(page).toHaveTitle(expectedPageTitleAfterMerge);//Assert the title of the page 

});