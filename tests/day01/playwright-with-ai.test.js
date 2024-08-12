import { test } from '@playwright/test';

test('Search for Ukraine in google', async ({ page }) => {
  //Go to google website and search for Ukraine
  await page.goto('https://www.google.com/');
  await page.waitForTimeout(3000); // Wait for 1 second before checking for the search results

  const searchInput = await page.locator("//textarea[@id='APjFqb' and @name='q']");
  await searchInput.fill('Ukraine');
  await page.waitForTimeout(3000);
  await searchInput.press('Enter');
  await page.waitForTimeout(3000);

  // Verify that the search results contain Ukraine
  const searchResults = await page.locator('h3');
  const resultsText = await searchResults.innerText();
  expect(resultsText).toContain('Ukraine');

});
