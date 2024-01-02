import Login from "../PageObjects/LoginPage2";

describe('pom', ()=>{

    //Genral approach
    it('LoginTest', ()=>{


        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click();

        cy.get("span h6").should('have.text','Dashboard');


    })

    //using pom
    it('LoginTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com");

        const ln = new Login();
        ln.setUsername("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();
        


    })

    //using pom with Fixtures
    it('LoginTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com");


        cy.fixture('orangehrm').then((data)=>{

        const ln = new Login();
        ln.setUsername(data.username);
        ln.setPassword(data.password);
        ln.clickSubmit();
        ln.verifyLogin();

        })

    })


})