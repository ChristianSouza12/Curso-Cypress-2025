/// reference types="cypress"/>



describe("Cypress basic" , () => {

    it.only("Should visit a page and asset title" , () => {

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



        let syncTitle 



        // escrever o title no campo de texto


        cy.title().then((title) => {
          
            cy.get("#formNome").type(title)


            syncTitle = title
              
        });


        cy.get("#formSobrenome").then($el => {
            $el.val(syncTitle)
        })

        cy.get("#elementosForm\\:sugestoes").then($el =>{
            cy.wrap($el).type(syncTitle)
        })


        // cy.title().then(() => {
        //     cy.get("#formSobrenome")
        //     .should("exist")
        //     .should("be.visible")
        //     .type("Souza")
        // })
    })



    it("should find and interact with an element" , () => {

        cy.visit("https://wcaquino.me/cypress/componentes.html")


        cy.get("#buttonSimple")
            .click()
            .should("have.value", "Obrigado!") // fazendo a assertiva
    

    })

    it("Should vs Then" , () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get("#buttonListDOM").then($el=>{
            // console.log($el)
            expect($el).to.have.length(1)

            cy.get("#buttonList")
        })

    })


// should fica sendo executado enquanto espera, o then espera ser concluido para mandar o resultado da busca
})

