const {LoginTest} = require('../tests/Login.test');
const {FetchTest} = require('../tests/fetch.test');


new LoginTest().login();
new FetchTest().fetch();