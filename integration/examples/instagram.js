/// <reference types="cypress" />

//Describe the project
describe("Quales Automation class", function()  {

//Write a test script to login to an application    
it("Instagram login", function() {

    //Visit the application to automate
    cy.visit("https://www.instagram.com/?hl=en")

    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type("quales.tech")

    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type("1234")

    cy.get('.kEKum > :nth-child(3)').click()

    


});


});
