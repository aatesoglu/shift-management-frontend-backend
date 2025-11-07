class Schedule < ApplicationRecord
  belongs_to :user
  belongs_to :shift

  validates :work_date, presence: true
  validate :no_double_scheduling

  private

  def no_double_scheduling
    if Schedule.exists?(user_id: user_id, work_date: work_date)
      errors.add(:work_date, "aynı güne iki vardiya atanamaz.")
    end
  end
end
