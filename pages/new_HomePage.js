/**
 * Created by manavrattan on 5/3/16.
 */
require ("./new_AnimalPage.js");


var home_page  = function(){

    this.enterFieldValue = function(value) {

        element(by.model('person.name')).sendKeys(value);
    };

    this.getDynamicTextValue = function(){
        return element(by.binding("person.name")).getText();
    }

    this.clickContinue = function(){

        element(by.buttonText("CONTINUE")).click();
        return require("./new_AnimalPage");
    }

};
module.exports = new home_page();
