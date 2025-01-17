import { test, expect } from '@playwright/test';

test.describe('Test Group Example', async () => {

  // beforeEach hook to navigate to the URL
  test.beforeEach(async ({ page }) => {

    await page.goto('https://practice.cydeo.com/javascript_alerts');
  });

  // Test 1: 
  test('Handling JS Alerts', async ({ page }) => {

    await page.waitForTimeout(3000);
    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(3000);
        dialog.accept();
    });

    const clickForJSAler = page.locator("(//button[@class='btn btn-primary'])[1]");

   await clickForJSAler.click();
   await page.waitForTimeout(3000);

   await expect( page.locator("text='You successfully clicked an alert'")).toBeVisible(); 

   await page.waitForTimeout(3000);

  });


  // Test 2: 
  test('Handling JS Confirm', async ({ page }) => {
    let confirmMessage;

    await page.waitForTimeout(3000);
    page.on('dialog', async (dialog) => {
        confirmMessage = dialog.message();

        await page.waitForTimeout(3000);
        dialog.accept();
    });

    const clickForJSConfirm = page.locator("(//button[@class='btn btn-primary'])[2]");

    await clickForJSConfirm.click();
    await page.waitForTimeout(3000);
    await expect( page.locator("text='You clicked: Cancel'")).toBeVisible();

    expect(confirmMessage).toContain("Ok");


  });

  // Test 3: 
  test('Handling JS Promots', async ({ page }) => {
    let promptValue;

    await page.waitForTimeout(3000);
    page.on('dialog', async (dialog) => {

        promptValue = await dialog.message();

        await page.waitForTimeout(3000);
        await page.waitForTimeout(3000);
        dialog.accept('YARO');
    });
    
    await page.waitForTimeout(3000);

    const clickForJSPromt = page.locator("(//button[@class='btn btn-primary'])[3]");

    await clickForJSPromt.click();
    await page.waitForTimeout(3000);
    await expect(page.locator("text='You entered: YARO'")).toBeVisible();

    expect(promptValue).toBe("I am a JS prompt");
   
  });


});
