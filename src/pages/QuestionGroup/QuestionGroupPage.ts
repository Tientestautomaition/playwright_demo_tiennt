import { expect, Page } from "@playwright/test";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";
import { QuestionGroupLocator } from "./QuestionGroupLocator";


export default class QuestionGroupPage {

    page: Page
    webActions: WebActions
    assert: Assert


    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
        this.assert = new Assert(page);
    }
    async openQuestionGroup(): Promise<void> {
        await this.webActions.clickElement(QuestionGroupLocator.questionBankMenu);
        await this.webActions.clickElement(QuestionGroupLocator.questionGroupSubmenu);
    }
    async clickCreateQuestionGroup(): Promise<void> {
        await this.webActions.clickElement(QuestionGroupLocator.creatBtn);
    }
    async verifyOpenCreateQuestionGroupSuccessfully(): Promise<void> {
        await this.webActions.waitForElement(QuestionGroupLocator.popupCreateQG);
        const isDisplayed = await this.assert.isElementVisible(QuestionGroupLocator.popupCreateQG);
        expect(isDisplayed).toBeTruthy();
    }
    async sendKeysNameQuestionGroup(name: string): Promise<void> {
        await this.webActions.fillInputField(QuestionGroupLocator.nameQuestionGroupTxt, name);
    }
    async clickOnButtonSave(): Promise<void> {
        await this.webActions.clickElement(QuestionGroupLocator.saveBtn);
    }
    async verifyMsgCreateQuestionGroupSuccessful(): Promise<void> {
        await this.webActions.waitForElement(QuestionGroupLocator.msgCreateQuestionGroupSuccessful);
        const isDisplayed = await this.assert.isElementVisible(QuestionGroupLocator.msgCreateQuestionGroupSuccessful);
        expect(isDisplayed).toBeTruthy();
    }
}