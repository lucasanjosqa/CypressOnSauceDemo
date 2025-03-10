describe('Testes de Responsividade', () => {
    const viewports = [
        { name: 'iPhone 15', width: 1179, height: 2556 },
        { name: 'Samsung Galaxy S23', width: 1080, height: 2340 },
        { name: 'iPad Air', width: 1640, height: 2360 },
    ];
    
    viewports.forEach(({ name, width, height}) => {
        it(`Deve exibir o layout corretamente em ${name}`, () => {
            cy.viewport(width, height);
            cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').should('be.visible'); 
            cy.get('#password').should('be.visible'); 
            cy.get('#login-button').should('be.visible')

            cy.wait(5000)
        });
    })

})