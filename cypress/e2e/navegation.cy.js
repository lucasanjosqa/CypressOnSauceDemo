
describe('Navegação e Exibição de Produtos', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Deve fazer login com credenciais válidas', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.login(username, password);
        cy.url().should('include', 'inventory.html')

        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.class', 'inventory_item_img');
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'alt', 'Sauce Labs Backpack');
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.class', 'inventory_item_name');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible');
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]').should('have.class', 'inventory_item_desc');
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]').should('be.visible');
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('have.class', 'inventory_item_price');
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('be.visible');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', 'Add to cart');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.enabled');
        cy.get('[data-test="social-twitter"]').should('be.visible');
        cy.get('[data-test="social-facebook"]').should('be.visible');
        cy.get('[data-test="social-linkedin"]').should('be.visible');
        cy.get('[data-test="footer-copy"]').should('have.text', '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
        cy.get('[data-test="footer-copy"]').should('have.class', 'footer_copy');
        cy.get('[data-test="footer-copy"]').should('be.visible');
        
        cy.get('[data-test="product-sort-container"]').should('have.class', 'product_sort_container');
        cy.get('[data-test="product-sort-container"]').should('be.visible');
        cy.get('[data-test="product-sort-container"]').should('be.enabled');
        cy.get('[data-test="product-sort-container"]').select('za');
        cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Test.allTheThings() T-Shirt (Red)');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('have.text', '$7.99');
        cy.get(':nth-child(6) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('have.text', '$49.99');
        cy.get('[data-test="product-sort-container"]').select('hilo');
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('have.text', '$49.99');
        cy.get(':nth-child(6) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('have.text', '$7.99');
    });
});