/// <reference types="cypress" />

//Describe the project
describe("Quales Automation class", function()  {

//Write a test script to login to an application
it("Login", function() {

    //Visit the application to automate
    cy.visit("https://app.warenext.ng/login")

    //Before inputing or clicking on a web element(imput fields, login button), you need cypress to spy on those elements.
    
    //Spy on the email input field
    cy.get('[name="username"]')

    //Type into the email field 
    .type("merchant@test.com")

    //Spy on the password input field
    cy.get('[style="position: relative; width: 100%;"] > .input')

    //Type into the password field
    .type("test1234")

    //Spy on the login button
    cy.get('.sc-cpmLhU')

    //Click on the login button
    .click()




})


});