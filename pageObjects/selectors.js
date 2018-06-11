module.exports = {

    url : 'https://www.airbnb.com/',
    elements : {

        signUpBtn: {
            selector: '//span[text()="Sign up"]',
        locateStrategy: 'xpath'
        },

        logIn: '._1orm9wyt',

        acctBtn: {
            selector: '(//div[@class="_lvb55za"])[7]',
            locateStrategy: 'xpath'
        },

        logInSubmit: '._1of57wco',

        emailInput: {
            selector: '(//input[@class="_rmhj6zu"])[1]',
        locateStrategy: 'xpath'
        },

        passwordInput: {
            selector: '(//input[@class="_rmhj6zu"])[2]',
        locateStrategy: 'xpath'
        },


        homeSearchBar: '._1agpncmc',
        
        searchBar: '._16g5dn33',

        selectHomes: '._1t073h8',

        thirdListing: {
            selector: '//div[text()="CANCUN ECO-APARTMENT & SWIMMING"]',
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

        mobileStarredListings: '._v44ajx',

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

        savedResultText: '._1xgxs84v',

        removeListing: {
            selector: 'svg[aria-label="Remove listing from a list"]',
            locateStrategy: 'css'
    },
        yesRemove: {
            selector: 'button[class="_14raat4f"]',
            locateStrategy: 'css'
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