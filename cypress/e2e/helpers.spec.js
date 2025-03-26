/// reference types="cypress"/>

describe("Helpers..." , () =>{
    it("Wrap", () =>{
        const obj = {nome:"User", idade: 26}


        expect(obj).to.have.property("nome")
        cy.wrap(obj).should("have.property", "idade") // wrap encapsula objetos do cypress

        cy.visit("https://wcaquino.me/cypress/componentes.html")

        cy.get("#formNome").then($el => {
            cy.wrap($el).type("funcionou via cypress")
        })

        const promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(10)
            }, 500);
        })

        cy.get("#buttonSimple").then(() => console.log("Encontrei o primeiro botao"))
        cy.wrap(promise).then(num => console.log(num))
        cy.get("#buttonList").then(() => console.log("Encontrei o segundo botao"))


        cy.wrap(1).then(num => {
            return 2
        }).should("be.equal", 2)
    })

    it("Its..." , () =>{
        // its pega a propriedade direta
        const obj = {nome:"User", idade: 26}

        cy.wrap(obj).should("have.property", "nome", "User")
        cy.wrap(obj).its("nome").should("be.equal", "User")

        const obj2 = {nome:"User", idade: 26, endereco:{rua:"Mario poli"}}

        cy.wrap(obj2).its("endereco").should("have.property", "rua")
        cy.wrap(obj2).its("endereco").its("rua").should("contain", "Mario")


        cy.visit("https://wcaquino.me/cypress/componentes.html")

        cy.title().its("length").should("be.equal", 20)
    })


    it("Invoke..." , () => {
        const getValue = () => "Esse é o resultado da FN"

        const soma = (a,b) => a + b

        cy.wrap({fn: getValue}).invoke("fn")
        .should("be.equal", "Esse é o resultado da FN")


        cy.wrap({fn: soma}).invoke("fn", 30,30)
        .should("be.equal", 60)



        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get("#formNome").invoke("val", "Texto via invoke")

        cy.window().invoke('alert', "Alert via invoke")

        cy.get('#resultado')
            .invoke("html", "<input type='button' value='Ola'/>")


    })
})