import { test } from "@playwright/test";
import credentials from "../../Data/DropdownValues.json"

test.describe.serial(`Login tests in serial mode`,async () => {

for(let data of credentials){



test(`Data Parametrization Assignment ${data.TCaseId}`,async ({page}) => {

await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click();
await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator("//a[text()='Leads']").click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.locator("#createLeadForm_companyName").fill("ONGC");
await page .locator("#createLeadForm_firstName").fill('Javed');
await page.locator("#createLeadForm_lastName").fill("Akhtar");
//Select "Direct Mail" from Source dropdown using label
await page.locator('#createLeadForm_dataSourceId').selectOption({ label: data.Source } );
//Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
await page.locator('#createLeadForm_marketingCampaignId').selectOption(data ["Marketing Campaign"]);
// Get the count and print all the values in the Marketing Campaign dropdown
const dropDown = page.locator(`#createLeadForm_marketingCampaignId>option`);
const dropDownCount =await dropDown.count();
console.log(`No. of values in the dropdown ${dropDownCount}`);
for (let i = 0; i < dropDownCount; i++) 
{


console.log(await dropDown.nth(i).innerText());

}
// Select General Services from the Industry dropdown using index  
await page.locator('#createLeadForm_industryEnumId').selectOption({ index: parseInt(data.industryDropdownIndex) });
//Select INR from the Preferred Currency dropdown
await page.locator('#createLeadForm_currencyUomId').selectOption( data["Preferred Currency"] );
//Select India from the Country dropdown 
await page.locator("#createLeadForm_generalCountryGeoId").selectOption(data ["Country"]);
//Select any state from the State dropdown 
await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption(data["State"]);
//get the count of all states and print values in console
const dropDown1 = page.locator(`#createLeadForm_generalStateProvinceGeoId>option`);
const dropDownCount1 =await dropDown1.count();
console.log(`No. of values in the dropdown ${dropDownCount1}`);
for (let j = 0; j < dropDownCount1; j++) 
{


console.log(await dropDown1.nth(j).innerText());

}
await page.locator(".smallSubmit").click(); // Click Create Lead 
await page.waitForTimeout(5000)



})

}
})