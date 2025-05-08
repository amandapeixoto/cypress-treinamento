describe('Login de usuário', () => {
    it('deve falhar ao fazer login com credenciais incorretas', () => {
        cy.visit('https://automationexercise.com');
        cy.get('body').should('contain', 'Home');
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type("usuario@email");
        cy.get('[data-qa="login-password"]').type('senhaerrada'); // senha incorreta    
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});                          