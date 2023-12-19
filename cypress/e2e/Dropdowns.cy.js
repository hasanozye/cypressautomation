/// <reference types="Cypress" />


describe('Handle dropdowns', function(){

    it('Dropdown with select', function(){

        cy.visit("https://testautomationpractice.blogspot.com/")
        
        cy.get("select#country")
        .select('Japan')
        .should('have.value','japan')

    })

    it('Dropdown without select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container")
        .click()

        cy.get("input.select2-search__field[role='combobox']")
        .type('Turkey')
        .type('{enter}')


        cy.get("#select2-billing_country-container")
        .should('have.text','Turkey')

    })


    it('Auto suggest Dropdown', () =>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("input#searchInput")
        .type('Delhi')

        cy.get("div.suggestions-dropdown>a")
        .contains('Delhi University')
        .click()

    })


    it('Dynamic Dropdown', function() {

        cy.visit("https://www.google.com")

        cy.get("#APjFqb")
        .type('cypress automation')

        cy.wait(3000)

        cy.get("div.wM6W7d[role='presentation']>span").should('have.length',10)

        cy.get("div.wM6W7d[role='presentation']>span").each(($el, index, $list) =>{

            if($el.text()=='cypress automation'){

                cy.wrap($el).click()

            }

        })

        cy.get("#APjFqb").should('have.value','cypress automation')


    })


})