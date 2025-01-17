import { test } from '@playwright/test';

test.describe('Test Group', () => {
//create beforeeach test group
  test.beforeEach(async ({ page }) => {
    // Navigate to the URL of the webpage
    await page.goto('https://practice.cydeo.com/iframe');
  });

  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });

  test('Locate the iframe by id', async ({ page }) => {
    // Your test steps for Test 1 go here
    //<iframe id="mce_0_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area" class="tox-edit-area__iframe"></iframe>

    // Wait for 2 seconds before proceeding to the next test
    await page.waitForTimeout(2000);
    let myFrame = page.frameLocator('#mce_0_ifr');

    //let elementFromFrame = myFrame.locator("#tinymce");

    let elementInsideIframe = myFrame.locator("//body[@id='tinymce']"); 

    await elementInsideIframe.clear();
    await page.waitForTimeout(2000);
  });

  test('Locate the iframe by css', async ({ page }) => {
    // Your test steps for Test 2 go here
  });

  test('Locate the iframe by xpath', async ({ page }) => {
    // Your test steps for Test 3 go here
  });
});