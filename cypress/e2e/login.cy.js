
describe('Login com lista de usuários válidos', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Deve fazer login com todos os usuários válidos', () => {
        cy.fixture('users').then((users) => {
            users.validUsers.forEach((user) => {
                const { username, password } = user;
                cy.login(username, password);
                cy.url().should('include', 'inventory.html');
                cy.logout();
            });
        })

    it('Deve exibir mensagem de erro com credenciais inválidas', () => {
        cy.get('#user-name').type('invalid_user');
        cy.get('#password').type('wrong_password');
        cy.get('#login-button').click();
        cy.get('.error-message-container').should('exist');
        });
    });

    it('Deve exibir mensagem de erro com credenciais bloqueadas', () => {
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.error-message-container').should('exist');
    });
    
    
})