/**
 * Created by manavrattan on 4/25/16.
 */
var base = require('../pages/BasePage.js');
var or = require('../json/OR.json');

describe("Bank Manager Login Test", function(){

    var home_page = require('../pages/HomePage.js');

    it("Login as Bank Manager", function(){

        base.navigatetoURL(or.testsiteurl);

        var customer = home_page.loginAsBankManager();
        customer.gotoAddCustomer().addCustomerInfo(or.locators.addcustomerdetailspage.testdata.fName,
            or.locators.addcustomerdetailspage.testdata.lName,
            or.locators.addcustomerdetailspage.testdata.pCode);

        var title = base.getPageTitle();
        expect(title).toBe("Protractor practice website - Banking App");

        browser.sleep(3000);

    });
});