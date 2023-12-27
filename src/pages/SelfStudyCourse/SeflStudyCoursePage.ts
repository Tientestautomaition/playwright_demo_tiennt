import { expect, Page } from "@playwright/test";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";
import { SeflStudyCourseLocators } from "./SelfStudyCourseLocators";


export default class SeflStudyCoursePage {
    [x: string]: any;


    page: Page
    webActions: WebActions
    assert: Assert


    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
        this.assert = new Assert(page);
    }
    async verifyOnExamReviewPage(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.selfStudyCourseTitle);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.selfStudyCourseTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnExamReviewDetailButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.selfStudyCourseDetailBtn);
    }
    async verifyOnExamReviewDetailPage(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.selfStudyCourseDetailTitle);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.selfStudyCourseDetailTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnAddToCardButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.addToCartBtn);
    }
    async clickOnCartIcon(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.cartIcon);
    }
    async verifyOnCartDetailPage(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.cartDetail);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.cartDetail);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnBuyButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.buyBtn);
    }
    async clickOnOrderButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.orderBtn);
    }
    async verifyPaymentMethodPopupIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.paymentMethodTitle);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.paymentMethodTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnCheckBoxPaymentTerms(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.checkboxPaymentTerms);
    }
    async clickOnPaymentButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.paymentBtn);
    }
    async clickOnPaymentByBankAccount(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.paymentMethodBankAccountTitle);
    }
    async clickOnNCBBankButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.ncbBankBtn);
        await this.page.reload();
    }
    async verifyPaymentNCBPaymentPopupIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.paymentViaNCBBankTitle);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.paymentViaNCBBankTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async sendKeysToCardNumberTextBox(cardNo: string): Promise<void> {
        await this.webActions.fillInputField(SeflStudyCourseLocators.cardNumberTxt, cardNo);
    }
    async sendKeysToCardHolderTextBox(cardHolder: string): Promise<void> {
        await this.webActions.fillInputField(SeflStudyCourseLocators.cardHolderTxt, cardHolder);
    }
    async sendKeysToCardDateTextBox(cardDate: string): Promise<void> {
        await this.webActions.fillInputField(SeflStudyCourseLocators.cardDateTxt, cardDate);
    }
    async clickOnContinueButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.continueButton);
    }
    async sendKeysToOTPTextBox(otp: string): Promise<void> {
        await this.webActions.fillInputField(SeflStudyCourseLocators.otpTxt, otp);
    }
    async clickOnPayButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.payBtn);
    }
    async verifyPaymentSuccessful(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.paymentSuccessTitle);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.paymentSuccessTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnStartSelfStudyCourseButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.startLessonBtn);
    }
    async verifyOnCourseDetailSuccessful(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.nameCourseTitle);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.nameCourseTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async hoverOnUnitLabel(): Promise<void> {
        await this.page.locator(SeflStudyCourseLocators.unit2).hover({force: true, timeout : 2000});
    }
    async verifyRedoButtonIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.redoBtn);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.redoBtn);
        expect(isDisplayed).toBeTruthy();
    }
    async verifyViewResultButtonIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.viewResultBtn);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.viewResultBtn);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnViewResultButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.viewResultBtn);
    }
    async verifyOnTestResultScreen(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.testResultTitle);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.testResultTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async verifySeeResultButtonIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.seeResultBtn);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.seeResultBtn);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnVSeeResultButton(): Promise<void> {
        await this.webActions.clickElement(SeflStudyCourseLocators.seeResultBtn);
    }
    async verifySeeResultCorrectAnswerIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(SeflStudyCourseLocators.correctAnswerLabel);
        const isDisplayed = await this.assert.isElementVisible(SeflStudyCourseLocators.correctAnswerLabel);
        expect(isDisplayed).toBeTruthy();
    }

}