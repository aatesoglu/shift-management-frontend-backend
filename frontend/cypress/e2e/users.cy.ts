describe('Users page - Add new employee to a department', () => {
  it('adds John Doe to IT and shows success + list item', () => {
    cy.visit('/');
    cy.get('[data-testid="nav-users"]').click();
    cy.url().should('include', '/users');
    cy.contains('Çalışanlar');

    cy.get('[data-testid="users-add-btn"]').click();
    cy.get('[data-testid="users-first-name"]').type('John');
    cy.get('[data-testid="users-last-name"]').type('Doe');
    cy.get('[data-testid="users-email"]').type('john@test.com');
    cy.get('[data-testid="users-department"]').select('IT');
    cy.get('[data-testid="users-save"]').click();

    cy.get('[data-testid="users-success"]').should('contain.text', 'Employee added successfully');
    cy.contains('John Doe');
  });
});
