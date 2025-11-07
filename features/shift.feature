Feature: Shift Management
  As a shift manager
  I want to manage shifts
  So that I can organize work schedules effectively

  Scenario: Create a new shift
    Given I am on the shifts page
    When I click "New Shift" button
    And I fill in the following:
      | Name       | Morning Shift |
      | Start Time | 08:00        |
      | End Time   | 16:00        |
    And I click "Save" button
    Then I should see "Shift created successfully"
    And I should see "Morning Shift (08:00-16:00)" in the shifts list

