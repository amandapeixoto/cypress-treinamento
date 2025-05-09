import { faker } from "@faker-js/faker";

Cypress.Commands.add('criarUsuario', (usuario) => {
    cy.get('[data-qa="signup-name"]').type(usuario.nome);
    cy.get('[data-qa="signup-email"]').type(usuario.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Enter Account Information').should('be.visible');

    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').type(usuario.senha);
    cy.get('[data-qa="days"]').select('15');
    cy.get('[data-qa="months"]').select('September');
    cy.get('[data-qa="years"]').select('1999');
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('[data-qa="first_name"]').type(usuario.nome);
    cy.get('[data-qa="last_name"]').type(faker.person.lastName());
    cy.get('[data-qa="address"]').type(faker.location.streetAddress());
    cy.get('[data-qa="country"]').select('Australia');
    cy.get('[data-qa="state"]').type(faker.location.state());
    cy.get('[data-qa="city"]').type(faker.location.city());
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode());
    cy.get('[data-qa="mobile_number"]').type(faker.phone.number());

    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
}) 

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })