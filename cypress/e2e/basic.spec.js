/// reference types="cypress"/>



describe("Cypress basic" , () => {

    it("Should visit a page and asset title" , () => {

        cy.visit("https://wcaquino.me/cypress/componentes.html")

        // const title = cy.title()
        // console.log(title);

        // cy.pause()   // usado para ir passo a passo, voce vai vendo o passo a passo do codigo

        cy.title().should("be.equal", "Campo de Treinamento") // para pegar um titulo na pagina
        cy.title().should("contain", "Campo")

       
        

        cy.title()
        .should("be.equal", "Campo de Treinamento") // juntando as duas 
        .and("contain", "Treinamento")



        // fazeer !!!

        // imprimir o log no console

        cy.title().then((title) =>{
            console.log("o titulo da pagina é " , title);
        })





        // escrever o title no campo de texto


        cy.title().then(() => {
            cy.get("#formNome")
                .should("exist")
                .should("be.visible")
                .type("Christian");
        });


        cy.title().then(() => {
            cy.get("#formSobrenome")
            .should("exist")
            .should("be.visible")
            .type("Souza")
        })
    })



    it("should find and interact with an element" , () => {

        cy.visit("https://wcaquino.me/cypress/componentes.html")


        cy.get("#buttonSimple")
            .click()
            .should("have.value", "Obrigado!") // fazendo a assertiva
    

    })
})

