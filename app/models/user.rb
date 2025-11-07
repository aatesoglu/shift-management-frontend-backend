class User < ApplicationRecord
  belongs_to :department
  has_many :schedules, dependent: :destroy
  has_many :leafes, dependent: :destroy  # güncel isim
end
