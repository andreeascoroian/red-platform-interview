import {commonMethods} from "../../common/CommonMethods";
import {homepage} from "../../pages/Homepage";
import {loginPage} from "../../pages/LoginPage";
import {hamburgerDashboard} from "../../pages/HamburgerDashboard";
import {dashboardPage} from "../../pages/DashboardPage";
import {carbonFootprintPage} from "../../pages/CarbonFootprintPage";
import {carbonFootprintTestPage} from "../../pages/CarbonFootprintTestPage";

beforeEach(() => {
    commonMethods.visitHomepage();
})

describe('Interview Test', () => {
    it('Should verify a flow for carbon footprint feature and assure it works as expected', () => {
        homepage.clickOnLoginButton();
        loginPage.assertUserIsOnLoginPage();
        loginPage.login(Cypress.env('username'), Cypress.env('password'));
        dashboardPage.assertUserIsLoggedIn();
        hamburgerDashboard.clickOnCarbonFootprint();
        dashboardPage.assertUserIsOnCarbonFootprintPage();
        dashboardPage.clickOnSelectCountry();
        carbonFootprintPage.searchForCountry('United Kingdom');
        carbonFootprintPage.selectFirstResult();
        carbonFootprintPage.clickOnGetStarted();
        carbonFootprintTestPage.doTest();
        carbonFootprintTestPage.getAllCarbonFootprintValues();
        carbonFootprintTestPage.selectFinishButton();
        carbonFootprintPage.assertTestSuccessfullyFinished();
        carbonFootprintPage.assertFootprintValues();
    });
})
