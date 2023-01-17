import {commonMethods} from "../common/CommonMethods";
import {homepageSelectors} from "../utils/selectors/Selectors";

export class Homepage {
    clickOnLoginButton() {
        commonMethods.clickOnElement(homepageSelectors.LOGIN_BUTTON);
    };

    assertUserIsOnHomepage() {
        commonMethods.assertUrl(Cypress.env('baseUrl'))
        commonMethods.assertText('[aria-label="RED Platform login"]', 'Login');
    }
}

export const homepage = new Homepage();
