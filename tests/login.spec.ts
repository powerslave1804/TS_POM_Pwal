// import { test, expect } from "@playwright/test"
// import ManagePage from "../pages/ManagePage"

import { test, expect} from "../fixtures/pom.fixture"

test.describe('Login flow', () => {
    // let mp: ManagePage;

    // test.beforeEach(({ page }) => {
    //     mp = new ManagePage(page);
    // })



    test('Should login with valid credentials', async ({pm, validUser}) => {
        //await mp.loginPage.openLoginPage();
        await pm.loginPage.openLoginPage();
        // Enter valid credentials and submit
        // await mp.loginPage.userLogin('tomsmith', 'SuperSecretPassword!')
        await pm.loginPage.userLogin(validUser.username, validUser.password)
        //Assert seuccessful login on secure page
        //await mp.securePage.assertSuccess();
        await pm.securePage.assertSuccess();
    })

    test('Should show error for invalid credentials', async ({pm, validUser}) => {
        //await mp.loginPage.openLoginPage();
        await pm.loginPage.openLoginPage();
        // Enter invalid  credentials and submit
        //await mp.loginPage.userLogin('baduser', 'badpass!')
        await pm.loginPage.userLogin('baduser', 'badpass!')
        //Assert error message is shown
        //await mp.loginPage.assertFailedUsername();
        await pm.loginPage.assertFailedUsername();

        await expect(pm.loginPage.locator('#flash')).toBeVisible();
    })

    
})