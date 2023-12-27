import { test } from '@playwright/test';
import WebHomePage from '../../pages/WebApp/WebHomePage';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginPage from '../../pages/LoginWebPage/LoginWebAppPage';
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

    test('TC_Do_Seft_Study_Course', async () => {
        await webHomePage.gotoPage(GlobalConstants.webUrl);
        await webHomePage.verifyTitle('IIG Elearning');
        await loginPage.logInOnWebApp(GlobalConstants.username, GlobalConstants.password);
        await webHomePage.clickOnSelfStudyCourseButton();
        await seflStudyCoursePage.clickOnStartSelfStudyCourseButton();
        await seflStudyCoursePage.verifyOnCourseDetailSuccessful();
        await seflStudyCoursePage.hoverOnUnitLabel();
        await seflStudyCoursePage.verifyRedoButtonIsDisplay();
        await seflStudyCoursePage.verifyViewResultButtonIsDisplay();
        await seflStudyCoursePage.clickOnViewResultButton();
        await seflStudyCoursePage.verifyOnTestResultScreen();
        await seflStudyCoursePage.verifySeeResultButtonIsDisplay();
        await seflStudyCoursePage.clickOnVSeeResultButton();
        await seflStudyCoursePage.verifySeeResultCorrectAnswerIsDisplay();
    })
})