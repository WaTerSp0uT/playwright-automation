import { test } from '@playwright/test';

test('Youtube test', async ({ page }) => {

    await page.goto('https://www.youtube.com/');

    // Search for a video
    const searchBox = await page.locator("//input[@id='search']");

    await searchBox.click();
    await searchBox.fill('video');
    await searchBox.press('Enter');

    // pasue for 3 seconds
    await page.waitForTimeout(3000);

    // Wait for the video to load
    await page.waitForSelector("//div[@id='contents']//a[@id='thumbnail']//img");

    // Verify the first video loaded
    const firstVideo = await page.waitForSelector("//div[@id='contents']//a[@id='thumbnail']//img");

    // Verify the video views
    const views = await page.locator("(//div[@id='metadata-line']//span[@class='inline-metadata-item style-scope ytd-video-meta-block' and contains(text(), ' watching')])[2]')").textContent();
    console.log(`Video views: ${views}`);

  
});