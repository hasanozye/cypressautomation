import 'cypress-file-upload'

describe("File Uploads", ()=>{

    it("Single File Upload", ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        
        cy.get("#file-upload").attachFile("Hasan_Ozyer_ISTQB_Certificate.pdf");
        cy.get("#file-submit").click();
        cy.wait(2000);

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');


    });



    it("File Upload - Rename", ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile({filePath:"Hasan_Ozyer_ISTQB_Certificate.pdf",fileName:"myFileISTQB.pdf"});
        cy.get("#file-submit").click();
        cy.wait(2000);

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');





    });


    it("File upload - Drag and Drop", ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get("#drag-drop-upload").attachFile("Hasan_Ozyer_ISTQB_Certificate.pdf",{subjectType:'drag-n-drop'});
        cy.wait(2000)

        cy.get("#drag-drop-upload div.dz-filename").should('contain.text','ISTQB');



    });



    it("Multiple files Upload", ()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.get("#filesToUpload").attachFile(["Hasan_Ozyer_ISTQB_Certificate.pdf","Hasan_Ozyer_Resume.pdf"]);
        cy.wait(2000);

        cy.get("#fileList").should('contain', 'ISTQB')
        .and('contain', 'Resume');





    });



    it.only("File upload -Shadow Dom", ()=>{

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");

        cy.get(".smart-browse-input" ,{includeShadowDom:true}).attachFile("Hasan_Ozyer_ISTQB_Certificate.pdf")
        cy.get(".smart-item-name", {includeShadowDom:true}).contains('Hasan_Ozyer_ISTQB_Certificate.pdf')


    });


    

})