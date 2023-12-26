import { test } from '@playwright/test';
import WebHomePage from '../../pages/WebApp/WebHomePage';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginPage from '../../pages/loginWebPage/LoginWebAppPage';


test.describe('@IGV: LogInAndLogOutWebAppObject - LogInAndLogOutWebAppSuccessful', () => {
  let webHomePage: WebHomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    
    webHomePage = new WebHomePage(page);
    loginPage = new LoginPage(page);

  });

  test('TC07_LOGIN_ON_WEBAPP_SUCCESSFUL', async () => {
    await webHomePage.gotoPage(GlobalConstants.webUrl);
    await webHomePage.verifyTitle('IIG Elearning');
    await loginPage.logInOnWebApp(GlobalConstants.username, GlobalConstants.password);
    await loginPage.clickOnUserAvaOnHomepage();
    await loginPage.clickOnLogoutButton();
    await loginPage.clickOnConfirmLogoutButton();
    await loginPage.verifyLoginButtonOnHomepageIsDisplay();
  });
});
