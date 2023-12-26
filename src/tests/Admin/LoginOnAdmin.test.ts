import { test } from '@playwright/test';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginAdminPage from '../../pages/loginOnAdmin/LoginAdminPage';


test.describe('@IGV: LogInOnAdmin - LogInOnAdminSuccessful', () => {
  let loginAdminPage: LoginAdminPage;

  test.beforeEach(async ({ page }) => {

    loginAdminPage = new LoginAdminPage(page);

  });

  test('TC08_LOGIN_ON_ADMIN_SUCCESSFUL', async () => {
    await loginAdminPage.gotoPage(GlobalConstants.linkUrlAdminLogin);
    await loginAdminPage.verifyTitle("IIG Admin");
    await loginAdminPage.sendKeysUserName(GlobalConstants.usernameAdmin);
    await loginAdminPage.sendKeysPassword(GlobalConstants.passwordAdmin);
    await loginAdminPage.clickOnLoginButton();
    await loginAdminPage.verifyLoginSuccessfully();
  });
});
