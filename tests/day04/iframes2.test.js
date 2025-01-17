import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
//create beforeeach test group
  test.beforeEach(async ({ page }) => {
    // Navigate to the URL of the webpage
    await page.goto('https://demo.automationtesting.in/Frames.html');
  });

  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });

  // test('Locate the iframe by id', async ({ page }) => {
  //   // Your test steps for Test 1 go here
  //   //<iframe id="mce_0_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area" class="tox-edit-area__iframe"></iframe>

  //   // Wait for 2 seconds before proceeding to the next test
  //   await page.waitForTimeout(2000);

  //   page.locator("text='Iframe with in an Iframe'").click();
    
  //   // const secondIframe = page.frameLocator('(//iframe[@src="SingleFrame.html"])[2]');
  //   // await secondIframe.locator('input[type="text"]').fill('Hello, Second Frame!');

  //   //First neeed to locatae outer page , then inner page.
  //   const outerFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');
  //   const innerFrame = outerFrame.frameLocator('iframe[src="SingleFrame.html"]');
  //   const elementInsideIframe = innerFrame.locator('input[type="text"]');
  //   await elementInsideIframe.fill('Hello, Inner Frame!');
  //   await page.waitForTimeout(2000);

  //   const headerElement1 = innerFrame.locator('text=iFrame Demo');
  //   headerElement1.highlight();

  //   await expect(headerElement1).toBeVisible();

    

  //   await elementInsideIframe.clear();
  //   await page.waitForTimeout(2000);

    
  // });

  test('Locate the iframe by css', async ({ page }) => {
    // Your test steps for Test 2 go here

    page.locator("text='Iframe with in an Iframe'").click();

    const outerFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');
    const innerFrame = outerFrame.frameLocator('iframe[src="SingleFrame.html"]');
    const elementInsideIframe = innerFrame.locator('input[type="text"]');

    await page.waitForTimeout(2000);
    await elementInsideIframe.fill('Hello, Inner Frame!');
    await page.waitForTimeout(2000);

    await elementInsideIframe.press("Control+A");
    await page.waitForTimeout(2000);
    await elementInsideIframe.press("Backspace");

    await page.waitForTimeout(2000);
    await elementInsideIframe.clear();
  });

  // test('Locate the iframe by xpath', async ({ page }) => {
  //   // Your test steps for Test 3 go here
  // });
});