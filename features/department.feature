Feature: Department Management
  As a system administrator
  I want to manage departments
  So that I can organize employees effectively

  Scenario: Create a new department
    Given I am on the departments page
    When I click "New Department" button
    And I fill in "Name" with "IT Department"
    And I click "Save" button
    Then I should see "Department created successfully"
    And I should see "IT Department" in the departments list

 