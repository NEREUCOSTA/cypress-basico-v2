

describe('começando o curso de cypress básico', () => {
   beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      
   })
   it('test case description', () => {
       
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
   })
   
   it('preencha o fomrulario', () => {
    const DeusFiel = 'Deuséfiel, Deuséfiel, Deuséfiel, Deuséfiel'
    cy.get('#firstName').type('Davi')
    cy.get('#lastName').type('NOgueira')
    cy.get('#email').type('nereuc@gmail.com')
    cy.get('#phone').type('61999879513')
    cy.get('#open-text-area').type('DeusFiel')
    cy.get('.button').click()
    cy.contains('Mensagem enviada com sucesso.').should('be.visible')

})
     it('aprendendo a usar o Commands', () => {
        cy.preenchaCamposObrigatorios()
     });
     it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
          cy.get('#firstName').type('Davi')
          cy.get('#lastName').type('NOgueira')
          cy.get('#email').type('nereuc@gmail,com')
          cy.get('#phone').type('61999879513')
          cy.get('#open-text-area').type('DeusFiel')
          cy.get('.button').click()
          cy.get('.error').should('be.visible')
     })

     it('preencher e limpar os campos nome', () => {
          cy.get('#firstName').type('Davi')
          cy.get('#firstName').should('have.value', 'Davi')
          cy.get('#firstName').clear()
         
     })

     it.only('selecionar o produto Youtube', () => {
          cy.get('#product').select('YouTube')//selecionando usando nome campo tipo dropdown
          cy.get('#product').select(1).should('have.value', 'blog')//selecionando usando valor
          cy.get('input[type="radio"][value="feedback"').check() // selecionar campo tipo radio
     });

     it.only('marcar e desmarcar checkbox', () => {
        cy.get('input[type="checkbox"')
          .check()// marcando os dois checkbox
          .last() //marcando o ultimo
          .uncheck()// desmarca o ultimo   
     });

     it.only('fazendo upload de um arquivo', () => {
          // cy.get('#file-upload').selectFile('C:\\Users\\User\\Downloads\\Nereu Nogueira-CV2024.pdf')
          // cy.selectFile('cypress/fixtures/Nereu Nogueira-CV2024.pdf');
          // Supondo que você está testando um upload de arquivo
          cy.fixture('Nereu Nogueira-CV2024.pdf').as('pdfFile');
          cy.get('input[type="file"]').attachFile('@pdfFile');


     });

});
