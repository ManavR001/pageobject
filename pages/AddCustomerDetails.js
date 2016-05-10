/**
 * Created by manavrattan on 4/26/16.
 */
var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currencyType = new SelectWrapper(by.id("currency"));
var locator = require("../util/customlocators.js");
var or = require('../json/OR.json');




var AddCustomerDetails = function(){


    this.gotoAddCustomer = function() {

        //click on add customer page
        element(by.ngClick(or.locators.addcustomerdetailspage.addcustomerbutton)).click();
        return this;
        
    };
    
    this.gotoOpenAccount = function(){

        //fill in the Account details
        element(by.ngClick(or.locators.addcustomerdetailspage.openAccount)).click();

        return this;
    };

    this.gotoSearchCustomer = function(){

        //search that the customer exists
        element(by.buttonText("Customers")).click();

        return this;
    };

    this.addCustomerInfo = function(fName, lName, postcode){

        //enter firstName in the form
        element(by.model(or.locators.addcustomerdetailspage.fName)).sendKeys(fName);

        //enter lastName in the form
        element(by.model(or.locators.addcustomerdetailspage.lName)).sendKeys(lName);

        //enter PostCode in the form
        element(by.model(or.locators.addcustomerdetailspage.pCode)).sendKeys(postcode);

        browser.sleep(2000);
        element(by.css(or.locators.addcustomerdetailspage.addcustomer)).click();
        browser.sleep(1000);

        var alertDialog = browser.switchTo().alert();

        alertDialog.getText().then(function(text){
            console.log(text);
        })

        alertDialog.accept();

        browser.sleep(2000);

        return this;


    };

    this.openAccount = function(customer, currency){

        mySelect.selectByText(customer);

        currencyType.selectByText(currency);

        element(by.buttonText("Process")).click();

        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();

        alertDialog.getText().then(function(text){
            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);

    };


};

module.exports = new AddCustomerDetails();