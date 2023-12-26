//import { expect, test } from "../tests/base/Fixture";
import { test } from '@playwright/test';
import WebHomePage from '../pages/WebApp/WebHomePage';
import { GlobalConstants } from '../core/utils/GlobalConstants';
import { faker } from "@faker-js/faker"


test.describe('@IGV: RegisterWebAppObject - RegisterWebAppUnsuccessful', () => {
  let name: string;
  let email: string;
  let phone: string;
  let webHomePage: WebHomePage;

  test.beforeEach(async ({ page }) => {
    email = faker.internet.email();
    name = faker.person.firstName();
    phone = "03" + faker.number.bigInt(99999999);
    webHomePage = new WebHomePage(page);

  });

  test('TC06_REGISTER_UNSUCCESSFUL_WITH_WRONG_CONFIRM_CODE', async () => {
    await webHomePage.gotoPage(GlobalConstants.webUrl);
    await webHomePage.verifyTitle('IIG Elearning');
    await webHomePage.clickOnButtonRegister();
    await webHomePage.sendKeysFullName(name);
    await webHomePage.sendKeysEmail(email);
    await webHomePage.sendKeysPhoneNumber(phone);
    await webHomePage.sendKeysPassword(GlobalConstants.password);
    await webHomePage.sendKeysConfirmPassword(GlobalConstants.password);
    await webHomePage.clickOnButtonSubmit();
    await webHomePage.sendKeysConfirmCode("7");
    await webHomePage.clickOnButtonConfirm();
    await webHomePage.verifyMsgErrorConfirmCodeIsDisplay();
  });
});
