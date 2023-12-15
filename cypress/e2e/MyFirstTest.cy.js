
describe('My First Test', () => {
    it('test1-verify title-positive', function (){
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.title().should('eq','OrangeHRM')

    })

    it('verify title-Negative Test', function (){
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.title().should('eq','OrangeHRM123')
        
        
    })

})