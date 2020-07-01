const timeout = process.env.SLOWMO ? 30000 : 10000;
jest.setTimeout(timeout);

class LoginTest{
    
login(){

beforeAll(async () => {

    await page.goto(URL, {waitUntil: ["load", "networkidle2"]});

});

describe('Test title of the page and then login into cwa', () => {


    test('Title of the page', async () => {
        
        const title = await page.title();
        expect(title).toBe('AnswerConnect');
        
    }, timeout);

    test('Test login into the cwa page', async () =>{
        await page.type('input[name="email"]','abinaya.palani@anywhere.co');
        await page.type('input[name="password"]', 'mani1798');
        await page.click('button.button-primary ');
    });



});
}
}

module.exports = {LoginTest}