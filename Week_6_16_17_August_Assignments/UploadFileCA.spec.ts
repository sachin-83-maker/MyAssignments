import{test,expect} from "@playwright/test"
import path from "path";

test.only(`FileUpload with type=file`,async ({page}) => {

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const uploadFile =  page.locator(`input[id='file-upload']`);

//OPtion 1 : Uploading filer from specified folder
      const filepath = "C:\\Users\\mcask\\Downloads\\PW-W4-Alert-Frame (2).pdf"

    await uploadFile.setInputFiles(filepath);
    const inputValue = await uploadFile.inputValue();
  expect(inputValue).toContain("PW-W4-Alert-Frame (2).pdf");


    await page.waitForTimeout(3000)

});

test(`Upload an Image`,async ({page}) => {
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    const filePromise = page.waitForEvent("filechooser")
    page.locator(`#drag-drop-upload`).click();
    const fileUpload = await filePromise;
  await fileUpload.setFiles("C:\\Users\\mcask\\Downloads\\WhatsApp Image 2025-08-14 at 2.24.45 PM.jpeg")
   await page.waitForTimeout(3000)
     
    
})
