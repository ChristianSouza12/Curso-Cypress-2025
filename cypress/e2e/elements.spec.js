/// reference types="cypress"/>



describe("Work with basic elements", () => {
    it("Texts" , () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get(".facilAchar").should("contain","Cuidado onde clica, muitas armadilhas...")
        cy.get("label[for='formEsportes']").should("contain","Pratica")
    })

    it("Links" , () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        // cy.get("a").first().click()
        cy.contains("Voltar").click()
        cy.get("#resultado").should("have.text", "Voltou!")

        cy.reload()
        cy.get("#resultado").should("have.not.text", "Voltou!")

    })
})

