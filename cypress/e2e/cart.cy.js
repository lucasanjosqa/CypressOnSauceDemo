describe('Navegação e Exibição de Produtos', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Deve fazer login com credenciais válidas', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.login(username, password);
        cy.url().should('include', 'inventory.html')

     
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        cy.get('[data-test="shopping-cart-link"]').should('be.visible');
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.enabled');
        cy.get('[data-test="shopping-cart-link"]').should('be.visible');
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Your Cart');
        cy.get('[data-test="cart-quantity-label"]').should('have.text', 'QTY');
        cy.get('[data-test="cart-desc-label"]').should('have.text', 'Description');
        cy.get(':nth-child(3) > [data-test="item-quantity"]').should('be.visible');
        cy.get('[data-test="continue-shopping"]').should('be.visible');
        cy.get('[data-test="continue-shopping"]').should('be.enabled');
        cy.get('[data-test="checkout"]').should('be.visible');
        cy.get('[data-test="checkout"]').should('be.enabled');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
        cy.get(':nth-child(3) > .cart_item_label > [data-test="inventory-item-desc"]').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').should('have.text', '$29.99');
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Bike Light');
        cy.get(':nth-child(4) > .cart_item_label > [data-test="inventory-item-desc"]').should('have.text', 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').should('have.text', '$9.99');
    
    })
});