import {test} from "@playwright/test"
test ("Myntra", async({page})=>
{
 await page.goto(`https://www.myntra.com/?`);
 //await page.getByRole('link', { name: 'Men', exact: true }).click();
 await page.locator(`//a[text()='Men'][@data-group='men']`).hover();
 await page.locator(`.desktop-main[href='/shop/men']`).click();
  await page.locator(`//a[text()='Men'][@data-group='men']`).hover();
    
   await page.locator(`//a[text()='Topwear']/parent::li/following-sibling::li/a[text()='T-Shirts']`).click();
   await page.locator(`//input[@value='Roadster']/following-sibling::div`).click();
    await page.waitForTimeout(2000);
 


});