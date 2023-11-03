class User < ApplicationRecord
    has_secure_password
    attribute :available, :boolean, default: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, uniqueness: true, presence: true
    validates :password, length: { minimum: 4 }
    validates :password_confirmation, presence: true

    has_many :conversations, foreign_key: :user1_id, class_name: 'Conversation'
    has_many :messages

    has_many :speechtasks
end
