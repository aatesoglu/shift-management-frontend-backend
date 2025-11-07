describe('Schedule page', () => {
  it('navigates to Schedule and sees table and export button', () => {
    cy.visit('/');
    cy.get('[data-testid="nav-schedule"]').click();
    cy.url().should('include', '/schedule');
    cy.contains('Vardiya Çizelgesi');
    cy.get('[data-testid="schedule-export-btn"]').should('be.visible');
    cy.contains('Çalışan');
  });
});
