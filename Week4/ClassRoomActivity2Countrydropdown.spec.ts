import { test } from "@playwright/test";


test(`Learn to Handle countryDropDown`,async ({page}) => {



await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click();


await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.locator(`//input[@id='createLeadForm_companyName']`).fill("Testleaf");
await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Ravindran`);
await page.locator(`//input[@id='createLeadForm_lastName']`).fill("R");
await page.waitForTimeout(5000)
const dropDown = page.locator(`#createLeadForm_generalCountryGeoId>option`);
const dropDownCount =await dropDown.count();
console.log(`No. of values in the dropdown ${dropDownCount}`);
for (let index = 0; index < dropDownCount; index++) {


console.log(await dropDown.nth(index).innerText());// Print all 247 values

}
await page.waitForTimeout(5000)


});


test(`Learn to Handle currency`,async ({page}) => {



await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click();


await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.locator(`//input[@id='createLeadForm_companyName']`).fill("Testleaf");
await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Ravindran`);
await page.locator(`//input[@id='createLeadForm_lastName']`).fill("R");
await page.waitForTimeout(5000)
const dropDown = page.locator(`#createLeadForm_currencyUomId>option`);
const dropDownCount =await dropDown.count();
console.log(`No. of values in the dropdown ${dropDownCount}`);
for (let index = 0; index < dropDownCount; index++) {


console.log(await dropDown.nth(index).innerText());

}
await page.waitForTimeout(5000)


});