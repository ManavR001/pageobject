/**
 * Created by manavrattan on 5/3/16.
 */
require ('./new_ConfirmPage.js');

var animal_Page = function(){

    this.selectAnimal  = function(index){
        element(by.model("animal")).$('[value="'+index+'"]').click();

    };
    
    this.clickContinue = function(){

        element(by.buttonText("CONTINUE")).click();
        return require("./new_ConfirmPage.js");
    };

};
module.exports = new animal_Page();