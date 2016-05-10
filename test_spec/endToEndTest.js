var home_page = require('../pages/new_HomePage.js');
var animal_page = require('../pages/new_AnimalPage.js');

describe("To test animal adoption flow", function(){

    beforeEach(function(){
       browser.get("http://www.thetestroom.com/jswebapp/index.html");
    });

    it("Should be able to adopt an animal", function(){

        home_page.enterFieldValue("Hey Manav, understanding is the key");
        var textValue = home_page.getDynamicTextValue();
        browser.sleep(1000);
        expect(textValue).toBe("Hey Manav, understanding is the key");
        var animal_page = home_page.clickContinue();

        animal_page.selectAnimal(2);


        var confirm_page = animal_page.clickContinue();
        expect(confirm_page.getTitle()).toBe("Thank you");

    });
});