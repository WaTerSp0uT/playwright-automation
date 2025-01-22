import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
  let aElements;

//create beforeeach test group
  test.beforeEach(async ({ page }) => {
    // Navigate to the URL of the webpage
    await page.goto('https://practice.cydeo.com/');
    aElements = await page.locator("//ul/li[@class='list-group-item']/a").all();
  });

  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });


  test('Checking count', async ({ page }) => {
    // Your test steps for Test 1 go here
    //Verifing elements count should be equal to the number of elements
     expect(aElements.length).toBe(50);

    });


  test('Looping Thrue and making sure its visible and clickable', async ({ page }) => {
    
    // Your test steps for Test 2 go here 
    aElements = await page.locator("//ul/li[@class='list-group-item']/a").all();
    await page.waitForTimeout(5000);
    // for (let i = 0; i < aElements.length; i++) {
    //   const link = aElements.nth(i);

    //   await link.waitFor();
    //   await expect(link).toBeVisible();
    //   await expect(link).toBeClickable();

    //   await link.click();

    //   await page.waitForTimeout(2000); // wait for 2 seconds before
     
    // }

    for (let element of aElements){
      await expect(element).toBeEnabled();
      //await expect(element).toBeClickable();
    }

  });

});