

describe("Check UI Elements" , ()=>{

    it("Checking Radio Buttons", () =>{


        cy.visit("https://testautomationpractice.blogspot.com/")

        //Visibility of Radio Buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //Selecting radio Buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')



    })



    it("Checking Check Boxes", () =>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        
        //Visibility of the element
        /*cy.get("input#sunday").should('be.visible')
        cy.get("input#monday").should('be.visible')
        cy.get("input#tuesday").should('be.visible')
        cy.get("input#wednesday").should('be.visible')
        cy.get("input#thursday").should('be.visible')
        cy.get("input#friday").should('be.visible')
        cy.get("input#saturday").should('be.visible')*/

        cy.get("input.form-check-input[type='checkbox']").should('be.visible')


        //Selecting single check box
        cy.get("input#monday").check().should('be.checked')

        //Unselecting the checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')

        //Selecting all the check boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')


        //Selecting first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


    })

})