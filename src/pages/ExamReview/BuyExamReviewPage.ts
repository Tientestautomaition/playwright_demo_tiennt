import { expect, Page } from "@playwright/test";
import { BuyExamReviewLocators } from "./BuyExamReviewLocators";
import { WebActions } from "../../core/actions/WebActions";
import Assert from "../../core/asserts/Asserts";


export default class BuyExamReviewPage {
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
        await this.webActions.waitForElement(BuyExamReviewLocators.selfStudyCourseTitle);
        const isDisplayed = await this.assert.isElementVisible(BuyExamReviewLocators.selfStudyCourseTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnExamReviewDetailButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.selfStudyCourseDetailBtn);
    }
    async verifyOnExamReviewDetailPage(): Promise<void> {
        await this.webActions.waitForElement(BuyExamReviewLocators.selfStudyCourseDetailTitle);
        const isDisplayed = await this.assert.isElementVisible(BuyExamReviewLocators.selfStudyCourseDetailTitle);
        expect(isDisplayed).toBeTruthy();
    } 
    async clickOnAddToCardButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.addToCartBtn);
    }
    async clickOnCartIcon(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.cartIcon);
    }
    async verifyOnCartDetailPage(): Promise<void> {
        await this.webActions.waitForElement(BuyExamReviewLocators.cartDetail);
        const isDisplayed = await this.assert.isElementVisible(BuyExamReviewLocators.cartDetail);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnBuyButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.buyBtn);
    }
    async clickOnOrderButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.orderBtn);
    }
    async verifyPaymentMethodPopupIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(BuyExamReviewLocators.paymentMethodTitle);
        const isDisplayed = await this.assert.isElementVisible(BuyExamReviewLocators.paymentMethodTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async clickOnCheckBoxPaymentTerms(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.checkboxPaymentTerms);
    }
    async clickOnPaymentButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.paymentBtn);
    }
    async clickOnPaymentByBankAccount(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.paymentMethodBankAccountTitle);
    }
    async clickOnNCBBankButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.ncbBankBtn);
    }
    async verifyPaymentNCBPaymentPopupIsDisplay(): Promise<void> {
        await this.webActions.waitForElement(BuyExamReviewLocators.paymentViaNCBBankTitle);
        const isDisplayed = await this.assert.isElementVisible(BuyExamReviewLocators.paymentViaNCBBankTitle);
        expect(isDisplayed).toBeTruthy();
    }
    async sendKeysToCardNumberTextBox(cardNo: string): Promise<void> {
        await this.webActions.fillInputField(BuyExamReviewLocators.cardNumberTxt, cardNo);
    }
    async sendKeysToCardHolderTextBox(cardHolder: string): Promise<void> {
        await this.webActions.fillInputField(BuyExamReviewLocators.cardHolderTxt, cardHolder);
    }
    async sendKeysToCardDateTextBox(cardDate: string): Promise<void> {
        await this.webActions.fillInputField(BuyExamReviewLocators.cardDateTxt, cardDate);
    }
    async clickOnContinueButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.continueButton);
    }
    async sendKeysToOTPTextBox(otp: string): Promise<void> {
        await this.webActions.fillInputField(BuyExamReviewLocators.otpTxt, otp);
    }
    async clickOnPayButton(): Promise<void> {
        await this.webActions.clickElement(BuyExamReviewLocators.payBtn);
    }
    async verifyPaymentSuccessful(): Promise<void> {
        await this.webActions.waitForElement(BuyExamReviewLocators.paymentSuccessTitle);
        const isDisplayed = await this.assert.isElementVisible(BuyExamReviewLocators.paymentSuccessTitle);
        expect(isDisplayed).toBeTruthy();
    }
}