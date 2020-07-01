const timeout = process.env.SLOWMO ? 30000 : 10000;
jest.setTimeout(50000);
class FetchTest{

    fetch(){
    describe('Fetch the account in cwa', () => {

    test('Place the account in search box ', async () => {
        await page.waitFor(15000);
        await page.waitFor('#fetchAccountInput');
        await page.type('#fetchAccountInput','9223300271');
        await page.click('a#fetch_ac_btn.fetch_ac_btn.search');
        await page.waitFor(5000);
        await page.click('a#fetch_ac_btn.fetch_ac_btn.search');
    });

    test('Enter into billing page', async () =>{
        
        await page.waitFor(10000);
        await page.click('li#billing');
        await page.waitFor(2000);
    });

});
}
}
module.exports = {FetchTest}