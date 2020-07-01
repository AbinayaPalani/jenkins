const puppeteer = require('puppeteer');
const timeout = process.env.SLOWMO ? 30000 : 10000;
jest.setTimeout(50000);

const URL = 'https://staging.access.answerconnect.com';

let browser, page;
describe('Suite for admin tool on jenkins',()=>{
it('Admin tool ', async () => {
     browser = await puppeteer.launch({
        headless : truet,
        defaultViewport: null,
        devtools: false,
        args:['--start-maximized']
    });
        page = await browser.newPage();
        await page.goto(URL, {waitUntil: ["load", "networkidle2"]});
        
        const title = await page.title();
        expect(title).toBe('AnswerConnect');
        console.log("Title of CWA "+title)
        await page.type('input[name="email"]','abinaya.palani@anywhere.co');
        await page.type('input[name="password"]', 'mani1798');
        await page.click('button.button-primary ');

        await page.waitFor(10000);
        await page.waitFor('#fetchAccountInput');
        await page.type('#fetchAccountInput','9223300271');
        await page.click('a#fetch_ac_btn.fetch_ac_btn.search');
        await page.waitFor(5000);
        await page.click('a#fetch_ac_btn.fetch_ac_btn.search');

            
        await page.waitFor(10000);
        await page.click('li#billing');
        await page.waitFor(2000);
        await browser.close();
    
     
    })
    })

    


