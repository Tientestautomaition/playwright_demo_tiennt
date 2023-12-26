import { test } from '@playwright/test';
import WebHomePage from '../../pages/WebApp/WebHomePage';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginPage from '../../pages/loginWebPage/LoginWebAppPage';
import SeflStudyCoursePage from '../../pages/SelfStudyCourse/SeflStudyCoursePage';


test.describe('@IGV: ExamReviewTool - BuyExamReviewToolSuccessful', () => {
    let webHomePage: WebHomePage;
    let loginPage: LoginPage;
    let seflStudyCoursePage: SeflStudyCoursePage;

    test.beforeEach(async ({ page }) => {

        webHomePage = new WebHomePage(page);
        loginPage = new LoginPage(page);
        seflStudyCoursePage = new SeflStudyCoursePage(page);

    });

    test('TC_Buy_Seft_Study_Course', async () => {
        await webHomePage.gotoPage(GlobalConstants.webUrl);
        await webHomePage.verifyTitle('IIG Elearning');
        await loginPage.logInOnWebApp(GlobalConstants.username, GlobalConstants.password);
        await webHomePage.clickOnSelfStudyCourseMenu();
        await webHomePage.clickOnSelfStudyCourseSubMenu()
        await seflStudyCoursePage.verifyOnExamReviewPage();
        await seflStudyCoursePage.clickOnExamReviewDetailButton();
        await seflStudyCoursePage.verifyOnExamReviewDetailPage();
        await seflStudyCoursePage.clickOnAddToCardButton();
        await seflStudyCoursePage.clickOnCartIcon();
        await seflStudyCoursePage.verifyOnCartDetailPage();
        await seflStudyCoursePage.clickOnBuyButton();
        await seflStudyCoursePage.clickOnOrderButton();
        await seflStudyCoursePage.verifyPaymentMethodPopupIsDisplay();
        await seflStudyCoursePage.clickOnCheckBoxPaymentTerms();
        await seflStudyCoursePage.clickOnPaymentButton();
        await seflStudyCoursePage.clickOnPaymentByBankAccount();
        await seflStudyCoursePage.clickOnNCBBankButton();
        await seflStudyCoursePage.verifyPaymentNCBPaymentPopupIsDisplay();
        await seflStudyCoursePage.sendKeysToCardNumberTextBox(GlobalConstants.ncbBankAccountCardNumber);
        await seflStudyCoursePage.sendKeysToCardHolderTextBox(GlobalConstants.ncbBankAccountCardHolder);
        await seflStudyCoursePage.sendKeysToCardDateTextBox(GlobalConstants.ncbBankAccountCardDate);
        await seflStudyCoursePage.clickOnContinueButton();
        await seflStudyCoursePage.sendKeysToOTPTextBox(GlobalConstants.ncbBankAccountOtp);
        await seflStudyCoursePage.clickOnPayButton();
        await seflStudyCoursePage.verifyPaymentSuccessful();
    })
})