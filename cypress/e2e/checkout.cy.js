describe('Realizar Checkout com Sucesso', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Deve fazer login com credenciais válidas', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.login(username, password);
        cy.url().should('include', 'inventory.html')

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-badge"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear('L');
        cy.get('[data-test="firstName"]').type('Lucas');
        cy.get('[data-test="lastName"]').clear();
        cy.get('[data-test="lastName"]').type('Anjos');
        cy.get('[data-test="postalCode"]').clear();
        cy.get('[data-test="postalCode"]').type('68906096');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview');
        cy.get('[data-test="cart-quantity-label"]').should('have.text', 'QTY');
        cy.get('[data-test="cart-desc-label"]').should('have.text', 'Description');
        cy.get('[data-test="payment-info-label"]').should('have.text', 'Payment Information:');
        cy.get('[data-test="payment-info-label"]').should('be.visible');
        cy.get('[data-test="shipping-info-label"]').should('have.text', 'Shipping Information:');
        cy.get('[data-test="shipping-info-label"]').should('be.visible');
        cy.get('[data-test="total-info-label"]').should('have.text', 'Price Total');
        cy.get('[data-test="total-info-label"]').should('be.visible');
        cy.get('[data-test="total-label"]').should('have.text', 'Total: $43.18');
        cy.get('[data-test="total-label"]').should('be.visible');
        cy.get('[data-test="cancel"]').should('have.text', 'Cancel');
        cy.get('[data-test="cancel"]').should('be.visible');
        cy.get('[data-test="cancel"]').should('be.enabled');
        cy.get('[data-test="finish"]').should('have.text', 'Finish');
        cy.get('[data-test="finish"]').should('be.visible');
        cy.get('[data-test="finish"]').should('be.enabled');
        cy.get('[data-test="footer"]').should('have.text', 'TwitterFacebookLinkedIn© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
        cy.get('[data-test="footer"]').should('be.visible');
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!');
        cy.get('[data-test="title"]').should('be.visible');
        cy.get('[data-test="pony-express"]').should('be.visible');
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
        cy.get('[data-test="complete-header"]').should('be.visible');
        cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get('[data-test="complete-text"]').should('be.visible');
        cy.get('[data-test="back-to-products"]').should('have.text', 'Back Home');
        cy.get('[data-test="back-to-products"]').should('be.visible');
        cy.get('[data-test="back-to-products"]').should('be.enabled');
        cy.get('[data-test="footer"]').should('have.text', 'TwitterFacebookLinkedIn© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
        cy.get('[data-test="footer"]').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
    })
    
});