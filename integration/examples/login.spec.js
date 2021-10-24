/// <reference types="cypress" />

//Describe the project
describe("Quales Automation class", function()  {

//Write a test script to login to an application    
it("Login", function() {

    //Visit the application to automate
    cy.visit("https://app-dev.warenext.ng")

   //Wait for 3 seconds
   cy.wait(3000)

    //Before inputting or clicking on a web element(input field, login button), you need cypress to spy on those elements.

    //Spy on the email input field
    cy.get('[name="username"]')

    //type into the email field
    .type("merchant@test.com")

    //Spy on the password input field
    cy.get('[style="position: relative; width: 100%;"] > .input')

    //type into my password into the password field
    .type("test1234")

    //Spy on the login button
    cy.get('.sc-cpmLhU')

    //click the login button
    .click()

    //Assertions
    //Spy the dashboard Home Page text element
    cy.contains('Dashboard')
    
    //Check that dashboard element is visible
    .should('be.visible')

    cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')

     //Check that dashboard element on left corner of the app is visible
     .should('be.visible')


});





});
