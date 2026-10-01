// import { test } from "@playwright/test";
// import ManagePage from "../pages/ManagePage";

import { test, expect } from '../fixtures/pom.fixture'

test.describe('Checkboxes Page', () => {
    //     //Declare a variable to hold the ManagePage instance
    //     let mp: ManagePage;

    //     //Fresh instance of ManagePage ensures each test starts with a clean state
    // test.beforeEach(({page}) => {
    //     mp = new ManagePage(page);
    // })

    // test('Check the first box and uncheck the second', async () => {
    //     await mp.checkboxesPage.openCheckboxesPage()
    //     await mp.checkboxesPage.checkFirstCheckbox()
    //     await mp.checkboxesPage.uncheckSecondCheckbox()
    //     await mp.checkboxesPage.assertCheckboxState(true, false)
    // })

    test('mix POM helpers and raw page actions', async ({ pm, page }) => {
        await pm.checkboxesPage.openCheckboxesPage()
        await pm.checkboxesPage.checkFirstCheckbox()

        await expect(page).toHaveScreenshot('checkboxes-after-check.png')
        await expect(pm.checkboxesPage.locator('form#checkboxes')).toBeVisible();
    })

    // test('Uncheck both checkboxes', async () => {
    //     await mp.checkboxesPage.openCheckboxesPage()
    //     await mp.checkboxesPage.uncheckFirstCheckbox()
    //     await mp.checkboxesPage.uncheckSecondCheckbox()
    //     await mp.checkboxesPage.assertCheckboxState(false, false)
    // })

        test('Uncheck both checkboxes', async ({ pm, page}) => {
        await pm.checkboxesPage.openCheckboxesPage()
        await pm.checkboxesPage.uncheckFirstCheckbox()
        await pm.checkboxesPage.uncheckSecondCheckbox()
        await pm.checkboxesPage.assertCheckboxState(false, false)
    })

})