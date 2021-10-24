/// <reference types="cypress" />

//Describe the project
describe("Quales Automation class", function()  {

//Write a test script to login to an application    
it("Konga login", function() {

    //Visit the application to automate
    cy.visit("https://www.konga.com/account/login?return_url=/")


  //Wait for 6 seconds
   cy.wait(6000)

    cy.get('#username').type("ayobami@quales.tech")

    cy.get('#password').type("test")

    


});


});
