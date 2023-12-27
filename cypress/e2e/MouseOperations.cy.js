import 'cypress-iframe'
require("@4tw/cypress-drag-drop")

describe("Mouse Operations", ()=>{


    it('MouseHover', () =>{

        cy.visit("https://demo.opencart.com/")

        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a")
        .should('not.be.visible')

        cy.get("li.nav-item:nth-child(1)").trigger('mouseover').click();

        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a")
        .should('be.visible');



    });

    it('Right click', () =>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        
        /*//Approach1
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should('be.visible')
*/
        //Approach2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get('.context-menu-one.btn.btn-neutral').should('be.visible')
        

    });


    it('Double Click', ()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");

        cy.frameLoaded("iframe#iframeResult") // load the frame   
        
        //Approach1 - trigger()
        /*cy.iframe("iframe#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe("iframe#iframeResult").find("#field2").should('have.value','Hello World!')*/

        //Approach2 - dblclick()
        cy.iframe("iframe#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("iframe#iframeResult").find("#field2").should('have.value','Hello World!')


    });


    it('Drag and Drop using plugin', ()=>{

        cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop");

        cy.get('#menu-ice-cream').drag('#plate-items');
        //cy.get('#menu-ice-cream').drag('#plate-items', {force:true}) use this for force true actions.

    });


    it.only('Scrolling Page', ()=>{

        //Palau Flag
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.get("img[alt='Flag of Palau']").scrollIntoView({duration:2000});
        cy.get("img[alt='Flag of Palau']").should('be.visible')

        cy.get("img[alt='Flag of Andorra']").scrollIntoView({duration:2000});
        cy.get("img[alt='Flag of Andorra']").should('be.visible');

        cy.get("div#footer").scrollIntoView({duration:2000});



    })


})