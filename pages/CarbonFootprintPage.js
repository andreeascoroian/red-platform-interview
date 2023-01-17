import {commonMethods} from "../common/CommonMethods";
import {dashboardSelectors} from "../utils/selectors/Selectors";

export class CarbonFootprintPage {
    searchForCountry(country) {
        commonMethods.typeText(dashboardSelectors.SEARCH_COUNTRY_FIELD, country);
    };

    selectFirstResult() {
        cy.intercept('POST', '**/countries/get-all').as('getAllApi');
        cy.wait('@getAllApi')
        commonMethods.clickOnElement(dashboardSelectors.FIRST_RESULT);
    };

    clickOnGetStarted() {
        commonMethods.clickOnElement(dashboardSelectors.GET_STARTED)
    };

    assertTestSuccessfullyFinished() {
        cy.get(dashboardSelectors.FINISHED).first().should('have.text', ' Finished ')
    };

    assertFootprintValues() {
        cy.get('body').find(dashboardSelectors.FOOTPRINT_VALUE).first().then((selector) => {
            let finalFootprintValue = selector.text();
            cy.get('@yourFootprintValue').then((value) => {
                expect(finalFootprintValue).to.include(value);
            }).then(() => {
                cy.get('@questionIlustration').then((value) => {
                    expect(finalFootprintValue).to.include(value);
                }).then(() => {
                    cy.get('@testProgress').then((value) => {
                        expect(finalFootprintValue).to.include(value);
                    });
                });
            });
        });
    };
}

export const carbonFootprintPage = new CarbonFootprintPage();
