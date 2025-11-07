class Shift < ApplicationRecord
  has_many :schedules, dependent: :destroy

  validates :name, :start_time, :end_time, presence: true
end

