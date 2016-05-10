/**
 * Created by manavrattan on 4/26/16.
 */

describe("Customer Information Test", function(){

    var add_customer = require('../pages/AddCustomerDetails.js');

    it("Adding Customer Information", function(){

       add_customer.gotoAddCustomer();
        add_customer.addCustomerInfo("Kathi", "Rattan", "91505");

    });

    var add_customer = require('../pages/AddCustomerDetails');

    it("Open Account", function(){

        add_customer.gotoOpenAccount();
        add_customer.openAccount("Kathi Rattan" , "Rupee");

    });
});