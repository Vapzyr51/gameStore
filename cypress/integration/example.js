describe('show login to the user', () => {

    beforeEach(() => {
        cy.visit('http://gamestore.test/login')
    })

    it('Display the form', () => {
        cy.get('[input]')
        .should('have.length', 4);
    });

    it('swap the displayed menu', ()=> {
        cy.contains("S'inscrire").click();
        cy.get('[input]')
        .should('have.length', 5);
    });

    it('complete the form and log in with right values', () => {
        cy.get('#email').type('vapzyr@gmail.com').should('have.value', 'vapzyr@gmail.com');
        cy.get('#password').type('').should('have.value', '123456');
        cy.contains('Se connecter').click();
    });

    it('fails if we give wrong values', () => {
        cy.get('#email').type('vapzyr@gmail.com').should('have.value', 'failed_test'); // no @, regex should reject that
        cy.get('#password').type('').should('have.value', 'failed_test');
        cy.contains('Se connecter').click();
    });
    
    it('should also fail if we give values with wrong criteria', () => {
        cy.get('#email').type('vapzyr@gmail.com').should('have.value', 'vapzyrgmail.com'); // no @, regex should reject that
        cy.get('#password').type('').should('have.value', '123456');
        cy.contains('Se connecter').click();
    });

    it('auto-log you if you are still logged in', () => {
        // to complete
    });
});