import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

// this page is using reusable locators and requires a constructor
export class CheckboxesPage extends BasePage { 
    //Declare reusable locators:
    protected readonly firstBox: Locator;
    protected readonly secondBox: Locator;
    protected readonly form: Locator;


    constructor(page: Page){
        // Call the constructor of the BasePage class to make this.page available
        super(page);
        //Initialize reusable locators.
        this.firstBox = page.locator('form#checkboxes input').nth(0)
        this.secondBox = page.locator('form#checkboxes input').nth(1)
        // this.firstBox = this.page.getByRole('checkbox', {name: 'checkbox 1'});
        // this.secondBox = this.page.getByRole('checkbox', {name: 'checkbox 2'});
        this.form = this.page.locator('#checkboxes');
    }

    //Navigate to page and verify form is visible
    async openCheckboxesPage() {
        await this.goToUrl('/checkboxes');
        await this.basePageExpectVisible(this.form);
    }
    
    async checkFirstCheckbox() {
        //playwright method "check" is used to check the checkbox
        await this.firstBox.check()
    }

    async uncheckFirstCheckbox() {
        //playwright method "uncheck" is used to uncheck the checkbox
        await this.firstBox.uncheck()
    }

    async checkSecondCheckbox() {
        //playwright method "check" is used to check the checkbox
        await this.secondBox.check()
    }

    async uncheckSecondCheckbox() {
        //playwright method "uncheck" is used to uncheck the checkbox
        await this.secondBox.uncheck()
    }

    //Validate expected checked/unchecked state
     async assertCheckboxState(isFirstChecked: boolean, isSecondChecked: boolean) {
        await expect(this.firstBox).toBeChecked({checked: isFirstChecked})
        await expect(this.secondBox).toBeChecked({checked: isSecondChecked})
     }


}