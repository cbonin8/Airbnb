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
            .waitForElementPresent('@emailInput', 5000)
            .setValue('@emailInput', 'cbonin8@gmail.com')
            .setValue('@passwordInput', 'select11')
            .click('@logInSubmit')
            .waitForElementNotPresent('@logInSubmit', 5000)
            //.click('@selectHomes')
        // pageObject
            .api.pause(3000)
           // .waitForElementVisible('@searchBar', 4000)
            // .api.pause(1000000)
        },
    'Save & Delete Listing': browser => {
        //pageObject
           // .click('@searchBar')
           // .setValue('@searchBar', 'Cancun')
           // .expect.element('@searchBar').value.to.equal('Cancun').before(5000)
        //pageObject
           // .api.keys(browser.Keys.ENTER)
          //  .pause(5000)
        pageObject
            .waitForElementPresent('@thirdListing', 3000)
            .click('@thirdListing')
            .api.pause(3000)
        browser.window_handles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
        pageObject
            .api.pause(4000)
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
        .verify.containsText('@savedResultText', "1 home")
        .click('@removeListing')
        .api.pause(5000)
        pageObject
            .waitForElementVisible('@yesRemove', 4000)
            .click('@yesRemove')
           // .api.pause(2000)
        pageObject
           // .expect.element('@nothingSavedYet').value.to.contain('Nothing saved yet').before(3000)
           .verify.containsText('@nothingSavedYet', 'Nothing saved yet')
    },
    'Logging Out' : browser => {
        pageObject
        .click('@acctBtn')
        .waitForElementPresent('@logOutBtn', 3000)
        .click('@logOutBtn')
        .api.pause(4000)
    }
}