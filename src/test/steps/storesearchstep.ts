import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import {chromium, Page, Browser, defineConfig} from "@playwright/test";
   let browser: Browser;
let page: Page;
setDefaultTimeout(60 * 1000 * 2);

Given('user navigates to specsaver home page', async function () {
 browser = await chromium.launch({headless: false, });
  let context = await browser.newContext({ extraHTTPHeaders: { 'X-Security-Header': 'barrel-expert', },})
  page = await context.newPage();
  await page.goto("https://qa-gb-luc-main.az.ssdgws.co.uk/");
  await console.log("launched homepage")
   
     });

  When('user click on Find a store link', async function () {
   await page.locator('xpath=//*[@id="header"]/div[2]/div[1]/div/div/div[1]/ul/li[1]/a').click()
            await console.log("clickon find a store")
       //I need a code to click allow button on geolocation popup 
       //await context.grantPermissions(['geolocation'], { origin: 'https://qa-gb-luc-main.az.ssdgws.co.uk/stores' })
  });

  When('user key the Coventry store and hit enter', async function () {
        await console.log("type coventry")
  });

  Then('user see the Coventry store card', async function () {
        await console.log("see results for coventry")
  });