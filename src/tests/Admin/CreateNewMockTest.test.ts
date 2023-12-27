import { test } from '@playwright/test';
import { GlobalConstants } from '../../core/utils/GlobalConstants';
import LoginAdminPage from '../../pages/LoginOnAdmin/LoginAdminPage';
import CreateNewMockTestPage from '../../pages/MockTest/CreateNewMockTestPage';


test.describe('@IGV: ExamManagement - CreateNewExamSuccessful', () => {
    let loginAdminPage: LoginAdminPage;
    let mockTestPage: CreateNewMockTestPage;
    let mockTestName: string;
    let mockTestType: string;
    let contestCandidate: string;

    test.beforeEach(async ({ page }) => {
        
        mockTestName = "Tien Auto Check";
        mockTestType = "TOEFL IBT";
        contestCandidate = "Khoá đào tạo";
        loginAdminPage = new LoginAdminPage(page);
        mockTestPage = new CreateNewMockTestPage(page);

    });

    test('TC9_Create_A_New_Mock_Test_Successful', async () => {
        await loginAdminPage.gotoPage(GlobalConstants.linkUrlAdminLogin);
        await loginAdminPage.verifyTitle("IIG Admin");
        await loginAdminPage.logInOnAdminSuccessfully(GlobalConstants.usernameAdmin,GlobalConstants.passwordAdmin);
        await mockTestPage.clickOnMockTestManagementMenu();
        await mockTestPage.clickOnMockTestList();
        await mockTestPage.verifyOnMockTestListPage();
        await mockTestPage.clickOnCreateMockTestButton();
        await mockTestPage.verifyOnCreateMockTestPage();
        await mockTestPage.sendKeysMockTestName(mockTestName);
        await mockTestPage.selectMockTestType(mockTestType);
        await mockTestPage.selectContestCandidate(contestCandidate);
        await mockTestPage.clickOnCorrectScoreRadioButton();
        await mockTestPage.clickOnSaveButton();
        await mockTestPage.verifyCreateMockTestSuccess();

    });
});
