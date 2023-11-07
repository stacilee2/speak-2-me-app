class Speechtask < ApplicationRecord
    validates :assignment, presence: true
    
    belongs_to :user
end
