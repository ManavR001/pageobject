describe("Test Login", function(){

    it("validate our user credentials", function(){
        //For non angular sites ignore synchronization must be set to true
        browser.ignoreSynchronization = true;

        browser.get("http://gmail.com");
        element(by.id("Email")).sendKeys("manav.rattan@gmail.com");
        element(by.id("next")).click();



        element(by.id("Passwd")).sendKeys("loveomdutt12$$");

        element(by.id("signIn")).click();

    });
});
