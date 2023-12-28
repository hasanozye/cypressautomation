

describe("MyTestSuite", ()=>{

    //Direct access
    /*it("FixturesDemoTest",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture("orangehrm").then(   (data)=>{

        
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
    
            cy.get("h6.oxd-text").should('contain.text',data.expected);


        });

    });*/


    let userdata;
    before(()   =>{

        cy.fixture("orangehrm").then((data)=>{

            userdata = data;
            

        })

    })
     


    // Access through Hook - for multiple it blocks -better this way
    it("FixtureDemoTest", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click();

            cy.get("h6.oxd-text").should('contain.text',userdata.expected);

    })



})