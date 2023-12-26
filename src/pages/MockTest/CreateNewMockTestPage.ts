import { expect, Page } from "@playwright/test";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";
import { CreateNewMockTestLocators } from "./CreateNewMockTestLocators";


export default class LoginAdminPage {
    [x: string]: any;


    page: Page
    webActions: WebActions
    assert: Assert


    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
        this.assert = new Assert(page);
    }
    async clickOnMockTestManagementMenu(): Promise<void> {
        await this.webActions.clickElement(CreateNewMockTestLocators.mockTestManagementMenu);
    }
    async clickOnMockTestList(): Promise<void> {
        await this.webActions.clickElement(CreateNewMockTestLocators.mockTestList);
    }
    async verifyOnMockTestListPage(): Promise<void> {
        await this.webActions.waitForElement(CreateNewMockTestLocators.mockTestListTitle);
        const isDisplayed = await this.assert.isElementVisible(CreateNewMockTestLocators.mockTestListTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnCreateMockTestButton(): Promise<void> {
        await this.webActions.clickElement(CreateNewMockTestLocators.createMockTestBtn);
    }
    async verifyOnCreateMockTestPage(): Promise<void> {
        await this.webActions.waitForElement(CreateNewMockTestLocators.createMockTestTitle);
        const isDisplayed = await this.assert.isElementVisible(CreateNewMockTestLocators.createMockTestTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async sendKeysMockTestName(name: string): Promise<void> {
        await this.webActions.fillInputField(CreateNewMockTestLocators.nameMockTestTxt, name);
    }
    async selectMockTestType(expectedText: string): Promise<void> {
        await this.webActions.selectOptionInCustomerDropdown(CreateNewMockTestLocators.mockTestTypeDropdown,CreateNewMockTestLocators.childXpathMockTestTypeDropdown,expectedText);
    }
    async selectContestCandidate(expectedText: string): Promise<void> {
        await this.webActions.selectOptionInCustomerDropdown(CreateNewMockTestLocators.contestCandidatesDropdown,CreateNewMockTestLocators.childXpathContestCandidatesDropdown,expectedText);
    }
    async clickOnCorrectScoreRadioButton(): Promise<void> {
        await this.webActions.clickElement(CreateNewMockTestLocators.correctScoreRadioBtn);
    }
    async clickOnSaveButton(): Promise<void> {
        await this.webActions.clickElement(CreateNewMockTestLocators.saveBtn);
    }
    async verifyCreateMockTestSuccess(): Promise<void> {
        await this.webActions.waitForElement(CreateNewMockTestLocators.msgCreateMockTestSuccess);
        const isDisplayed = await this.assert.isElementVisible(CreateNewMockTestLocators.msgCreateMockTestSuccess);
        expect(isDisplayed).toBeTruthy();
    }
}