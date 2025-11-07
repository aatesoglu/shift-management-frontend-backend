describe('Departments page', () => {
  it('navigates to Departments and sees cards', () => {
    cy.visit('/');
    cy.get('[data-testid="nav-departments"]').click();
    cy.url().should('include', '/departments');
    cy.contains('Departmanlar');
    cy.get('[data-testid="departments-add-btn"]').should('be.visible');
    cy.get('[data-testid^="department-card-"]').should('have.length.greaterThan', 0);
  });
});
