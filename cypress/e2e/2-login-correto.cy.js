describe('Login de usuário', () => {
    it('deve fazer login com sucesso', () => {
        cy.visit('https://automationexercise.com');
        cy.get('body').should('contain', 'Home');
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        
        cy.fixture('usuario').then((usuario) => {
            cy.get('[data-qa="login-email"]').type(usuario.email);
            cy.get('[data-qa="login-password"]').type(usuario.senha);
        });

        cy.get('[data-qa="login-button"]').click();

        cy.fixture('usuario').then((usuario) => {
            cy.contains(usuario.nome).should('be.visible'); 
        })

        cy.contains('Delete Account').click();
        cy.contains('Account Deleted!').should('be.visible');
    });
});