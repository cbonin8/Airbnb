module.exports = {

    url : 'https://www.airbnb.com/',
    elements : {

        signUpBtn: {
            selector: '//span[text()="Sign up"]',
        locateStrategy: 'xpath'
        },

        logIn: {
            selector: 'a[class="_1uqp3jab"]',
            locateStrategy: 'css'
        },

        acctBtn: {
            selector: '(//div[@class="_lvb55za"])[7]',
            locateStrategy: 'xpath'
        },

        logInSubmit: '._12cyg0af',

        emailInput: {
            selector: 'input[id="email-login-email"]',
        locateStrategy: 'css'
        },

        passwordInput: {
            selector: 'input[id="email-login-password"]',
        locateStrategy: 'css'
        },


        homeSearchBar: '._1agpncmc',
        
        searchBar: '_19iuq4q',
            // selector: '//button[@aria-label="Open search"]',
            // locateStrategy: 'xpath'
        // },

        selectHomes: {
            selector: '(//div[@class="_13lgpze"])[1]',
            locateStrategy: 'xpath'
        },

        thirdListing: {
            selector: '(//div[@class="_1df8dftk"])[1]',
            locateStrategy: 'xpath'
        },

        fourthListing: {
            selector: '(//div[@class="_1df8dftk"])[4]',
            locateStrategy: 'xpath'
        },

        listingPrice: '._36rlri',

        saveBtn: {
            selector: '//div[text()="Save"]',
            locateStrategy: 'xpath'
        },

        mobileStarredListings: {
            selector: '(//div[@class="_v44ajx"])[1]',
            locateStrategy: 'xpath'
        },

        clickOff: {
            selector: '(//button[@class="_1rp5252"])[13]',
            locateStrategy: 'xpath'
        },

        savedTab: {
            selector: '(//div[@class="_lvb55za"])[2]',
            locateStrategy: 'xpath'
        },

        openSavedMSL: {
            selector: '//strong[text()="Mobile Starred Listings"]',
            locateStrategy: 'xpath',
        },

        savedResultText: {
            selector: '//span[text()="1 home"]',
            locateStrategy: 'xpath'
        },

        removeListing: {
            selector: 'svg[aria-label="Remove listing from a list"]',
            locateStrategy: 'css'
    },
        yesRemove: {
            selector: '//span[text()="Yes, remove"]',
            locateStrategy: 'xpath'
        },
        nothingSavedYet : {
            selector: '//span[text()="Nothing saved yet"]',
            locateStrategy: 'xpath'
        },
        logOutBtn: {
            selector: '//span[text()="Log Out"]',
            locateStrategy: 'xpath'
        }
}}