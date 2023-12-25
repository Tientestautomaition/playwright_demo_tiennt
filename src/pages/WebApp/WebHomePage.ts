import { expect, Page } from "@playwright/test";
import { WebHomeLocator } from "./WebHomeLocator";
import { WebActions } from "../../core/actions/WebActions";



export default class WebHomePage {
    [x: string]: any;
    static sendKeysConfirmCode: any;
    static clickOnButtonConfirm: any;
    static sendKeysConfirmPassword(password: string) {
        throw new Error('Method not implemented.');
    }
    page: Page
    webActions: WebActions

    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
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
}