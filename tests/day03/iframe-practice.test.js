import { test, expect } from '@playwright/test';

test.describe('Test Group Example', async () => {

  // beforeEach hook to navigate to the URL
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/iframe');
  });

  // Test 1: 
  test('Locate Iframe by ID', async ({ page }) => {
    const myFrame = page.frameLocator('#mce_0_ifr');

    //const elementInsideTHeFrame = myFrame.locator("//\*[@id='tinymce']");
    const elementInsideTHeFrame = myFrame.locator("//body[@id='tinymce']");

    await page.waitForTimeout(3000);
    await elementInsideTHeFrame.press("Control+A"); 
   
    await page.waitForTimeout(3000);
    await elementInsideTHeFrame.press("Backspace");
    await page.waitForTimeout(3000);

  //await elementInsideTHeFrame.clear();

    await elementInsideTHeFrame.fill("Hello World!");

    //await page.waitForTimeout(3000);
    console.log(await elementInsideTHeFrame.innerText());

    await expect(elementInsideTHeFrame).toHaveText("Hello World!");


  });


  // Test 2: 
  test('Locate Iframe by CSS', async ({ page }) => {
    const myFrame = page.frameLocator('iframe.tox-edit-area__iframe[title="Rich Text Area"]');

    //const elementInsideTHeFrame = myFrame.locator("//\*[@id='tinymce']");
    const elementInsideTHeFrame = myFrame.locator("//body[@id='tinymce']");

  
    await elementInsideTHeFrame.press("Control+A"); 
   

    await elementInsideTHeFrame.press("Backspace");
 

  //await elementInsideTHeFrame.clear();

    await elementInsideTHeFrame.fill("Hello World!");

  

    await expect(elementInsideTHeFrame).toBeEditable();
  });

  // Test 3: 
  test('Locate Iframe by Xpath', async ({ page }) => {
    const myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");

    //const elementInsideTHeFrame = myFrame.locator("//\*[@id='tinymce']");
    const elementInsideTHeFrame = myFrame.locator("//body[@id='tinymce']");

  
    await elementInsideTHeFrame.press("Control+A"); 
   

    await elementInsideTHeFrame.press("Backspace");
 

  //await elementInsideTHeFrame.clear();

    await elementInsideTHeFrame.fill("Hello World!");

  

    await expect(elementInsideTHeFrame).toBeVisible();
  });


  test('Locate Iframe by Xpath2', async ({ page }) => {
    const myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");

    //const elementInsideTHeFrame = myFrame.locator("//\*[@id='tinymce']");
    const elementInsideTHeFrame = myFrame.locator("//body[@id='tinymce']");

  

    await expect(elementInsideTHeFrame).not.toBeVisible();
    await expect(elementInsideTHeFrame).not.toBeHidden();
  });
});
