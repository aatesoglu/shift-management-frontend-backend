require 'test_helper'

Given('I am on the {string} page') do |page_name|
  visit "/#{page_name.downcase}"
end

When('I click {string} button') do |button_name|
  click_button(button_name)
end

When('I fill in {string} with {string}') do |field, value|
  fill_in(field, with: value)
end

Then('I should see {string}') do |text|
  expect(page).to have_content(text)
end

Then('I should not see {string}') do |text|
  expect(page).not_to have_content(text)
end

When('I confirm deletion') do
  accept_confirm
end

Given('there is a department named {string}') do |name|
  Department.create!(name: name)
end

When('I try to create another department with name {string}') do |name|
  step 'I click "New Department" button'
  step "I fill in \"Name\" with \"#{name}\""
  step 'I click "Save" button'
end

Then('I should see {string} error message') do |message|
  expect(page).to have_content(message)
end