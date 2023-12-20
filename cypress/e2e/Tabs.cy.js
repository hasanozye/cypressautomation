/// <reference types="Cypress" />


describe('Handle tab',()=>{

    
    it('Approach1 -This is more good-',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

        cy.get('.example > a').invoke('removeAttr','target').click() // clicking on ling remove the target attribute from that element

        cy.url().should('include','new')
        cy.get("h3").should('have.text','New Window')

        cy.wait(2000)

        //operations

        cy.go('back')   //back to parent tab




    })

    it('Approach2',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get('.example>a').then((e)=>{

            let url = e.prop('href')

            cy.visit(url)
            cy.get("h3").should('have.text','New Window')
            cy.url().should('include','new')

            cy.wait(2000)

            cy.go('back')


        })


    })


})