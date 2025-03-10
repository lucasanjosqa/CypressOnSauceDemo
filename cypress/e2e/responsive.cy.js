describe('Testes de Responsividade', () => {
    const viewports = [
        { name: 'iPhone 15', width: 1179, height: 2556 },
        { name: 'Samsung Galaxy S23', width: 1080, height: 2340 },
        { name: 'iPad Air', width: 1640, height: 2360 },
        { name: 'Desktop', width: 1920, height: 1080 }
    ];
    
    describe('Layout da Página de Login', () => {
        viewports.forEach((viewport) => {
            it(`Deve exibir o layout de login corretamente em ${viewport.name}`, () => {
                cy.verifyResponsiveLayout(viewport);
            });
        });
    });

    describe('Navegação Responsiva', () => {
        viewports.forEach((viewport) => {
            it(`Deve exibir a navegação corretamente em ${viewport.name}`, () => {
                cy.verifyResponsiveNavigation(viewport);
            });
        });
    });

    describe('Layout do Carrinho', () => {
        viewports.forEach((viewport) => {
            it(`Deve exibir o carrinho corretamente em ${viewport.name}`, () => {
                cy.verifyResponsiveLayout(viewport);
                cy.login('standard_user', 'secret_sauce');
                cy.verifySuccessfulLogin();
                
                // Adicionar produto ao carrinho
                cy.addProductToCart('Sauce Labs Backpack');
                
                // Verificar carrinho
                cy.goToCart();
                cy.verifyProductInCart('Sauce Labs Backpack', '$29.99');
            });
        });
    });
});