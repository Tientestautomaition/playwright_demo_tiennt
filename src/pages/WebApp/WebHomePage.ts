import { expect, Page } from "@playwright/test";
import { WebHomeLocator } from "./WebHomeLocator";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";


export default class WebHomePage {
    [x: string]: any;


    page: Page
    webActions: WebActions
    assert: Assert


    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
        this.assert = new Assert(page);
    }

    async gotoPage(baseURl: string): Promise<void> {
        await this.webActions.navigateToUrl(baseURl);
    }


    async verifyTitle(value: string): Promise<void> {
        const title = await this.page.title();
        expect(title).toBe(value);
    }

    async clickOnButtonRegister(): Promise<void> {
        await this.webActions.clickElement(WebHomeLocator.registerButton);
    }
    async sendKeysFullName(name: string): Promise<void> {
        await this.webActions.fillInputField(WebHomeLocator.nameTxt, name);
    }

    async sendKeysEmail(email: string): Promise<void> {
        await this.webActions.fillInputField(WebHomeLocator.emailTxt, email);
    }

    async sendKeysPhoneNumber(phone: string): Promise<void> {
        await this.webActions.fillInputField(WebHomeLocator.phoneTxt, phone);
    }

    async sendKeysPassword(password: string): Promise<void> {
        await this.webActions.fillInputField(WebHomeLocator.passwordTxt, password);
    }

    async sendKeysConfirmPassword(confirmPass: string): Promise<void> {
        await this.webActions.fillInputField(WebHomeLocator.confirmPasswordTxt, confirmPass);
    }

    async clickOnButtonSubmit(): Promise<void> {
        await this.webActions.clickElement(WebHomeLocator.submit);
    }

    async sendKeysConfirmCode(confirmCode: string): Promise<void> {
        for (let i = 1; i < 7; i++) {
            const stringValue = i.toString();
            console.log(stringValue);
            this.webActions.fillInputField(WebHomeLocator.confirmCodeTxt.replace("%", stringValue), confirmCode)
            console.log(WebHomeLocator.confirmCodeTxt.replace("%S", stringValue));

        }
    }
    async clickOnButtonConfirm(): Promise<void> {
        await expect(this.assert.isElementEnable(WebHomeLocator.confirmButton)).toBeTruthy();
        await this.webActions.clickElement(WebHomeLocator.confirmButton);
    }

    async verifyMsgErrorConfirmCodeIsDisplay(): Promise<void> {
        const isDisplayed = await this.assert.isElementVisible(WebHomeLocator.msgErrorConfirmCode);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnExamReviewToolMenu(): Promise<void> {
        await this.webActions.clickElement(WebHomeLocator.examReviewToolMenu);
    }
    async clickOnExamReviewToolSubMenu(): Promise<void> {
        await this.webActions.clickElement(WebHomeLocator.examReviewToolSubMenu);
    }
    async clickOnSelfStudyCourseMenu(): Promise<void> {
        await this.webActions.clickElement(WebHomeLocator.selfStudyCourseMenu);
    }
    async clickOnSelfStudyCourseSubMenu(): Promise<void> {
        await this.webActions.clickElement(WebHomeLocator.selfStudyCourseSubMenu);
    }
    async clickOnSelfStudyCourseButton(): Promise<void> {
        await this.webActions.clickElement(WebHomeLocator.myCourseBtn);
    }
}
