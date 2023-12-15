
describe('CSSLocators', () =>{

it('csslocators', () =>{

    cy.visit('https://opencart.abstracta.us')

    //cy.get("input[name='search']").type("iMac") // id      tag is optional

    cy.get("input.form-control[name='search']").type("iMac")

    cy.get("span.input-group-btn").click()

    cy.get("h4").contains("iMac")  //Assertion

})

})