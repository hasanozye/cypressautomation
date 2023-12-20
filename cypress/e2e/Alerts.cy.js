

describe('Alerts', () =>{

    //1) Javascript Alert: It will have some text and an 'OK' button

    it('JS alert', () =>{ // youcan type it.only if you want to execute only that test.

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get("button[onclick='jsAlert()']")
        .click()

        cy.on('window:alert',(t) =>{

            expect(t)
            .to
            .contains('I am a JS Alert')

        })

        //alert window automatically closed by cypress

        cy.get("p#result")
        .should('have.text','You successfully clicked an alert')


    })

    //2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons


    it('JS Confirm alert - OK', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']")
          .click()

        cy.on('window:confirm', (t)=>{

            expect(t).to.contains('I am a JS Confirm')

        })

        //cypress autmatically closed alert window by using ok button.

        cy.get("p#result")
        .should('have.text','You clicked: Ok')



    })


    it('JS confirm alert - Cancel', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']")
        .click()

        cy.on('window:confirm',()=> false)  // cypress closes alert window using cancel button

        cy.get("p#result")
        .should('have.text','You clicked: Cancel')


    })

    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' button-default


    it('JS Prompt alert', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('Welcome')


        })

        cy.get("button[onclick='jsPrompt()']").click()

        //cypress will autamtically close prompted alert - it will use OK button - by default

        cy.get("p#result").should('have.text','You entered: Welcome')

    })
    

    //4) Authenticated Alert

    it('Authenticated Alert',()=>{

        //Approach1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth: 
        {username: "admin",
         password:"admin"}})


        cy.get("div.example>p").should('have.contain',"Congratulations")*/

        //Approach2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div.example>p").should('have.contain',"Congratulations")

    })



})