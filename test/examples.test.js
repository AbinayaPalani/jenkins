const puppeteer = require('puppeteer');

jest.setTimeout(60000);
describe('First test suite', ()=>{

    it('launch the browser and load the url', async() =>{
        const browser = await puppeteer.launch(
            {
            headless: false
        }); 

        const page = await browser.newPage();
        const url = 'https://example.com';
        await page.goto(url);

        await browser.close();
    })

})


// (async () => {
//     const browser = await puppeteer.launch({headless: true}); 
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     await page.screenshot({path: 'example.png'});
  
//     await browser.close();
// })()