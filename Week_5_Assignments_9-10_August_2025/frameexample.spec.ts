import {expect, test } from "@playwright/test";


test(`Test to interact with the frames using URL`,async ({page}) => {


await page.goto(`https://leafground.com/frame.xhtml`)


//Interact with the frames using URL


const frameURL = page.frame({url:"https://leafground.com/framebutton.xhtml"});


await frameURL?.locator("#Click").click() // page.locator 
// ?.--> is optional chaining to handle your exceptions
await page.waitForTimeout(3000)


/* if(frame){
await frame.locator(#Click).click()
}else{
console.log("Frame Not Found")} */

})


test(`Test to interact with the frames using framelocator`,async ({page}) => {


await page.goto(`https://leafground.com/frame.xhtml`);


//Using frame locator
const firstFrame = page.frameLocator("iframe[src='default.xhtml']");
const clickButton = firstFrame.locator("#Click");

// Verify initial text
await expect(clickButton).toHaveText("Click Me");

// Click the button
await clickButton.click();

// Verify changed text
await expect(clickButton).toHaveText("Hurray! You Clicked Me.");


await page.waitForTimeout(3000); 

//interact with nested frame
/* const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
const frame_outerframe = card.frameLocator("iframe");
const frame_innerframe = frame_outerframe.frameLocator("iframe");
await frame_innerframe.locator("#Click").click(); */


//Interact with frame using "name"


const frameName = page.frame({name:'frame2'});
// await frameName?.locator('#Click').click()
await frameName?.click('#Click')
await page.waitForTimeout(3000)



})
