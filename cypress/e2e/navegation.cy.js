describe('Navegação e Exibição de Produtos', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
        cy.verifySuccessfulLogin();
    });

    it('Deve exibir detalhes do produto corretamente', () => {
        // Verificar imagem do produto
        cy.verifyProductImage(
            'sauce-labs-backpack',
            '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg'
        );

        // Verificar detalhes do produto
        cy.verifyProductDetails(
            'Sauce Labs Backpack',
            '$29.99',
            'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
        );

        // Verificar botão de adicionar ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .should('have.text', 'Add to cart')
            .and('be.visible')
            .and('be.enabled');
    });

    it('Deve ordenar produtos corretamente', () => {
        // Verificar lista de produtos
        cy.verifyProductList();

        // Ordenar por nome (Z to A)
        cy.sortAndVerifyProducts('za');
        cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]')
            .should('have.text', 'Test.allTheThings() T-Shirt (Red)');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
            .should('have.text', 'Sauce Labs Backpack');

        // Ordenar por preço (menor para maior)
        cy.sortAndVerifyProducts('lohi', '$7.99', '$49.99');

        // Ordenar por preço (maior para menor)
        cy.sortAndVerifyProducts('hilo', '$49.99', '$7.99');
    });

    it('Deve exibir elementos do rodapé corretamente', () => {
        // Verificar links de redes sociais
        cy.verifySocialMediaLinks();

        // Verificar texto do rodapé
        cy.verifyFooter();
    });
});