describe('Login do Swag Labs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.verifyLoginPage();
    });

    it('Deve fazer login com todos os usuários válidos', () => {
        cy.fixture('users').then((users) => {
            users.validUsers.forEach((user) => {
                const { username, password } = user;
                
                // Fazer login
                cy.login(username, password);
                
                // Verificar login bem-sucedido
                cy.verifySuccessfulLogin();
                
                // Fazer logout
                cy.logout();
                
                // Limpar campos para próximo teste
                cy.clearLoginFields();
            });
        });
    });

    it('Deve exibir mensagem de erro com credenciais inválidas', () => {
        // Tentar login com credenciais inválidas
        cy.login('invalid_user', 'wrong_password');
        
        // Verificar mensagem de erro
        cy.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('Deve exibir mensagem de erro com usuário bloqueado', () => {
        // Tentar login com usuário bloqueado
        cy.login('locked_out_user', 'secret_sauce');
        
        // Verificar mensagem de erro
        cy.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

    it('Deve validar campos obrigatórios', () => {
        // Tentar login sem preencher campos
        cy.get('#login-button').click();
        
        // Verificar mensagens de erro
        cy.verifyErrorMessage('Epic sadface: Username is required');
    });
});