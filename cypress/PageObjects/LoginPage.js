class Login
{


    setUsername(username)
    {
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }


    verifyLogin()
    {
        cy.get("span h6").should('have.text','Dashboard');
    }

}


export default Login;