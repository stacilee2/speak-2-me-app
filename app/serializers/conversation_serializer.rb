class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :sender_id, :recipient_id

  has_many :messages
end
