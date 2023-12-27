import { expect, Page } from "@playwright/test";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";
import { loginAdminLocators } from "./LoginAdminLocators";


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
    async gotoPage(baseURl: string): Promise<void> {
        await this.webActions.navigateToUrl(baseURl);
    }
    async verifyTitle(value: string): Promise<void> {
        const title = await this.page.title();
        expect(title).toBe(value);
    }
    async sendKeysUserName(username: string): Promise<void> {
        await this.webActions.fillInputField(loginAdminLocators.usernameTxt, username);
    }
    async sendKeysPassword(password: string): Promise<void> {
        await this.webActions.fillInputField(loginAdminLocators.passwordTxt, password);
    }
    async clickOnLoginButton(): Promise<void> {
        await this.webActions.clickElement(loginAdminLocators.LoginBtn);
    }

    async verifyLoginSuccessfully(): Promise<void> {
        await this.webActions.waitForElement(loginAdminLocators.msgLoginSuccessful);
        const isDisplayed = await this.assert.isElementVisible(loginAdminLocators.msgLoginSuccessful);
        expect(isDisplayed).toBeTruthy();
    }
    async logInOnAdminSuccessfully(username: string,password: string): Promise<void> {
        await this.sendKeysUserName(username);
        await this.sendKeysPassword(password);
        await this.clickOnLoginButton();
        await this.verifyLoginSuccessfully();
    }
}