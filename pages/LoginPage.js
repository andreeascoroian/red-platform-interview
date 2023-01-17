import {commonMethods} from "../common/CommonMethods";
import {loginSelectors} from "../utils/selectors/Selectors";
import {urls} from "../utils/data/Data";

export class LoginPage {
    clickOnLoginButton() {
        commonMethods.clickOnElement('#kc-login')
    }

    login(username, password) {
        commonMethods.insertUsername(username);
        commonMethods.insertPassword(password);
        this.clickOnLoginButton();
    };

    assertUserIsOnLoginPage() {
        commonMethods.assertElementExists(loginSelectors.REGISTER_LINK);
        commonMethods.assertUrl(urls.LOGIN_URL);
    };
}

export const loginPage = new LoginPage();
