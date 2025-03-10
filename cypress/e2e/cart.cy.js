describe('Carrinho de Compras', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve adicionar e verificar produtos no carrinho', () => {
        // Adicionar produtos ao carrinho
        cy.addProductToCart('Sauce Labs Backpack');
        cy.verifyCartBadgeCount(1);
        
        cy.addProductToCart('Sauce Labs Bike Light');
        cy.verifyCartBadgeCount(2);

        // Ir para o carrinho e verificar produtos
        cy.goToCart();

        // Verificar detalhes do primeiro produto
        cy.verifyProductInCart(
            'Sauce Labs Backpack',
            '$29.99',
            'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
        );

        // Verificar detalhes do segundo produto
        cy.verifyProductInCart(
            'Sauce Labs Bike Light',
            '$9.99',
            'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.'
        );

        // Verificar elementos da interface do carrinho
        cy.get('[data-test="cart-quantity-label"]').should('have.text', 'QTY');
        cy.get('[data-test="cart-desc-label"]').should('have.text', 'Description');
        cy.get('[data-test="continue-shopping"]').should('be.visible').and('be.enabled');
        cy.get('[data-test="checkout"]').should('be.visible').and('be.enabled');
    });

    it('Deve remover produtos do carrinho', () => {
        // Adicionar produtos
        cy.addProductToCart('Sauce Labs Backpack');
        cy.addProductToCart('Sauce Labs Bike Light');
        cy.verifyCartBadgeCount(2);

        // Remover produtos
        cy.removeProductFromCart('Sauce Labs Backpack');
        cy.verifyCartBadgeCount(1);

        cy.removeProductFromCart('Sauce Labs Bike Light');
        cy.verifyCartBadgeCount(0);
    });
});