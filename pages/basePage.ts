import { Page, Locator, expect, selectors } from '@playwright/test';


export abstract class BasePage {
    //BasePage is an abstract class, so it cannot be instantiated directly.
    //It is designed to be extended by other page classes.
    constructor(protected readonly page: Page) { }

   // ==========NAVIGATION====================
    //Navigate to a specific URL path.
    protected async goToUrl(path: string) {
        await this.page.goto(path);
    }

    //==============Low level helpers(protected)====================
    // These methods are intended for use by extending classes only.
    protected async basePageClick(selector: string | Locator){
        await this.toLocator(selector).click()
    }

    protected async basePageFill(selector: string | Locator, value: string){
        await this.toLocator(selector).fill(value)
    }

    protected async basePageExpectVisible(selector: string | Locator){
        await expect(this.toLocator(selector)).toBeVisible()
    }

    public locator(selector: string | Locator): Locator {
        return this.toLocator(selector)
    }

    //=================Utility=======================================
    //This method is used to convert a string selector into a Locator.
    protected toLocator(selector: string | Locator): Locator {
        return typeof selector === 'string'
            ? this.page.locator(selector)  // if string selector received → create a Locator
            : selector;                    // else already a Locator → return unchanged
    }
}