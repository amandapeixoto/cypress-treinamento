import '../support/commands.js';
import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {
    it('deve criar um novo usuário com sucesso', () => {
        const usuario = {
            nome: faker.person.firstName(),
            email: faker.internet.email(),
            senha: faker.internet.password()
        };
      
        // Salva os dados no arquivo
        cy.writeFile('cypress/fixtures/usuario.json', usuario);

        cy.visit('https://automationexercise.com');
        cy.get('body').should('contain', 'Home');
        cy.contains('Signup / Login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.criarUsuario(usuario);
    });
});