
import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the URL of the webpage
    await page.goto('https://practice.cydeo.com/web-tables');

    console.log("page.title()");
    console.log( await page.title() );
    expect( await page.title()).toContain('Table');

  });

 
  test.afterEach(async ({ page }) => {
    // Close the browser window after each test
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the browser window
    await page.close();
  });




  test('WebTable Test1 Validate rows and cols @tag10', async ({ page }) => {
    let table = page.locator("//table[@class='SampleTable']");
    
    let rowsNumbers = await table.locator("//tr").all();
    expect(rowsNumbers.length >= 8).toBeTruthy();

    console.log(`Total number of rows: ${rowsNumbers.length}`);

    let headersNumbers = await table.locator("//th").all();
    expect(headersNumbers.length >= 8).toBeTruthy();

    let cellsumbers = await table.locator("//td").all();
    expect(cellsumbers.length >= 8).toBeTruthy();
    expect(cellsumbers.length === 104).toBeTruthy();

    console.log(`Total number of rows: ${cellsumbers.length}`);
  });

  test('WebTable Test2 read all the data from the webTable @tag11', async ({ page }) => {
    //locationg table element.
    let table = page.locator("//table[@class='SampleTable']");
    //getting all the rows in the table excluding the header row.
    let rowsNumbers = await table.locator("//tr").all();

    for (let i=1; i< rowsNumbers.length; i++) { //numbers of rows in the table 9
      let cellValue = await rowsNumbers[i].locator("//td").all();

      for (let j=1; j< cellValue.length -1; j++) { //numbers of columns in the table 8
        let cellText = await cellValue[j].innerText();
        console.log(`Row: ${i+1}, Col: ${j+1}, Value: ${cellText}`);
      }
      console.log("----------------------------------------");

    }
    //Another approach is to read all the data from the webTable
    let cells = await table.locator("//td").all();
    for(let cell of cells){
      let cellValue = await cell.innerText();
      console.log(`Value: ${cellValue}`);
    }

  });

  test('WebTable Test3 check all the check boxes @tag12', async ({ page }) => {
    let table = page.locator("//table[@class='SampleTable']");
    let cellsCheck = await table.locator("//td[1]//input").all();
    for(let cell of cellsCheck){
      let cellValue = await cell.getAttribute("type");
      console.log(`Value: ${cellValue}`);

      if(cellValue.includes("check")){
        await cell.check();
        await page.waitForTimeout(3000);
      }
    }

  });




});