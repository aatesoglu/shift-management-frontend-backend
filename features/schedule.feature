Feature: Schedule Management
  As a shift manager
  I want to manage employee schedules
  So that I can assign shifts to employees effectively

  Scenario: Assign shift to employee
    Given there is an employee "John Doe"
    And there is a shift "Morning Shift" from "08:00" to "16:00"
    When I assign "Morning Shift" to "John Doe" for "2025-11-08"
    Then I should see "Schedule created successfully"
    And I should see "John Doe" scheduled for "Morning Shift" on "2025-11-08"

