import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test.describe('Test Group', () => {
  let aElements;
 
//create beforeeach test group
  test.beforeEach(async ({ page }) => {
    
    // Navigate to the URL of the webpage
    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
    console.log(code);
    
    await page.setExtraHTTPHeaders({
      Authorization: `Basic ${code}`,
    });

    await page.goto(process.env.SEP_QA_URL);
  });

  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });


  test('SEP pracice @tag1', async ({ page }) => {

    const first_name_input = page.locator("//input[@formcontrolname='firstName']");
      
    const last_name_input = page.locator("//input[@formcontrolname='lastName']");

    const email_name_input = page.locator("//input[@formcontrolname='email']");

    const phone_number_input = page.locator("//input[@formcontrolname='phoneNumber']");

    const dropDown = page.locator("//mat-label[text()='How did you hear about us?']");

    const dropDownEmailOption = page.locator("//mat-option[@value='email']");

    const nextButton1 = page.locator("//button[@class='next-button']");

    //page2
    const upfrontOption = page.locator("//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']");
    const nextButton2 = page.locator("//button[text()='Next']");

    //Page3
    const iframe1 = page.frameLocator("//iframe[@title='Secure payment input frame']");

    const inputCard = iframe1.locator("//input[@id='Field-numberInput']");
    const inputExpDate = iframe1.locator("//input[@id='Field-expiryInput']");
    const inputCVV = iframe1.locator("//input[@id='Field-cvcInput']");
    const inputZIP = iframe1.locator("//input[@id='Field-postalCodeInput']");

    const checkTermsAndCOnditions = page.locator("//input[@id='defaultCheck2']");

    const payButton = page.locator("//span[@class='mdc-button__label']");


    await first_name_input.fill("Yaro");
    await last_name_input.fill("Tamir");
    await email_name_input.fill("yaro@gmail.com");
    await phone_number_input.fill("0555555555");

    //pause 3 sec
    await page.waitForTimeout(3000);
    await dropDown.click();
    await dropDownEmailOption.click();
    await page.waitForTimeout(3000);

    await nextButton1.click();
    await page.waitForTimeout(3000);

    //Page 2 Actions
    await upfrontOption.click();
    await nextButton2.click();

    //Page 3 Actions
    await inputCard.fill(process.env.VISA_CARD);
    await inputExpDate.fill(process.env.EXP_DATE);
    await inputCVV.fill(process.env.CVV);
    await inputZIP.fill(process.env.ZIP_CODE);

    await page.waitForTimeout(3000);

    await checkTermsAndCOnditions.check();
    await page.waitForTimeout(3000);

    await payButton.click();
    await page.waitForTimeout(3000);

    //pause 3 sec
    await page.waitForTimeout(3000);

    // Expect the success message to be displayed
    //await expect(page.locator("//div[contains(text(), 'Payments confirmation ')]")).toBeVisible();

    });



});