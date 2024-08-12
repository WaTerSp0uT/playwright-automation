import test from "@playwright/test";
test('Search Playwright on google', async ({ page }) => {

    //TEST SCRIPT HERE:
    /**
     * Steps:
     * Open browser => Done by Playwright
     * Navigate to url "https://www.google.com/"
     * Type "Playwright"
     * press Enter
     * Close Broser => Done by Playwright driver
     * 
     */

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000); // Wait for 1 second before checking for the search results  

    const searchInput = await page.locator("//*[@name='q']");
    //await searchInput.type('Playwrite Automation');
    await searchInput.fill('Playwrite Automation');
    await page.waitForTimeout(3000);
    await searchInput.press('Enter');
    await page.waitForTimeout(3000);
    
});
