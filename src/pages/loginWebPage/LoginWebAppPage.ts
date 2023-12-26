import { expect, Page } from "@playwright/test";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";
import { loginLocators } from "./LoginWebAppLocators";


export default class LoginPage {
    [x: string]: any;


    page: Page
    webActions: WebActions
    assert: Assert


    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
        this.assert = new Assert(page);
    }

    async clickOnButtonLogin(): Promise<void> {
        await this.webActions.clickElement(loginLocators.loginButton);
    }
    async verifyPopupLoginIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(loginLocators.loginPopup);
        const isDisplayed = await this.assert.isElementVisible(loginLocators.loginPopup);
        expect(isDisplayed).toBeTruthy();
    }
    async sendKeysUsername(username: string): Promise<void> {
        await this.webActions.fillInputField(loginLocators.usernameTxt, username);
    }
    async sendKeysLoginPassword(password: string): Promise<void> {
        await this.webActions.fillInputField(loginLocators.loginPasswordTxt, password);
    }
    async clickOnButtonLoginSubmit(): Promise<void> {
        await this.webActions.clickElement(loginLocators.loginSubmitBtn);
    }
    async verifyUserLoggedIn(): Promise<void> {
        await this.webActions.waitForElement(loginLocators.khoaHocCuaToiBtn);
        const isDisplayed = await this.assert.isElementVisible(loginLocators.khoaHocCuaToiBtn);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnUserAvaOnHomepage(): Promise<void> {
        await this.webActions.clickElement(loginLocators.avaUser);
    }
    async clickOnLogoutButton(): Promise<void> {
        await this.webActions.clickElement(loginLocators.logoutBtn);
    }
    async clickOnConfirmLogoutButton(): Promise<void> {
        await this.webActions.clickElement(loginLocators.confirmLogoutBtn);
    }
    async verifyLoginButtonOnHomepageIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(loginLocators.loginButton);
        const isDisplayed = await this.assert.isElementVisible(loginLocators.loginButton);
        expect(isDisplayed).toBeTruthy();
    }
    async logInOnWebApp(username: string, password: string): Promise<void> {
        await this.clickOnButtonLogin();
        await this.verifyPopupLoginIsDisplay();
        await this.sendKeysUsername(username);
        await this.sendKeysLoginPassword(password);
        await this.clickOnButtonLoginSubmit();
        await this.verifyUserLoggedIn();
    }

}