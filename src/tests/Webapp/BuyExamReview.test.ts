import { test } from '@playwright/test';
import WebHomePage from '../../pages/WebApp/WebHomePage';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginPage from '../../pages/loginWebPage/LoginWebAppPage';
import BuyExamReviewPage from '../../pages/ExamReview/BuyExamReviewPage';


test.describe('@IGV: ExamReviewTool - BuyExamReviewToolSuccessful', () => {
    let webHomePage: WebHomePage;
    let loginPage: LoginPage;
    let buyExamReviewPage: BuyExamReviewPage;

    test.beforeEach(async ({ page }) => {

        webHomePage = new WebHomePage(page);
        loginPage = new LoginPage(page);
        buyExamReviewPage = new BuyExamReviewPage(page);

    });

    test('TC_Buy_Exam_Review', async () => {
        await webHomePage.gotoPage(GlobalConstants.webUrl);
        await webHomePage.verifyTitle('IIG Elearning');
        await loginPage.logInOnWebApp(GlobalConstants.username, GlobalConstants.password);
        await webHomePage.clickOnExamReviewToolMenu();
        await webHomePage.clickOnExamReviewToolSubMenu();
        await buyExamReviewPage.verifyOnExamReviewPage();
        await buyExamReviewPage.clickOnExamReviewDetailButton();
        await buyExamReviewPage.verifyOnExamReviewDetailPage();
        await buyExamReviewPage.clickOnAddToCardButton();
        await buyExamReviewPage.clickOnCartIcon();
        await buyExamReviewPage.verifyOnCartDetailPage();
        await buyExamReviewPage.clickOnBuyButton();
        await buyExamReviewPage.clickOnOrderButton();
        await buyExamReviewPage.verifyPaymentMethodPopupIsDisplay();
        await buyExamReviewPage.clickOnCheckBoxPaymentTerms();
        await buyExamReviewPage.clickOnPaymentButton();
        await buyExamReviewPage.clickOnPaymentByBankAccount();
        await buyExamReviewPage.clickOnNCBBankButton();
        await buyExamReviewPage.verifyPaymentNCBPaymentPopupIsDisplay();
        await buyExamReviewPage.sendKeysToCardNumberTextBox(GlobalConstants.ncbBankAccountCardNumber);
        await buyExamReviewPage.sendKeysToCardHolderTextBox(GlobalConstants.ncbBankAccountCardHolder);
        await buyExamReviewPage.sendKeysToCardDateTextBox(GlobalConstants.ncbBankAccountCardDate);
        await buyExamReviewPage.clickOnContinueButton();
        await buyExamReviewPage.sendKeysToOTPTextBox(GlobalConstants.ncbBankAccountOtp);
        await buyExamReviewPage.clickOnPayButton();
        await buyExamReviewPage.verifyPaymentSuccessful();
    })
})