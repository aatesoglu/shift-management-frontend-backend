describe('Leaves page', () => {
  it('navigates to Leaves and clicks pending action buttons', () => {
    cy.visit('/');
    cy.get('[data-testid="nav-leaves"]').click();
    cy.url().should('include', '/leaves');
    cy.contains('İzin Talepleri');
    cy.get('[data-testid="leaves-add-btn"]').should('be.visible').click();
    // If there are pending items, buttons should exist (mock UI has at least one pending)
    cy.get('[data-testid^="leave-approve-"]').first().click();
    cy.get('[data-testid^="leave-reject-"]').first().click();
  });
});
