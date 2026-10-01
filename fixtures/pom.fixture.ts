

import { test as base } from "@playwright/test"
import PomManager from "../pages/ManagePage"
import { validUser } from "../test-data/validUser"

type MyFIxtures = {
    pm: PomManager;
    validUser: { username: string; password: string }
}

export const test = base.extend<MyFIxtures>({
    //re-use plawrights page object
    //create the POmManager with the page object and hand it to the test
    pm: async ({ page }, use) => {
        await use(new PomManager(page));
    },
    // plain value fixture available in all tests
    validUser,
})

export { expect } from "@playwright/test"