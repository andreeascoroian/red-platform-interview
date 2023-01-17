import {commonMethods} from "../common/CommonMethods";
import {dashboardSelectors} from "../utils/selectors/Selectors";
import * as url from "url";
import {urls} from "../utils/data/Data";

export class CarbonFootprintTestPage {
    selectAnswer(typeOfTransport) {
        cy.get('.ion-padding .question-answers').should('be.visible').within(() => {
            cy.contains(typeOfTransport).click();
            carbonFootprintTestPage.waitForCarbonFootprintApi();
        });
    };

    selectNextButton() {
        commonMethods.clickOnElement('[aria-label="caret forward outline"]')
    };

    selectFinishButton() {
        cy.contains('Finish test').click()
    };

    waitForCarbonFootprintApi() {
        cy.wait('@carbonFootprintTestAPI', {timeout:20000});
    };

    getAllCarbonFootprintValues() {
        cy.get(dashboardSelectors.YOUR_FOOTPRINT).should('be.visible').then((selector) => {
            cy.wrap(selector.text()).as('yourFootprintValue');
        });
        cy.get(dashboardSelectors.QUESTION_ILLUSTRATION).should('be.visible').then((selector2) => {
            cy.wrap(selector2.text()).as('questionIlustration')
        });
        cy.get(dashboardSelectors.TEST_PROGRESS).should('be.visible').invoke('text').then((text) => {
            let selector3 = +text.replace(' Tons', '').trim();
            cy.wrap(selector3).as('testProgress')
        });
    }

    assertTestHasStarted() {
        commonMethods.assertUrl(urls.CARBON_FOOTPRINT_TEST_URL);
        commonMethods.assertText(dashboardSelectors.FOOTPRINT_DETAILS_TITLE, ' Understand your carbon footprint ')
    }

    doTest() {
        this.assertTestHasStarted();
        this.selectAnswer(' Car');
        this.selectNextButton();
        this.selectAnswer(' Fossil fueled ');
        this.selectAnswer(' Short distances ');
        this.selectAnswer(' Few ');
        this.selectAnswer(' Average ');
        this.selectAnswer(' None ');
        this.selectAnswer(' Vegetarian ');
        this.selectAnswer(' Milk ');
        this.selectNextButton();
        this.selectAnswer(' Couple times a week ');
        this.selectAnswer(' Coffee ');
        this.selectNextButton();
        this.selectAnswer(' Daily ');
        this.selectAnswer(' Beans ');
        this.selectNextButton();
        this.selectAnswer(' Daily ');
        this.selectAnswer(' Computer ');
        this.selectNextButton();
        this.selectAnswer(' One ');
        this.selectAnswer(' Shirt ');
        this.selectNextButton();
        this.selectAnswer(' Many ');
        this.selectAnswer(' Social media ');
        this.selectNextButton();
        this.selectAnswer(' Many ');
        this.selectAnswer(' Average ');
    }
}

export const carbonFootprintTestPage = new CarbonFootprintTestPage();
