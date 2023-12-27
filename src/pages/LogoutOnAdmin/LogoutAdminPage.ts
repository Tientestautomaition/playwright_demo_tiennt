import { expect, Page } from "@playwright/test";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";
import { LogoutAdminLocators } from "./LogoutAdminLocators";


export default class LogoutAdminPage {
    [x: string]: any;


    page: Page
    webActions: WebActions
    assert: Assert


    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
        this.assert = new Assert(page);
    }
    async clickOnLogoutButton(): Promise<void> {
        await this.webActions.clickElement(LogoutAdminLocators.logoutBtn);
    }
    async clickOnConfirmLogoutButton(): Promise<void> {
        await this.webActions.clickElement(LogoutAdminLocators.confirmLogoutBtn);
    }

    async verifyLogoutSuccessfully(): Promise<void> {
        await this.webActions.waitForElement(LogoutAdminLocators.logoutSuccessful);
        const isDisplayed = await this.assert.isElementVisible(LogoutAdminLocators.logoutSuccessful);
        expect(isDisplayed).toBeTruthy();
    }

}