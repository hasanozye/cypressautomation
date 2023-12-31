//click on link using label
// overwriting existing contains() command
// re-usable custom command


describe('Custom commands', ()=>{


    it("handling links", ()=>{

        cy.visit("https://demo.nopcommerce.com/");

        //direct -without using custom command
            //cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
        
        //using custom command
        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get(".product-name h1").should('contain.text','Apple');



    })


    it.skip("overwriting existing command", ()=>{

        //cy.clickLink("APPLE MacBook Pro 13-inch");
        //cy.get(".product-name h1").should('contain.text','Apple');        





    })


    it("Login Command", ()=>{

        cy.visit("https://demo.nopcommerce.com/");

        cy.get(".ico-login").click();
        cy.login("ehliyethasan@gmail.com","Hasan123");
        cy.get(".ico-logout").should('have.text','Log out');


    })



})