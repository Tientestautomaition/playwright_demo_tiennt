import { test as baseTest } from "@playwright/test";
import WebHomePage from "../../pages/WebApp/WebHomePage";


type pages = {

    webHomePage: WebHomePage;
}

const testPages = baseTest.extend<pages>({
    webHomePage: async ({ page }, use) => {
        await use(new WebHomePage(page));
    }

})

export const test = testPages;
export const expect = testPages.expect;