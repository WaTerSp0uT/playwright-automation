

import { test, expect } from '@playwright/test';

test.describe('Assertion UI Testing', () => {   

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
    });

    
    test("Verify the page title is 'Practice'", async ({ page }) => {
        const pageTitle = await page.title();
        console.log(`Page Title: ${pageTitle}`);
        //wait for 3 seconds
        await page.waitForTimeout(6000);
        expect(pageTitle).toEqual('Practice');

    });

    test("Verify the text 'Automation' is included the header element", async ({ page }) => {
        const headerElement = await page.locator("h1");
        const headerText = await headerElement.textContent();
        expect(headerText).toContain('Automation');
    });

    test("Veify the element 'A/B Testing' is clickable", async ({ page }) => {
        const abTestingLink = page.locator('a[href="/abtest"]');

        expect(await abTestingLink.isEnabled()).toBeTruthy();
        //if method returns promise need to use await 
        await expect(abTestingLink).toBeEnabled();

    });

    test("Verify the element 'Autocomplete' href is /autocomplete", async ({ page }) => {
        const autocompleteLink = page.locator('a[href="/autocomplete"]');
        const href = await autocompleteLink.getAttribute('href');
        expect(href).toBe('/autocomplete');

        await expect(autocompleteLink).toHaveAttribute("href","/autocomplete")


    });


});