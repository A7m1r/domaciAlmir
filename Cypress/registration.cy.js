

describe ("Registration test",() => {
    it ('Registration',()=> {
        cy.visit ("https://gallery-app.vivifyideas.com/")
        cy.get(':nth-child(2) > .nav-link').click ()
        cy.get('#first-name').type ("Almir")
        cy.get('#last-name').type ("Tester")
        cy.get('#email').type("almirtester@mail.com");
        cy.get('#password').type ("Almir1234")
        cy.get('#password-confirmation').type ("Almir1234")
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })
    

})