import { test } from '@playwright/test';
import WebHomePage from '../../pages/WebApp/WebHomePage';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginPage from '../../pages/LoginWebPage/LoginWebAppPage';


test.describe('@IGV: LogInAndLogOutWebAppObject - LogInOnWebAppSuccessful', () => {
  let webHomePage: WebHomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {

    webHomePage = new WebHomePage(page);
    loginPage = new LoginPage(page);

  });

  test('TC_LOGIN_ON_WEBAPP_SUCCESSFUL', async () => {
    await webHomePage.gotoPage(GlobalConstants.webUrl);
    await webHomePage.verifyTitle('IIG Elearning');
    await loginPage.clickOnButtonLogin();
    await loginPage.verifyPopupLoginIsDisplay();
    await loginPage.sendKeysUsername(GlobalConstants.username);
    await loginPage.sendKeysLoginPassword(GlobalConstants.password);
    await loginPage.clickOnButtonLoginSubmit();
    await loginPage.verifyUserLoggedIn();
  });
});
