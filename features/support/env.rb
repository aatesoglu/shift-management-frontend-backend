# frozen_string_literal: true

ENV['RAILS_ENV'] = 'test'
require_relative '../config/environment'
require 'rspec/rails'
require 'capybara/rails'
require 'capybara/cucumber'
require 'cucumber/rails'

# Capybara configuration
Capybara.default_driver = :rack_test
Capybara.javascript_driver = :selenium_chrome_headless

# Database cleaner configuration
DatabaseCleaner.strategy = :transaction
DatabaseCleaner.clean_with(:truncation)

Before do
  DatabaseCleaner.start
end

After do
  DatabaseCleaner.clean
end