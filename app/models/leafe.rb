class Leafe < ApplicationRecord
  self.table_name = "leaves"
  belongs_to :user

  validates :start_date, :end_date, :reason, :status, presence: true
  validate :valid_date_range

  private

  def valid_date_range
    if end_date < start_date
      errors.add(:end_date, "başlangıç tarihinden önce olamaz.")
    end
  end
end
