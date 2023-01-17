import {commonMethods} from "../common/CommonMethods";
import {carbonFootprintSelectors} from "../utils/selectors/Selectors";

export class HamburgerDashboard {
    clickOnCarbonFootprint() {
        commonMethods.clickOnElement(carbonFootprintSelectors.CARBON_FOOTPRINT_LINK);
    }
}

export const hamburgerDashboard = new HamburgerDashboard();
