describe('Checkout do Swag Labs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve completar o checkout com sucesso', () => {
        // Adicionar produtos ao carrinho
        cy.addProductToCart('Sauce Labs Backpack');
        cy.addProductToCart('Sauce Labs Bike Light');
        
        // Ir para o carrinho e iniciar checkout
        cy.goToCart();
        cy.startCheckout();

        // Preencher informações de checkout
        cy.fillCheckoutInfo('Lucas', 'Anjos', '68906096');

        // Verificar overview do checkout
        cy.verifyCheckoutOverview();
        cy.verifyTotalAmount('$43.18');
        cy.verifyFooter();

        // Completar pedido
        cy.completeOrder();

        // Verificar conclusão do pedido
        cy.verifyOrderCompletion();
        cy.verifyFooter();

        // Retornar para a página de produtos
        cy.returnToProducts();
    });

    it('Deve validar campos obrigatórios do checkout', () => {
        // Adicionar produto ao carrinho
        cy.addProductToCart('Sauce Labs Backpack');
        
        // Ir para o carrinho e iniciar checkout
        cy.goToCart();
        cy.startCheckout();

        // Tentar continuar sem preencher os campos
        cy.get('[data-test="continue"]').click();

        // Verificar mensagens de erro
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required');
    });
});