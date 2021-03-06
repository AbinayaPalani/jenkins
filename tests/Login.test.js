const puppeteer = require('puppeteer');

const URL = 'https://staging.access.answerconnect.com';

let browser, page;
jest.setTimeout(60000);
describe('Suite for admin tool on jenkins',()=>{
it('Admin tool ', async () => {
     browser = await puppeteer.launch({
        headless : true,
        defaultViewport: null,
        devtools: false,
        args:['--start-maximized']
    });
        page = await browser.newPage();
        const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});
        
        await page.goto(URL, {waitUntil: ["load", "networkidle2"]});
        await navigationPromise;
        const title = await page.title();
        expect(title).toBe('AnswerConnect');
        console.log("Title of CWA "+title);
        await page.type('input[name="email"]','abinaya.palani@anywhere.co');
        await page.type('input[name="password"]', 'mani1798');
        await page.click('button.button-primary ');
        await navigationPromise;
        await page.waitFor(15000);
        await page.waitForSelector('#fetchAccountInput');
        await page.type('#fetchAccountInput','9223300271');
        await page.click('a#fetch_ac_btn.fetch_ac_btn.search');
        await page.waitFor(5000);
        await page.click('a#fetch_ac_btn.fetch_ac_btn.search');
        await navigationPromise;
        await page.waitFor(15000);
        await page.click('li#billing');
        await page.waitFor(2000);
        await browser.close();
    
     
    })
    })

    


