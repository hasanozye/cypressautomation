
describe("Assertions demo", () =>{

    it("Implicit assertions", () =>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // should   and
        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')
        
    /*   cy.url().should('include','orangehrmlive.com')  
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')  */

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','Orange')

        cy.get('.orangehrm-login-branding > img')
        .should('be.visible') // Logo visible
        .and('exist')         // Logo exists
        //cy.get('.orangehrm-login-branding > img').should('exist')

        cy.get("div.oxd-input-group").should('have.length','2') // no of elements specified


        cy.get("input.oxd-input[name='username']").type("Admin") //provide a value into input box
        
        cy.get("input.oxd-input[name='username']").should('have.value','Admin') //value check




    })

    /*it("Explicit assertions", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click();

    })*/



})