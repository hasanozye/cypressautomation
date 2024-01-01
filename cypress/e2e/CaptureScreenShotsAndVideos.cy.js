describe('mysuite', ()=>{

    it('Capture screenshots & Videos', ()=>{


        cy.visit("https://demo.opencart.com/");
       // cy.screenshot("homepages");
        //cy.get("img[title='Your Store']").screenshot("logo");

        //Automatically Capture screenshot & vidoe on failure - only when you execute through CLI


        cy.clickLink('Cameras');    //cameras
        cy.get('h2').should('have.text','Hasan Baba!');





    });



})