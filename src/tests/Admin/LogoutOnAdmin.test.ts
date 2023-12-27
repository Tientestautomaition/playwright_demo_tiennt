import { test } from '@playwright/test';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginAdminPage from '../../pages/LoginOnAdmin/LoginAdminPage';
import LogoutAdminPage from '../../pages/LogoutOnAdmin/LogoutAdminPage';


test.describe('@IGV: LogOutOnAdmin - LogOutOnAdminSuccessful', () => {
    let loginAdminPage: LoginAdminPage;
    let logouAdminPage: LogoutAdminPage;

    test.beforeEach(async ({ page }) => {

        loginAdminPage = new LoginAdminPage(page);
        logouAdminPage = new LogoutAdminPage(page);

    });

    test('TC_LOGOUT_ON_ADMIN_SUCCESSFUL', async () => {
        await loginAdminPage.gotoPage(GlobalConstants.linkUrlAdminLogin);
        await loginAdminPage.verifyTitle("IIG Admin");
        await loginAdminPage.logInOnAdminSuccessfully(GlobalConstants.usernameAdmin,GlobalConstants.passwordAdmin);
        await logouAdminPage.clickOnLogoutButton();
        await logouAdminPage.clickOnConfirmLogoutButton();
        await logouAdminPage.verifyLogoutSuccessfully();
    })
})