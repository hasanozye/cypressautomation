/**
 * Cypress test suite for data-driven login scenarios on the OrangeHRM website.
 */
describe("MyTestSuite", ()=>{

    /**
     * Data-driven test for logging into the OrangeHRM website using different sets of credentials.
     */
    it("DataDrivenTest", ()=>{

        // Disable uncaught exception handling for this test
        cy.once('uncaught:exception', () => false);

        // Load user data from the "orangehrm2" fixture
        cy.fixture("orangehrm2").then((data)=>{

            // Visit the OrangeHRM login page
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            // Iterate over each set of user credentials
            data.forEach((userdata)=>{

                // Enter username and password
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);

                // Click the login button
                cy.get("button[type='submit']").click();

                // Check if the login is successful for Admin
                if(userdata.username == "Admin" && userdata.password == "admin123"){

                    // Assert the presence of the Admin dashboard message
                    cy.get("h6.oxd-text").should('contain.text', userdata.expected);

                    // Logout for Admin
                    cy.get(".oxd-userdropdown-tab").click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

                } else {
                    // Check for error message for non-Admin users
                    cy.get("div.oxd-alert-content").should('have.text', userdata.expected);
                };
            });
        });
    });
});