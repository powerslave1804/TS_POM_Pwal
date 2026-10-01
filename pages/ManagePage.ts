import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { SecurePage } from "./securePage";
import { CheckboxesPage } from "./checkboxesPage";


export default class ManagePage {
    constructor(private readonly page: Page) { }

    //private caches (undefined until first access)
    private _login?: LoginPage;
    private _secure?: SecurePage;
    private _checkBoxes?: CheckboxesPage;

    //lazy getter: cretaes the page object only on first use, then reuse it.
    get loginPage(): LoginPage {
        if (!this._login) {
            this._login = new LoginPage(this.page);
        }
        return this._login
    }

    get securePage(): SecurePage {
        return this._secure ??= new SecurePage(this.page);
    }

    get checkboxesPage(): CheckboxesPage {
        return this._checkBoxes ??= new CheckboxesPage(this.page)
    }
}