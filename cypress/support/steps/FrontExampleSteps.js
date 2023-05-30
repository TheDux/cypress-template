import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const url = Cypress.config('baseUrl')
const clientIdData = Cypress.config('clientIdData')

Given('que tenho uma pré condição', () => {
    cy.makeLogin(url, clientIdData)
    //código
})

When('realizo uma ação', () => {
    //código
})

Then('vejo o resultado', () => {
    //código
})