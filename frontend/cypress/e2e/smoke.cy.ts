describe('VardiyaPro smoke test', () => {
  it('loads dashboard and navigates to Users page', () => {
    cy.visit('/');

    // Sidebar and header render
    cy.contains('VardiyaPro');
    cy.contains('Dashboard');

    // Navigate to Users
    cy.contains('Çalışanlar').click();
    cy.url().should('include', '/users');

    // Users page renders heading
    cy.contains('Çalışanlar');
  });
});
