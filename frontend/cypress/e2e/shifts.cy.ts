describe('Shifts page', () => {
  it('navigates to Shifts and clicks Add', () => {
    cy.visit('/');
    cy.get('[data-testid="nav-shifts"]').click();
    cy.url().should('include', '/shifts');
    cy.contains('Vardiyalar');
    cy.get('[data-testid="shifts-add-btn"]').should('be.visible').click();
    cy.get('[data-testid^="shift-card-"]').should('have.length.greaterThan', 0);
  });
});
