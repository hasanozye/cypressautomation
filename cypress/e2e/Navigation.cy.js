// go ()


describe('mySuite', ()=>{


    it('NavigationTest', ()=>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq','Your Store');   //Home page
        cy.clickLink('Cameras', {force:true});

        cy.get("h2").should('contain.text','Cameras'); //cameras

        cy.go('back');  //go back to home page
        cy.title().should('eq','Your Store');

        cy.go('forward');   // go to cameras
        cy.get('h2').should('contain.text','Cameras');

        cy.go(-1); // go back to the home page
        cy.title().should('eq','Your Store');

        cy.go(1);   // cameras
        cy.get('h2').should('contain.text','Cameras');

        cy.reload();




    })




})