import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import {chromium, Page, Browser, defineConfig} from "@playwright/test";
/*export default defineConfig({
   use: {
            extraHTTPHeaders: {
        'X-Security-Header': 'barrel-expert'

       }}})
 */
   let browser: Browser;
let page: Page;
setDefaultTimeout(60 * 1000 * 2);

Given('user navigates to specsaver home page', async function () {
 browser = await chromium.launch({headless: false, });
  let context = await browser.newContext({ extraHTTPHeaders: { 'X-Security-Header': 'barrel-expert', },})
    page = await context.newPage();
    //await context.grantPermissions(['geolocation'], { origin: 'https://qa-gb-luc-main.az.ssdgws.co.uk/stores' })
  await page.goto("https://qa-gb-luc-main.az.ssdgws.co.uk/");
  await page.locator('xpath=//*[@id="header"]/div[2]/div[1]/div/div/div[1]/ul/li[1]/a').click()
  await context.grantPermissions(['geolocation'], { origin: 'https://qa-gb-luc-main.az.ssdgws.co.uk/stores' })
  await console.log("launched homepage")
   
    
  });


  When('user click on Find a store link', async function () {
   // await page.locator('xpath=//*[@id="header"]/div[2]/div[1]/div/div/div[1]/ul/li[1]/a').click()
    
        await console.log("clickon find a store")
        

                //await page.pause()
        
  });

  When('user key the Coventry store and hit enter', async function () {
    // Write code here that turns the phrase above into concrete actions
    await console.log("type coventry")
  });

  Then('user see the Coventry store card', async function () {
    // Write code here that turns the phrase above into concrete actions
    await console.log("see results for coventry")
  });