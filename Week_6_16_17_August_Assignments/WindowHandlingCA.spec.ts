import { expect,test } from "@playwright/test";
test.only(`Handling multiple windows in concurrent way`,async({context,page})=>{


await page.goto(`https://login.salesforce.com/`);
 await page.locator("#username").fill("ravindran.ramdas@testleaf.com");
 await page.locator("#password").fill("RaviSalesTest#1432");
 await page.locator("#Login").click();
 await page.waitForTimeout(3000);
 // Print title of parent window
 console.log(`page URL is: ${page.url()}`);
 console.log(`page Title is: ${await page.title()}`);
 //Create promise
 const [page2]=await Promise.all([(context.waitForEvent("page")),
    page.click("//*[text()='Learn More']")])
    //fullfill promise
    await page2.locator("//button[text()='Confirm']").click();
    const pageTitle=await page2.title();
    //print title and URL of child window
    console.log(`page title of chile window is ${pageTitle}`);
    console.log(`page URL of child window is ${page.url()}`);
    // Verify title of child window
    expect(pageTitle).toEqual("Service Cloud: AI-powered Customer Service Agent Console | Salesforce US")


});

