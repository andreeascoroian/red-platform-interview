let homepageSelectors =
    {
        LOGIN_BUTTON: '#brxe-fhjuho [aria-label="RED Platform login"]',
    }


let loginSelectors =
    {
        REGISTER_LINK: '#kc-registration a'
    }


let carbonFootprintSelectors =
    {
        CARBON_FOOTPRINT_LINK: '[testing-el="testing_GoToCarbonFootprintPageButton"]'
    }

let dashboardSelectors =
    {
        SELECT_COUNTRY: '.country-selection .sc-ion-label-md-h',
        SEARCH_COUNTRY_FIELD: '[aria-label="search text"]',
        FIRST_RESULT: '#testing_search_results .item .ion-color-primary',
        GET_STARTED: '[color="restart-red"]',
        YOUR_FOOTPRINT: '.card-content-md .co2-footprint-value',
        QUESTION_ILLUSTRATION: '.question-ilustration  tspan:nth-child(1)',
        TEST_PROGRESS: '.ion-padding-top .test-progress',
        FOOTPRINT_DETAILS_TITLE: '.footprint-test-details-title.ion-text-capitalize',
        FINISHED: '.carbon-tests-list .test-status :nth-child(2)',
        FOOTPRINT_VALUE: '.carbon-tests-list .total-footprint',

    }

module.exports = {
    homepageSelectors, loginSelectors, carbonFootprintSelectors, dashboardSelectors
}
