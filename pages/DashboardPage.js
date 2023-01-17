import {commonMethods} from "../common/CommonMethods";
import {urls} from "../utils/data/Data";
import {dashboardSelectors} from "../utils/selectors/Selectors";

export class DashboardPage {
    clickOnSelectCountry() {
        commonMethods.clickOnElement(dashboardSelectors.SELECT_COUNTRY)
    };

    assertUserIsLoggedIn() {
        commonMethods.assertPageContainsText('Logout');
    };

    assertUserIsOnCarbonFootprintPage() {
        commonMethods.assertUrl(urls.CARBON_FOOTPRINT_URL);
    }
}

export const dashboardPage = new DashboardPage();
