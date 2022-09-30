/// <reference_types ="cypress"/>
before(function () {
    cy.fixture('example.json').as('test_data')


})
it('Read Files using Fixture', function () {
    cy.fixture('example.json').then((data) => {

        cy.log(data.name)
        cy.log(data.email)
    })
    cy.log(this.test_data.name)
})
it('Read file using readFile()', function () {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {

        cy.log(data.name)
        cy.log(data.email)
    })
    //file will be created in the root directory unless you specify a path


})
it('Write File Demo', function () {
    cy.writeFile('sample.txt', 'Hello, I am Raji and I am learning cypress.\n')
    cy.writeFile('sample.txt', ' I like cypress.', { flag: 'a+' })
    //flag added to append so there is no overwriting.

})