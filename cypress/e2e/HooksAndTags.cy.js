//Hooks


// before
// after
// beforeEach
// afterEach

describe("MyTestSuite", ()=>{

    before(()=>{

        cy.log("****** Launch App ******");


    });

    after(()=>{

        cy.log("****** Close App *********")


    });


    beforeEach(()=>{

        cy.log("********* Login");


    });


    afterEach(()=>{

        cy.log("******** Logout");


    });


    it("search",()=>{

        cy.log("*****   searching  ******");



    });

    
    it.skip("advanced search", ()=>{

        cy.log("*****   advanced searching  ******");

    });


    it.only("listing products", ()=>{

        cy.log("*****   Listing Products  ******");


    });

});