/// <reference types = "cypress"/>

it('File Upload Test', function () {

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')

})