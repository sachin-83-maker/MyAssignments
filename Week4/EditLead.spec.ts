import { test,expect } from "@playwright/test";


test(`Lead Edit Home Assignment2 Locators`,async ({page}) => {



await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click(); //click on login


await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator(`//a[text()='Leads']`).click(); //click on leads
//await page.waitForTimeout(2000);
await page.locator(`//a[text()='Find Leads']`).click(); //click on find leads button
await page.locator("#ext-gen248").fill("sachin");  //fill first name
await page.locator("#ext-gen334").click();
await page.locator("//a[text()='11662']").click();
await page.locator("//a[text()='Edit']").click(); //click on edit button
//update information
await page.locator("#updateLeadForm_companyName").fill("Infosys HYD");
await page.locator("#updateLeadForm_annualRevenue").fill("5000000000000");   
await page.locator("#updateLeadForm_departmentName").fill("School Education");   
await page.locator("#updateLeadForm_description").fill(" i am new in test leaf");
await page.locator(`//input[@value='Update']`).click();
//verify all values with assertions
await expect (page.locator("#viewLead_companyName_sp")).toContainText("Infosys");
await expect (page.locator("#viewLead_annualRevenue_sp")).toContainText("$5,000,000,000,000.00");
await expect (page.locator("#viewLead_departmentName_sp")).toContainText("School Education");
await expect (page.locator("#viewLead_description_sp")).toContainText("i am new in test leaf");


});