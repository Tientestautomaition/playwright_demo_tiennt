import { Page, expect } from "@playwright/test";

export default class Assert {
    
    constructor(public page: Page) { };

    async isElementVisible(selector: string):  Promise<boolean>{
        return await this.page.locator(selector).isVisible();
    }
    async isElementEnable(selector: string):  Promise<boolean>{
        return await this.page.locator(selector).isEnabled();
    }

}