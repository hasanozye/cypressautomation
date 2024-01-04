/**
 * Cypress test suite for handling various alert types.
 */
describe('Alerts', () =>{

    // 1) JavaScript Alert: It will have some text and an 'OK' button

    /**
     * Cypress test for handling a JavaScript alert with 'OK' button.
     */
    it('JS alert', () =>{ // Use it.only if you want to execute only that test.

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        // Click the button triggering the alert
        cy.get("button[onclick='jsAlert()']").click()

        // Listen for the alert and assert its message
        cy.on('window:alert',(t) =>{

            expect(t)
            .to
            .contains('I am a JS Alert')

        })

        // Alert window automatically closed by Cypress

        // Assert the result message after closing the alert
        cy.get("p#result").should('have.text','You successfully clicked an alert')

    })

    // 2) JavaScript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons

    /**
     * Cypress test for handling a JavaScript confirm alert with 'OK' button.
     */
    it('JS Confirm alert - OK', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // Click the button triggering the confirm alert
        cy.get("button[onclick='jsConfirm()']").click()

        // Listen for the confirm alert and assert its message
        cy.on('window:confirm', (t)=>{

            expect(t).to.contains('I am a JS Confirm')

        })

        // Cypress automatically closes alert window by using OK button.

        // Assert the result message after closing the alert
        cy.get("p#result").should('have.text','You clicked: Ok')

    })

    /**
     * Cypress test for handling a JavaScript confirm alert with 'Cancel' button.
     */
    it('JS confirm alert - Cancel', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // Click the button triggering the confirm alert
        cy.get("button[onclick='jsConfirm()']").click()

        // Listen for the confirm alert and use Cancel button to close it
        cy.on('window:confirm',()=> false)  // Cypress closes alert window using Cancel button

        // Assert the result message after closing the alert with Cancel
        cy.get("p#result").should('have.text','You clicked: Cancel')

    })

    // 3) JavaScript Prompt Alert: It will have some text with a text box for user input along with 'OK' button-default

    /**
     * Cypress test for handling a JavaScript prompt alert with default 'OK' button.
     */
    it('JS Prompt alert', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{

            // Stub the prompt function to return a specific value
            cy.stub(win,'prompt').returns('Welcome')

        })

        // Click the button triggering the prompt alert
        cy.get("button[onclick='jsPrompt()']").click()

        // Cypress will automatically close prompted alert using OK button by default

        // Assert the result message after closing the prompt alert
        cy.get("p#result").should('have.text','You entered: Welcome')

    })
    

    // 4) Authenticated Alert

    /**
     * Cypress test for handling an authenticated alert using Approach 2.
     */
    it('Authenticated Alert',()=>{

        // Approach 1 (commented out):
        // cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth: 
        // {username: "admin",
        //  password:"admin"}})
        // cy.get("div.example>p").should('have.contain',"Congratulations")

        // Approach 2: Visit the authenticated URL with credentials in the URL itself
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        
        // Assert the success message after authenticating
        cy.get("div.example>p").should('have.contain',"Congratulations")

    })
})