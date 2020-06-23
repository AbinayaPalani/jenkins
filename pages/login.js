class Login{

    constructor(page) {
        this.page = page;
    }

    async getTitle() {
        return this.page.title();
    }


    async passUserName(userName) {
        return this.page.type('input[name="email"]',userName);        
    }

    async passPassword(password){
        return this.page.type('input[name="password"]', password);
    }

    async submitButton(){
       // return this.page.waitFor('button.button-primary ');
        return this.page.$eval('button.button-primary ', ele => ele.click());     
    }

    async fetchAccount(accountNumber){

        return this.page.waitFor(6000);
        return this.page.type('#fetchAccountInput',accountNumber);
            
    }

    async enterFetchAccount(){

        return this.page.waitFor(6000);
        return this.page.$eval('a#fetch_ac_btn.fetch_ac_btn.search', ele =>ele.click());
       // return this.page.$eval('a#fetch_ac_btn.fetch_ac_btn.search', ele =>ele.click());

    }

    async clickBilling(){
        return this.page.$eval('ul[id="search_Result"] li', ele => ele.click());
        
    }



    

}

module.exports = Login;

