
import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the URL of the webpage
    await page.goto('https://example.com');
  });

 
  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });




  test('My first test', async () => {
    // Navigate to the URL of the webpage
    await page.goto('https://example.com');

    // Verify that the title of the page is correct
    await expect(page.title()).toBe('Example Domain');
  });
});