import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com')
})

describe('All LoginTests', function () {
    it('LoginwithValidCredentials', function () {

        loginPage.enterValidUserName('Admin')
        loginPage.enterValidPassword('admin123')
        loginPage.clickLoginButton()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')

    })
    it('LoginwithInvalidUsername', function () {

        loginPage.enterValidUserName('Admin1')
        loginPage.enterValidPassword('admin123')
        loginPage.clickLoginButton()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')

    })
})

it('LoginwithInvalidPassword', function () {

    loginPage.enterValidUserName('Admin')
    loginPage.enterValidPassword('admin1234')
    loginPage.clickLoginButton()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')

})

