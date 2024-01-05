/**
 * Cypress test suite for interacting with elements using CSS locators on the OpenCart website.
 */
describe('CSSLocators', () =>{

    /**
     * Cypress test for searching a product ('iMac') using a CSS locator for the search input field.
     */
    it('csslocators', () =>{

        // Visit the OpenCart website
        cy.visit('https://opencart.abstracta.us')

        // Type 'iMac' in the search input field using a CSS locator
        cy.get("input.form-control[name='search']").type("iMac")

        // Click the search button using a CSS locator
        cy.get("span.input-group-btn").click()

        // Assert that the product 'iMac' is present in the search results using a CSS locator
        cy.get("h4").contains("iMac")  // Assertion

    })

})