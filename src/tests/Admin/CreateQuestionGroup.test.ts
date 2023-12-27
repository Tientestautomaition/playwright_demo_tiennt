import { test } from '@playwright/test';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginAdminPage from '../../pages/LoginOnAdmin/LoginAdminPage';
import QuestionGroupPage from '../../pages/QuestionGroup/QuestionGroupPage';


test.describe('@IGV: ExamManagement - CreateNewExamSuccessful', () => {
    let loginAdminPage: LoginAdminPage;
    let questionGroupPage: QuestionGroupPage;
    let nameQG: string;

    test.beforeEach(async ({ page }) => {

        nameQG = "Tien Auto Check";
        loginAdminPage = new LoginAdminPage(page);
        questionGroupPage = new QuestionGroupPage(page);
        

    });

    test('TC_Create_A_Question_Group_Successful', async () => {
        await loginAdminPage.gotoPage(GlobalConstants.linkUrlAdminLogin);
        await loginAdminPage.verifyTitle("IIG Admin");
        await loginAdminPage.logInOnAdminSuccessfully(GlobalConstants.usernameAdmin, GlobalConstants.passwordAdmin);
        await questionGroupPage.openQuestionGroup();
        await questionGroupPage.clickCreateQuestionGroup();
        await questionGroupPage.verifyOpenCreateQuestionGroupSuccessfully();
        await questionGroupPage.sendKeysNameQuestionGroup(nameQG);
        await questionGroupPage.clickOnButtonSave();
        await questionGroupPage.verifyMsgCreateQuestionGroupSuccessful();
    })
})