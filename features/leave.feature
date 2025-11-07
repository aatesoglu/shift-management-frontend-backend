Feature: Leave Management
  As an employee
  I want to manage my leaves
  So that I can request and track my time off

  Scenario: Submit leave request
    Given I am logged in as "John Doe"
    When I submit a leave request with the following details:
      | Start Date | 2025-12-01     |
      | End Date   | 2025-12-05     |
      | Reason     | Annual Leave    |
    Then I should see "Leave request submitted successfully"
    And the leave request should have "pending" status

