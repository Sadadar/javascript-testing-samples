var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

var urlRoot = 'http://sandbox.cosoteamup.com/';

var USERNAME = 'admin@nextuc.com';

var loginPage = {
  authenticate: function(browser) {
    return browser.get(urlRoot + '#signin')
      .waitForElementByCssSelector('section.page-body', 30e3)
      .elementByName('username').type(USERNAME)
      .elementByName('password').type('Admin!@#$')
      .elementById('signInBtn').click()
      .waitForElementByCssSelector('section.page-body', 30e3);
  }
}

describe('Login', function() {

  it('should login', function() {
    return loginPage.authenticate(this.browser)
      .waitForElementByCssSelector('.overlay--active', 30e3)
      .title().should.become('CoSo TeamUP Dashboard');
  });
});
