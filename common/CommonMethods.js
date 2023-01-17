import {homepage} from "../pages/Homepage";

export class CommonMethods {
    visitUrl(url) {
        cy.visit(url);
    };

    visitHomepage() {
        commonMethods.visitUrl(Cypress.env('baseUrl'));
        commonMethods.setUncaughtOriginErrorFalse();
        commonMethods.interceptCarbonFootprintApi();
        homepage.assertUserIsOnHomepage();
    };

    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    };

    typeText(webElement, text) {
        cy.get(webElement).should('be.visible').type(text)
    }

    insertUsername(username) {
        this.typeText('#username', username)
    };

    insertPassword(password) {
        this.typeText('#password', password)
    };

    setUncaughtOriginErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    };

    assertUrl(text) {
        cy.url().should('include', text)
    }

    assertText(webElement, text) {
        cy.get(webElement).should('be.visible').should('include.text', text)
    };

    assertElementExists(webElement) {
        cy.get(webElement).should('exist')
    };

    assertPageContainsText(text) {
        cy.contains(text)
    };

    interceptCarbonFootprintApi() {
        cy.intercept('PUT', '**/api/carbon-footprint-test').as('carbonFootprintTestAPI');
    };
}

export const commonMethods = new CommonMethods();
