/// reference types="cypress"/>





describe("Work with basic elements", () => {

   beforeEach(() =>{
    cy.reload()
   })


    it("Texts" , () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get(".facilAchar").should("contain","Cuidado onde clica, muitas armadilhas...")
        cy.get("label[for='formEsportes']").should("contain","Pratica")
    })

    it("Links" , () => {
       
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get("#resultado").should("have.not.text", "Voltou!")

        cy.contains("Voltar").click()
        cy.get("#resultado").should("have.text", "Voltou!")

    

    })

    it("TextsFields" , () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        
        cy.get('#formNome').type("Cypress Test")
        cy.get("#formNome").should("have.value", "Cypress Test")


        cy.get("#formSobrenome").type("Cypress teste 123456{backspace}{backspace}")
        .should("have.value", "Cypress teste 1234")



        cy.get("#elementosForm\\:sugestoes")
        .type("Text Area")
        .should("have.value", "Text Area")



        cy.get('#tabelaUsuarios input[type="text"]').eq(0)
        .type("Ola").should("have.value" , "Ola")



        cy.get("#elementosForm\\:sugestoes")
        .clear()
        .type("Erro{selectAll}acerto",{delay:100})
        .should("have.value", "acerto")
    })


    it("Radio button" , () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")


        cy.get("#formSexoMasc")
        .click()
        .should("be.checked")

        cy.get("#formSexoFem").should("not.be.checked")



        cy.get('[name="formSexo"]')
        .should("have.length" , 2)
    })

    it("CheckBox" , () =>{
        cy.visit("https://wcaquino.me/cypress/componentes.html")

        cy.get("#formComidaPizza")
        .click()
        .should("be.checked")
        .click()
        .should("not.be.checked")

        cy.get("[name='formComidaFavorita']").click({multiple:true})
        .should("be.checked")

        cy.get("#formComidaVegetariana")
        .click()
        .should("not.be.checked")
    })

    it("Combo", () => {

        cy.visit("https://wcaquino.me/cypress/componentes.html")

        cy.get('[name="formEscolaridade"]')
        .select("Superior")
        .should("have.value","superior")


        cy.get('[name="formEscolaridade"]')
        .select("1graucomp")
        .should("have.value","1graucomp")

    })

    it.only("Multiple Comb" , () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")

            cy.get("#formEsportes")
            .select(["natacao","Corrida","nada"])
            


    })
})

