import {expect,test} from "@playwright/test";
const noOfRoundedBtns=4;
const pageTitle=`Dashboard`;
test ("Titl change", async({page})=>
{
 await page.goto("https://leafground.com/button.xhtml");
 await page.locator("//button[@name='j_idt88:j_idt90']").click();
 await page.waitForLoadState(`domcontentloaded`);
 await expect(page).toHaveTitle(pageTitle);
 await page.goBack();
 const disabledButton= page.getByRole(`button`,{name:"Disabled"});
  await expect(disabledButton).toBeDisabled();//Assert the disabled state of a button
  await page.getByRole(`button`,{name:"Image"}).click();//Click the Image button
  await page.waitForTimeout(2000);
    await page.getByRole(`button`,{name:"Image"}).click();
    const noOfRoundedButtons=await page.locator(`//button[contains(@class,'rounded-button')]`).count();
    await expect(noOfRoundedButtons).toEqual(noOfRoundedBtns);//Check how many rounded buttons are present 
    console.log(`No of rounded buttons in web page is ${noOfRoundedButtons}`);
});