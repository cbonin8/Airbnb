var pageObject = {}

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.selectors()
        pageObject.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Logging In': browser => {
        pageObject
            .click('@signUpBtn')
            .waitForElementVisible('@logIn', 5000)
            .click('@logIn')
            .waitForElementVisible('@emailInput', 5000)
            .setValue('@emailInput', 'cbonin8@gmail.com')
            .setValue('@passwordInput', 'select11')
            .click('@logInSubmit')
            .waitForElementNotPresent('@logInSubmit', 5000)
            .waitForElementVisible('@searchBar', 5000)
    },
    'Save & Delete Listing': browser => {
        pageObject
            .click('@searchBar')
            .setValue('@searchBar', 'Cancun')
            .expect.element('@searchBar').value.to.equal('Cancun').before(5000)
        pageObject
            .api.keys(browser.Keys.ENTER)
            .pause(5000)
        pageObject
            .click('@thirdListing')
        // .api.pause(10000)
        browser.window_handles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);

        })
        pageObject
            .click('@saveBtn')
            .waitForElementPresent('@mobileStarredListings', 5000)
            .click('@mobileStarredListings')
            .click('@clickOff')
            // .api.pause(4000)
        pageObject
            .click('@savedTab')
            .api.pause(3000)
        pageObject
            .click('@openSavedMSL')
            .api.pause(2000)
        pageObject
        .verify.containsText('@savedResultText', "CANCUN ECO-APARTMENT & SWIMMING")
        .click('@removeListing')
        // .api.pause(2000)
        pageObject
            .click('@yesRemove')
            // .api.pause(1000)
        pageObject
            .verify.containsText('@nothingSavedYet', 'Nothing saved yet')
    },
    'Logging Out' : browser => {
        pageObject
        .click('@acctBtn')
        .click('@logOutBtn')
        .api.pause(4000)
    }
}