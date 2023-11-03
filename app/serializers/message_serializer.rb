class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :time, :username

  belongs_to :conversation
end

