import '../support/commands';
import { faker } from '@faker-js/faker';

describe('Fluxo de registro e exclusão de usuário', () => {

  it('deve cadastrar e excluir uma conta com sucesso', () => {
    const usuario = {
      nome: faker.person.firstName(),
      email: faker.internet.email(),
      senha: faker.internet.password()
    };

    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!').should('be.visible');

    cy.criarUsuario(usuario);

    cy.contains(usuario.nome).should('be.visible'); 

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();
  });
});