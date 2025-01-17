import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
  let expectedMessage;

//create beforeeach test group
  test.beforeEach(async ({ page }) => {
    // Navigate to the URL of the webpage
    await page.goto('https://practice.cydeo.com/javascript_alerts');
  });

  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });


  test('Handling JS Alerts', async ({ page }) => {
    // Your test steps for Test 2 go here

    page.on("dialog", async (alert) => { 

      await page.waitForTimeout(2000); // wait for 2 seconds before

      expect(alert.message()).toBe('I am a JS Alert'); // checking the alert message
      alert.accept(); // clicking on OK button in alert
    });

    let alertButton1 = page.locator("//button[1]");
    await alertButton1.click();

    expectedMessage = page.locator("//p[2]");

    await expect(expectedMessage).toContainText('You successfully'); // checking the expected message in the paragraph tag

  });

  test('Handling JS confirm Alerts', async ({ page }) => {
    // Your test steps for Test 3 go here
     page.on("dialog", async (alert) => { 

      await page.waitForTimeout(2000); // wait for 2 seconds before

      expect(alert.message()).toBe('I am a JS Confirm'); // checking the alert message
      alert.accept(); // clicking on OK button in alert
    });

    let alertButton2 = page.locator("//button[2]");
    await alertButton2.click();

    expectedMessage = page.locator("//p[2]");

    await expect(expectedMessage).toContainText('Ok'); // checking the expected message in the paragraph tag

  });

  test('Handling JS prompt Alerts', async ({ page }) => {
     // Your test steps for Test 3 go here
     page.on("dialog", async (alert) => { 

      await page.waitForTimeout(2000); // wait for 2 seconds before

      expect(alert.message()).toBe('I am a JS prompt'); // checking the alert message
      
      alert.accept('YARO'); // sending text to prompt in alert

      await page.waitForTimeout(2000); // wait for 2 seconds before
    
    });

    let alertButton3 = page.locator("//button[3]");
    await alertButton3.click();

    expectedMessage = page.locator("//p[2]");

    await expect(expectedMessage).toContainText('YARO'); // checking the expected message in the paragraph tag
  });
});