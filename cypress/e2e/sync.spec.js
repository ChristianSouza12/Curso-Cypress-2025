/// reference types="cypress"/>

it("Deve aguardar elemento estar disponivel" , () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")


    cy.get("#novoCampo").should("not.exist")
    cy.get("#buttonDelay").click()
    cy.get("#novoCampo").should("not.exist")
    cy.get("#novoCampo").should("exist")
    cy.get("#novoCampo").type("Funcionou")


})

it.only("Deve fazer retrys" , () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")

    cy.get("#buttonDelay").click()
    cy.get("#novoCampo")
    // .should("not.exist")
    .should("exist")
    .type("funciona")
    
   
    // só vai aceitar quando ambas passarem ao mesmo tempo
    
   


})
