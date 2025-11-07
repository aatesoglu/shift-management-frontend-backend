Feature: Employee (User) Management
  As an HR manager
  I want to manage employees
  So that I can track their shifts and leaves

  Scenario: Add new employee to a department
    Given I am on the employees page
    And there is a department named "IT"
    When I click "Add Employee" button
    And I fill in the following:
      | First Name | John          |
      | Last Name  | Doe           |
      | Email      | john@test.com |
      | Department | IT            |
    And I click "Save" button
    Then I should see "Employee added successfully"
    And I should see "John Doe" in the employees list

 

 