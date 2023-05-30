import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const token = Cypress.config('token')

Given('que tenho uma pré condição na API', () => {
    cy.request({
        url: `/`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
        failOnStatusCode: false
    }).as("request-response")
})

When('realizo uma ação', () => {
    //código
})

Then('recebo o statusCode {int}', (statusCode) => {
    cy.get("@request-response").should((response) => {
        expect(response.status).to.eq(statusCode)
    })
})