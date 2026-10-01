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
        // ── About `page` below ───────────────────────────────────────────
        // • `page` comes from Playwright’s BUILT-IN fixture; 
        // our pom.fixture merely extends the default set, so `page`, `context`, etc. are still available.
        // • It is the exact SAME tab that PomManager is working on.
        // • Safe to use for one-off utilities (screenshot, tracing, network intercepts).  It does *not* open a new tab or context.
        // • Keep business interactions (click, fill, asserts) inside POM.
        await expect(page).toHaveScreenshot(
            'checkboxes-after-check.png',
            // maxDiffPixelRatio was added to deal with win32 vs linux screenshot differences in github actions
            // see important.txt
            {
                maxDiffPixels: 500,
                maxDiffPixelRatio: 0.03
            }   // passes up to ~380 px on a 1920×1080 shot
        );
        await expect(pm.checkboxesPage.locator('form#checkboxes')).toBeVisible();
    })

    // test('Uncheck both checkboxes', async () => {
    //     await mp.checkboxesPage.openCheckboxesPage()
    //     await mp.checkboxesPage.uncheckFirstCheckbox()
    //     await mp.checkboxesPage.uncheckSecondCheckbox()
    //     await mp.checkboxesPage.assertCheckboxState(false, false)
    // })

    test('Uncheck both checkboxes', async ({ pm, page }) => {
        await pm.checkboxesPage.openCheckboxesPage()
        await pm.checkboxesPage.uncheckFirstCheckbox()
        await pm.checkboxesPage.uncheckSecondCheckbox()
        await pm.checkboxesPage.assertCheckboxState(false, false)
    })

})