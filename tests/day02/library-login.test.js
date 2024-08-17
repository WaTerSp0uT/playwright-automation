import { test } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config("./.env");


test('Library login', async ({ page }) => {
  
// Navigate to the library login page
await page.goto(process.env.LIBRARY_URL);

// Wait for the login form to appear
await page.waitForSelector("//label[@for='inputEmail' and text()='Email address']");

const userNameInput = await page.locator("//label[@for='inputEmail' and text()='Email address']");
const passwordInput = await page.locator("//label[@for='inputPassword' and text()='Password']");
const loginButton = await page.locator("//button[@type='submit']");

// Fill in the login form with valid credentials
await userNameInput.fill(process.env.CYDEO_LIBRARY_EMAIL);
await passwordInput.fill(process.env.CYDEO_LIBRARY_PASSWORD);

// Click the login button
await loginButton.click();

//pause for 3 seconds
await page.waitForTimeout(3000);

});


// ENDED AT 02:10