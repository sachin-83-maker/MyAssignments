import { test,expect } from "@playwright/test";


test(`Lead Creation Home Assignment 1`,async ({page}) => {



await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click();


await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.locator("#createLeadForm_companyName").fill("TCS");
await page .locator("#createLeadForm_firstName").fill('sachin');
await page.locator("#createLeadForm_lastName").fill("kamley");
await page .locator("#createLeadForm_personalTitle").fill("Dr");
await page.locator("//input[@name='generalProfTitle']").fill("Welcome in TestLeaf");
await page.locator("#createLeadForm_annualRevenue").fill("12000000");
await page.locator("//input[@name='departmentName']").fill("Sales & Tax");
await page .locator("#createLeadForm_primaryPhoneNumber").fill('9981024566');
await page.locator(".smallSubmit").click();
await page.waitForTimeout(3000);
// validating texts after lead creation 
await page.waitForSelector('#viewLead_companyName_sp', { state: 'visible' })

await expect (page.locator("#viewLead_companyName_sp")).toContainText("TCS");
console.log(await page.locator("#viewLead_companyName_sp").textContent());
await expect (page.locator("#viewLead_firstName_sp")).toContainText("sachin");
await expect (page.locator("#viewLead_lastName_sp")).toContainText("kamley");
await expect (page.locator("#viewLead_statusId_sp")).toContainText("Assigned");
const company = await page.locator('#viewLead_companyName_sp').textContent();
  const first = await page.locator('#viewLead_firstName_sp').textContent();
  const last = await page.locator('#viewLead_lastName_sp').textContent();
  const companyText = await page.locator('#viewLead_companyName_sp').textContent();
  const firstNameText = await page.locator('#viewLead_firstName_sp').textContent();
  const lastNameText = await page.locator('#viewLead_lastName_sp').textContent();

  // Actual hard assertions: these check only once
  expect(companyText).toContain('TCS');
  expect(firstNameText).toBe('sachin');
  expect(lastNameText).toBe('kamley');
  

});