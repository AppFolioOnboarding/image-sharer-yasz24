class Feedback < ApplicationRecord
  validates :userName, presence: true
  validates :comments, presence: true
end
