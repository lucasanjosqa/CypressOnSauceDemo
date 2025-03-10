Cypress.Commands.add('login',  (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});

// Add a product to cart by name
Cypress.Commands.add('addProductToCart', (productName) => {
    cy.contains('.inventory_item', productName)
        .find('[data-test^="add-to-cart"]')
        .click();
});

// Remove a product from cart by name
Cypress.Commands.add('removeProductFromCart', (productName) => {
    cy.contains('.inventory_item', productName)
        .find('[data-test^="remove"]')
        .click();
});

// Verify cart badge count
Cypress.Commands.add('verifyCartBadgeCount', (count) => {
    if (count === 0) {
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
    } else {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', count.toString());
    }
});

// Navigate to cart
Cypress.Commands.add('goToCart', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Your Cart');
});

// Verify product in cart
Cypress.Commands.add('verifyProductInCart', (productName, price, description) => {
    cy.contains('[data-test="inventory-item-name"]', productName).should('exist');
    if (price) {
        cy.contains('.inventory_item_price', price).should('exist');
    }
    if (description) {
        cy.contains('[data-test="inventory-item-desc"]', description).should('exist');
    }
});

// Complete checkout information
Cypress.Commands.add('fillCheckoutInfo', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
});

// Sort products
Cypress.Commands.add('sortProducts', (sortOption) => {
    cy.get('[data-test="product_sort_container"]').select(sortOption);
});

// Verify product details
Cypress.Commands.add('verifyProductDetails', (productName, price, description) => {
    cy.contains('.inventory_item', productName).within(() => {
        if (price) {
            cy.get('.inventory_item_price').should('have.text', price);
        }
        if (description) {
            cy.get('.inventory_item_desc').should('contain', description);
        }
    });
});

// Start checkout process
Cypress.Commands.add('startCheckout', () => {
    cy.get('[data-test="checkout"]').click();
});

// Verify checkout overview
Cypress.Commands.add('verifyCheckoutOverview', () => {
    cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview');
    cy.get('[data-test="cart-quantity-label"]').should('have.text', 'QTY');
    cy.get('[data-test="cart-desc-label"]').should('have.text', 'Description');
    cy.get('[data-test="payment-info-label"]').should('have.text', 'Payment Information:').and('be.visible');
    cy.get('[data-test="shipping-info-label"]').should('have.text', 'Shipping Information:').and('be.visible');
    cy.get('[data-test="total-info-label"]').should('have.text', 'Price Total').and('be.visible');
});

// Verify total amount
Cypress.Commands.add('verifyTotalAmount', (amount) => {
    cy.get('[data-test="total-label"]').should('have.text', `Total: ${amount}`).and('be.visible');
});

// Complete order
Cypress.Commands.add('completeOrder', () => {
    cy.get('[data-test="finish"]').should('have.text', 'Finish').and('be.visible').and('be.enabled');
    cy.get('[data-test="finish"]').click();
});

// Verify order completion
Cypress.Commands.add('verifyOrderCompletion', () => {
    cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!').and('be.visible');
    cy.get('[data-test="pony-express"]').should('be.visible');
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!').and('be.visible');
    cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!').and('be.visible');
});

// Return to products
Cypress.Commands.add('returnToProducts', () => {
    cy.get('[data-test="back-to-products"]')
        .should('have.text', 'Back Home')
        .and('be.visible')
        .and('be.enabled')
        .click();
});

// Verify footer
Cypress.Commands.add('verifyFooter', () => {
    cy.get('[data-test="footer"]')
        .should('have.text', 'TwitterFacebookLinkedIn© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        .and('be.visible');
});

// Verify login page elements
Cypress.Commands.add('verifyLoginPage', () => {
    cy.get('.login_logo').should('be.visible');
    cy.get('#user-name').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#login-button').should('be.visible').and('be.enabled');
});

// Verify successful login
Cypress.Commands.add('verifySuccessfulLogin', () => {
    cy.url().should('include', 'inventory.html');
    cy.get('.title').should('have.text', 'Products').and('be.visible');
});

// Verify error message
Cypress.Commands.add('verifyErrorMessage', (message) => {
    cy.get('.error-message-container')
        .should('exist')
        .and('be.visible');
    if (message) {
        cy.get('[data-test="error"]').should('have.text', message);
    }
});

// Clear login fields
Cypress.Commands.add('clearLoginFields', () => {
    cy.get('#user-name').clear();
    cy.get('#password').clear();
});

// Verify product image
Cypress.Commands.add('verifyProductImage', (productName, imageSrc) => {
    cy.get(`[data-test="inventory-item-${productName}-img"]`)
        .should('have.class', 'inventory_item_img')
        .and('have.attr', 'src', imageSrc)
        .and('be.visible');
});

// Verify product list
Cypress.Commands.add('verifyProductList', () => {
    cy.get('.inventory_list').should('be.visible');
    cy.get('.inventory_item').should('have.length.at.least', 1);
});

// Sort products and verify
Cypress.Commands.add('sortAndVerifyProducts', (sortOption, firstExpectedPrice, lastExpectedPrice) => {
    cy.get('[data-test="product-sort-container"]')
        .should('be.visible')
        .and('be.enabled')
        .select(sortOption);

    if (firstExpectedPrice) {
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
            .should('have.text', firstExpectedPrice);
    }
    if (lastExpectedPrice) {
        cy.get(':nth-child(6) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
            .should('have.text', lastExpectedPrice);
    }
});

// Verify social media links
Cypress.Commands.add('verifySocialMediaLinks', () => {
    cy.get('[data-test="social-twitter"]').should('be.visible');
    cy.get('[data-test="social-facebook"]').should('be.visible');
    cy.get('[data-test="social-linkedin"]').should('be.visible');
});

// Verify responsive elements
Cypress.Commands.add('verifyResponsiveElements', () => {
    // Verificar elementos do cabeçalho
    cy.get('.login_logo').should('be.visible');
    cy.get('#user-name').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#login-button').should('be.visible').and('be.enabled');
});

// Verify responsive layout
Cypress.Commands.add('verifyResponsiveLayout', (viewport) => {
    cy.viewport(viewport.width, viewport.height);
    cy.visit('https://www.saucedemo.com/');
    cy.verifyResponsiveElements();
});

// Verify responsive navigation
Cypress.Commands.add('verifyResponsiveNavigation', (viewport) => {
    cy.viewport(viewport.width, viewport.height);
    cy.visit('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');
    cy.verifySuccessfulLogin();

    // Verificar elementos da navegação
    cy.get('.bm-burger-button').should('be.visible');
    cy.get('.shopping_cart_link').should('be.visible');
    cy.get('.product_sort_container').should('be.visible');
});