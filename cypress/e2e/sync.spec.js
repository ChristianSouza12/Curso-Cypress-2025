/// reference types="cypress"/>

it("Deve aguardar elemento estar disponivel" , () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")


    cy.get("#novoCampo").should("not.exist")
    cy.get("#buttonDelay").click()
    cy.get("#novoCampo").should("not.exist")
    cy.get("#novoCampo").should("exist")
    cy.get("#novoCampo").type("Funcionou")


})

it("Deve fazer retrys" , () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")

    cy.get("#buttonDelay").click()
    cy.get("#novoCampo")
    // .should("not.exist")
    .should("exist")
    .type("funciona")
    
   
    // só vai aceitar quando ambas passarem ao mesmo tempo
    
   


})

it('Uso do find' , () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")

    cy.get("#buttonListDOM").click()
    cy.get("#lista li")
    .find("span")
    .should("contain", "Item 1")

    cy.get("#lista li")
    .find("span")
    .should("contain", "Item 2")
    
})




it("Uso do timeout" , () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")
    // cy.get("#buttonDelay").click()
    // cy.get("#novoCampo",{timeout:1000}).should("exist")
    // cy.get("#buttonListDOM").click()
    // cy.get("#lista li span", {timeout:6000})
    // .should("contain", "Item 2")


     cy.get("#buttonListDOM").click()
     cy.get("#buttonListDOM").click()
    cy.get("#lista li span", {timeout:6000})
    .should("have.length", 2)
})

it.only("Click Retry" , () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")
    cy.get("#buttonCount").click().click()
    
    .should("have.value", "111")
})
