

describe('Handle Tables', ()=>{

    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/")

        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()
        //Customers --> Customers

        cy.get("#menu-customer>a").click()  //customers main menu
        cy.get("#collapse-5>li:first-child").click()    //customers - sub item


    })

    it('Check Number Rows & Columns', ()=>{

        cy.get("tbody>tr").should('have.length',10)
        cy.get("thead>tr>td").should('have.length','7')



    })

    it('Check cell data from specific row & Column', () =>{

        cy.get("tbody>tr:nth-child(8)>td:nth-child(3)").should('contain.text','xvrt@test.com')


    })

    it('Read all the rows & Columns data in the first page', () =>{

        cy.get("tbody>tr").each(    ($row, index, $rows) =>{

            cy.wrap($row).within( ()=>{


                cy.get("td").each( ($col, index, $cols) =>{

                    cy.log($col.text())


                })


            })



        })



    })


    it('Pagination',()=>{

        //find total number of pages
        /*
        let totalPages;
        cy.get(".col-sm-6.text-end").then( (e) => {


            let mytext = e.text();
            totalPages = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
            cy.log("Total number of pages in a table ===============>"+ totalPages)



        })*/

        let totalPages=5;
        for(let p=1; p<=totalPages; p++){

            if(totalPages>1){

                cy.log("Active page is==="+p)

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
                cy.wait(2000)
                cy.get("tbody>tr")
                .each( ($row, index, $rows)=>{

                    cy.wrap($row).within( ()=>{

                        cy.get('td:nth-child(3)').then((e)=>{

                            cy.log(e.text())   //Email


                        })


                    })


                })




            }


        }



    })

    



})