
import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the URL of the webpage
    await page.goto('https://practice.cydeo.com');

    console.log("page.title()");
    console.log( await page.title() );
    expect( await page.title()).toBe('Practice');
  });

 
  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });




  test('Left click @tag2', async ({ page }) => {
    await page.click("text='A/B Testing'");
    await page.waitForTimeout(3000);
    expect(await page.title()).toBe('No A/B Test');

  });


  test('Right Cick @tag3', async ({ page }) => {
    

    await page.click("text='A/B Testing'",{button: 'right'});
    await page.waitForTimeout(3000);
    expect(await page.title()).toBe('No A/B Test');
  });

  test('Double Click @tag4', async ({ page }) => {
    await page.dbclick("text='Checkboxes'");
  });

  test('Mouse Hover @tag5', async ({ page }) => {
    await page.click("text='Hovers'");
    await page.waitForTimeout(3000);
    
    let elementToHove = await page.locator("(//img[@alt='User Avatar'])[1]");
    await elementToHove.hover();

    await page.waitForTimeout(3000);
    //await elementToHove.hover();

    //page.hover(elementToHove);

    let elementsToHove = await page.locator("//img[@alt='User Avatar']").all();

    for (let element of elementsToHove) {
      await element.hover();
      await page.waitForTimeout(2000);
    }

  });
  
  test('Drag and Drop @tag6', async ({ page }) => {
    await page.click("text='Drag and Drop'");
    await page.waitForTimeout(2000);
   await page.dragAndDrop("//div[@id='column-a']","//div[@id='column-b']");
   await page.waitForTimeout(2000);
  });


  test('Scrolll @tag7', async ({ page }) => {

    // X,Y
    // await page.mouse.wheel(0,5000);
    // await page.waitForTimeout(2000);

    let inputsLink = await page.locator("text='Inputs'");
    await inputsLink.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await inputsLink.click();



  });


});