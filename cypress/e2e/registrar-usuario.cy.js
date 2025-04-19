describe('Fluxo de registro e exclusão de usuário', () => {
  const nome = 'Maria Teste';
  const email = 'maria@teste.com';
  const senha = 'lock123';

  it('Realiza cadastro e exclusão de conta com sucesso', () => {
    cy.visit('http://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!').should('be.visible');

    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Enter Account Information').should('be.visible');

    cy.get('#id_gender2').check(); 
    cy.get('#password').type(senha);
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1995');

    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('#first_name').type('Maria');
    cy.get('#last_name').type('Silva');
    cy.get('#company').type('Empresa Teste');
    cy.get('#address1').type('Rua Cypress');
    cy.get('#address2').type('Apto 101');
    cy.get('#country').select('Canada');
    cy.get('#state').type('SP');
    cy.get('#city').type('São Paulo');
    cy.get('#zipcode').type('12345678');
    cy.get('#mobile_number').type('11999999999');

    cy.get('[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();

    cy.contains(`Logged in as ${nome.split(' ')[0]}`).should('be.visible');

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();
  });
});
