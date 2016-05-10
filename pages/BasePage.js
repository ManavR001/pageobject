/**
 * Created by manavrattan on 4/25/16.
 */
var BasePage = function(){

  this.navigatetoURL = function(url) {

      browser.get(url);
  };

    this.getPageTitle = function(){
        return browser.getTitle();
    }
};

module.exports = new BasePage();