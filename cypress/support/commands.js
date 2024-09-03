
Cypress.Commands.add('preenchaCamposObrigatorios', () => {
    cy.get('#firstName').type('Davi')
    cy.get('#lastName').type('NOgueira')
    cy.get('#email').type('nereuc@gmail.com')
    cy.get('#phone').type('61999879513')
    cy.get('#open-text-area').type('DeusFiel')
    cy.get('.button').click()

});