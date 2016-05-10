/**
 * Created by manavrattan on 5/3/16.
 */
var confirm_Page = function(){

    this.getTitle = function(){
        return element(by.id("title")).getText();
    }
};
module.exports = new confirm_Page();