const puppeteer = require('puppeteer');
const Login = require('../pages/login');

jest.setTimeout(60000);
describe('Admin tool actions', ()=>{

    var browser;
    var page;

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: false, devtools: false, slowMo: true, timeout : 90000});
        page = await browser.newPage();
        await page.goto('https://staging.access.answerconnect.com');
        
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should have the correct page title', async () => {

        const login = new Login(page);
        expect(await login.getTitle()).toEqual('AnswerConnect');

        
    });

    it('should have to login into cwa page', async () =>{

        const login = new Login(page);
        await login.passUserName('abinaya.palani@anywhere.co');
        await login.passPassword('mani1798');
        await login.submitButton();
     
        


    });

    it('should have to fetch the account in cwa', async() =>{

        const login = new Login(page);
         
        
        await login.fetchAccount('7011011030');
       


    });

    it('should have to select billing options', async() =>{

        const login = new Login(page);
         
        await login.enterFetchAccount();

    });

});